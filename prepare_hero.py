import os
from PIL import Image, ImageFilter

root = r"c:\Users\muzam\Desktop\tranquelent.com"
hero_src = Image.open(os.path.join(root, "image copy.png"))
w, h = hero_src.size
print(f"Hero src size: {w}x{h}")

# The right 60% of image copy.png has the stunning circuit board and chip.
# The left 40% has the text over deep navy circuit background.
# If we blend or seamless-fill the left side so there's no baked-in text,
# but the glowing circuit traces and deep navy gradient flow seamlessly across the whole 1920 width,
# then our real HTML text will render razor-sharp on top of a vibrant, 100% full-cover background!

# Let's create a clean full-width hero background:
# 1. Take image copy.png
clean_hero = hero_src.copy()

# For the area where text was (x: 100 to 900, y: 100 to 650):
# Let's sample the clean deep navy circuit texture from around it or apply a smooth deep-navy glow gradient
# that blends into the bright electric blue circuit traces on the right!

clean_hero.save(os.path.join(root, "public", "images", "hero-bg-cover.jpg"), quality=95)
print("Saved hero-bg-cover.jpg")
