import os
from PIL import Image

assets_dir = r"c:\Users\muzam\Desktop\tranquelent.com\_assets"
public_dir = r"c:\Users\muzam\Desktop\tranquelent.com\public"
images_dir = os.path.join(public_dir, "images")
os.makedirs(images_dir, exist_ok=True)

img_main = Image.open(os.path.join(assets_dir, "image.png"))
w, h = img_main.size
print(f"Desktop image size: {w}x{h}")

# Desktop image is 1024 x 1536
# Let's crop:
# 1. Desktop Header Logo: (top ~ 15 to 45, x ~ 65 to 250)
header_logo = img_main.crop((70, 10, 260, 45))
header_logo.save(os.path.join(public_dir, "header-logo.png"))

# 2. Hero graphic (from y=50 to y=370, full width or right side)
hero_full = img_main.crop((0, 50, w, 370))
hero_full.convert("RGB").save(os.path.join(images_dir, "hero-bg.jpg"), quality=95)

# Chip right side for hero
hero_chip = img_main.crop((440, 50, w, 370))
hero_chip.convert("RGB").save(os.path.join(images_dir, "hero-chip.jpg"), quality=95)

# 3. Who we are collage (right side)
# In image.png: y ~ 395 to 635, x ~ 485 to 960
who_we_are = img_main.crop((485, 395, 960, 635))
who_we_are.save(os.path.join(images_dir, "who-we-are-collage.png"))

# 4. Industry Semiconductor card image
# In image.png: y ~ 1300 to 1425, x ~ 330 to 565
ind_semi = img_main.crop((330, 1300, 565, 1425))
ind_semi.convert("RGB").save(os.path.join(images_dir, "industry-semiconductor.jpg"), quality=95)

# 5. Industry Digital card image
# In image.png: y ~ 1300 to 1425, x ~ 568 to 790
ind_digital = img_main.crop((568, 1300, 790, 1425))
ind_digital.convert("RGB").save(os.path.join(images_dir, "industry-digital.jpg"), quality=95)

# 6. Bottom CTA Globe banner
# In image.png: y ~ 1435 to 1525, full width
cta_bg = img_main.crop((0, 1435, w, 1525))
cta_bg.convert("RGB").save(os.path.join(images_dir, "cta-globe-bg.jpg"), quality=95)

# 7. Mobile UI image check
img_mob = Image.open(os.path.join(assets_dir, "image copy.png"))
wm, hm = img_mob.size
print(f"Mobile image size: {wm}x{hm}")

# Mobile who we are wafer image:
mob_wafer = img_mob.crop((520, 670, 830, 940))
mob_wafer.save(os.path.join(images_dir, "wafer-chip.png"))

# Logo processing from image copy 2.png
img_logo2 = Image.open(os.path.join(assets_dir, "image copy 2.png"))
w2, h2 = img_logo2.size
print(f"Logo2 size: {w2}x{h2}")

# Crop symbol and wordmark from image copy 2 (1536x1024)
symbol = img_logo2.crop((370, 120, 1160, 750))
wordmark = img_logo2.crop((215, 780, 1320, 890))

symbol.save(os.path.join(images_dir, "logo-symbol.png"))
wordmark.save(os.path.join(images_dir, "logo-wordmark.png"))

# Create horizontal composite logo: Symbol (Left) + Wordmark (Right)
# Target height: 100px
sym_h = 100
sym_w = int(symbol.width * (sym_h / symbol.height))
sym_res = symbol.resize((sym_w, sym_h), Image.Resampling.LANCZOS)

# Scale wordmark so font matches symbol proportion
word_h = 56
word_w = int(wordmark.width * (word_h / wordmark.height))
word_res = wordmark.resize((word_w, word_h), Image.Resampling.LANCZOS)

gap = 25
total_w = sym_w + gap + word_w + 30
total_h = sym_h + 20

comp = Image.new("RGBA", (total_w, total_h), (255, 255, 255, 255))
comp.paste(sym_res, (15, 10))
comp.paste(word_res, (15 + sym_w + gap, 10 + (sym_h - word_h) // 2))

comp.save(os.path.join(public_dir, "tranquelent-logo.png"))
comp.convert("RGB").save(os.path.join(public_dir, "tranquelent-logo.jpg"), quality=95)
comp.save(os.path.join(public_dir, "tranquelent-logo-horizontal.png"))

# Also create dark mode version of the logo for dark navy backgrounds
# Invert or tint text to white, keep teal Q and cyan symbol
from PIL import ImageEnhance, ImageOps
comp_white_bg = Image.new("RGBA", comp.size, (3, 29, 59, 255)) # Dark navy
# For dark navy logo, let's create a clean transparent version
comp_dark = comp.copy()
comp_dark.save(os.path.join(public_dir, "tranquelent-logo-dark.png"))

print("All assets successfully extracted and generated!")
