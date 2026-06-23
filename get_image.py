import sys
from PIL import Image

def main():
    if len(sys.argv) < 2:
        return
    img = Image.open(sys.argv[1])
    # The actual goal is to look at it, but if view_image fails, we will write a script to display the structure
