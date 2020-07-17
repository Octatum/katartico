from PIL import Image
from resizeimage import resizeimage
import sys

image_path = sys.argv[1]

MAX_SIZE = 1800

with open(image_path, 'r+b') as f:
    with Image.open(f) as image:
        width_is_larger = image.size[0] > image.size[1]
        should_resize = max(image.size) > MAX_SIZE

# do something else...

if should_resize:
    with Image.open(image_path) as image:
        if width_is_larger:
            cover = resizeimage.resize_width(image, MAX_SIZE)
        else:
            cover = resizeimage.resize_height(image, MAX_SIZE)
        cover.save(image_path, image.format)
