const path = require('path');
const fs = require('mz/fs');
const legacyFs = require('fs');
const matter = require('gray-matter');
const sanity = require('@sanity/client');

require('dotenv').config();

const token = process.env.SANITY_TOKEN;

const client = sanity({
  projectId: 'eeviws8d',
  dataset: 'production',
  token, // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});

const basePath = process.env.DIR_PATH;
const contentPath = 'content/projects';
const assetPath = 'static';

const directoryPath = path.join(basePath, contentPath);

async function processFiles() {
  const filteredFiles = await fs
    .readdir(directoryPath)
    .then(files => files.filter(s => s.endsWith('.md')));
  const data = await Promise.all(filteredFiles.map(processMdFile));
  data.forEach(processProject);
}
function generateUniqueId() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
async function processProjectContentItem(projectContentItem) {
  const { width, height, videoId, image: imageFileName } = projectContentItem;
  const result = {
    _type: null,
    _key: generateUniqueId(),
    width: Number(width),
    height: Number(height),
  };

  if (projectContentItem.type === 'image') {
    const imagePath = path.join(basePath, assetPath, imageFileName);
    try {
      const response = await client.assets.upload(
        'image',
        legacyFs.createReadStream(imagePath),
        { filename: imageFileName }
      );

      result._type = 'projectImage';
      result.image = {
        asset: {
          _type: 'reference',
          _ref: response._id,
        },
      };
      result.description = 'Imagen';
    } catch (error) {
      console.error('Upload failed:', error.message);
    }
  }

  if (projectContentItem.type === 'youtube-video') {
    console.log('video');
    result._type = 'projectVideo';
    result.videoId = videoId;
  }

  return result;
}

async function processProject(project) {
  const projectContentItems = await Promise.all(
    project.data.content.map(processProjectContentItem)
  );
  const bannerPath = path.join(basePath, assetPath, project.data.banner);
  const bannerData = await client.assets.upload(
    'image',
    legacyFs.createReadStream(bannerPath),
    { filename: project.data.banner }
  );

  const sanityReadyProject = {
    _id: project.data.title
      .replace(' ', '_')
      .toLowerCase()
      .replace(/\W/g, ''),
    _type: 'projectPage',
    title: project.data.title,
    content: {
      es: project.content,
      en: project.data.bodyEnglish,
    },
    banner: {
      asset: {
        _type: 'reference',
        _ref: bannerData._id,
      },
    },
    items: projectContentItems,
  };

  try {
    const response = await client.createOrReplace(sanityReadyProject);
    console.log(`Project ${project.data.title} was created successfully`);
    console.log(response);
  } catch (error) {
    console.error("Project couldn't be created");
    console.error(error);
  }
}

async function processMdFile(mdFileName) {
  const filePath = path.join(basePath, contentPath, mdFileName);
  const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
  return matter(fileContent);
}

processFiles();
