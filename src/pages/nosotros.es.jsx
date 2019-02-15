import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import _ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import { device } from '../utilities/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding: 3em 6vw 1em;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Picture = styled('img')`
  width: 100%;
  margin: 1em 0;
  background: ${props => props.theme.main};
`;

const PicturePortrait = styled(Picture)`
  display: none;

  ${device.portrait} {
    display: initial;
  }
`;

const PictureLandscape = styled(Picture)`
  ${device.portrait} {
    display: none;
  }

  display: initial;
`;

const PeopleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Person = styled.div`
  font-size: 1em;
  text-align: left;
  margin-bottom: 2em;

  ${device.laptop} {
    width: 40%;
    max-width: 400px;
    margin: 0 1em 1em;
  }
`;

const PersonPicture = styled(Picture)`
  ${device.laptop} {
    height: 250px;
    margin: 0.5em 0;
  }
`;

const ReactMarkdown = styled(_ReactMarkdown)`
  ${({ center }) => center && 'text-align: center'};

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
  }

  p {
    font-size: 16px;
    line-height: 1.2;
    margin: 1em 0;
  }

  em {
    font-style: italic;
  }

  ${device.tablet} {
    h2 {
      font-size: 2em;
    }
    p {
      margin: 0.5em 0;
    }
  }
`;

const Introduction = styled(ReactMarkdown)`
  line-height: 1.2;
  font-size: 17px;
  text-align: center;
  margin: 2rem 0;

  ${device.tablet} {
    p {
      font-size: 1.3em;
    }
  }
`;

const About = props => {
  const {
    banner,
    bannerMobile,
    description,
    teamMembers
  } = props.data.markdownRemark.frontmatter.pageBody;
  console.table(teamMembers);

  const sortedTeamMembers = teamMembers.sort((a, b) => a.index - b.index);

  return (
    <Layout path={props.location.pathname}>
      <Helmet title="Nosotros" />
      <Container>
        <PicturePortrait src={bannerMobile} />
        <PictureLandscape src={banner} />
        <Introduction center source={description} />
        <PeopleDiv>
          {sortedTeamMembers.map((item) => (
            <Person key={item.name}>
              <PersonPicture
                as={'img'}
                src={item.photo}
              />
              <ReactMarkdown source={item.body} />
            </Person>
          ))}
        </PeopleDiv>
      </Container>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(
          frontmatter: { 
            type: { eq: "page-about" }
            lang: { eq: "es" }
          }
        ) {
          frontmatter {
            pageBody {
              banner
              bannerMobile
              description
              teamMembers {
                name
                index
                photo
                body
              }
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
);
