import os
from PIL import Image, ImageDraw, ImageFilter

root = r"c:\Users\muzam\Desktop\tranquelent.com"
pub_img = os.path.join(root, "public", "images")

# 1. Clean Hero Background
hero_src = Image.open(os.path.join(root, "image copy.png"))
w, h = hero_src.size

# Chip starts at x=1020, y=0..h
clean_hero = Image.new("RGB", (w, h), (3, 21, 43))
chip_clean = hero_src.crop((1020, 0, w, h))
clean_hero.paste(chip_clean, (1020, 0))

# Left side: create deep navy with subtle cyan/blue glow gradients
# Sample the background color from x=1020 edge:
for x in range(1020):
    t = (x / 1020.0) ** 2.2 # Smooth acceleration towards chip
    for y in range(h):
        edge_r, edge_g, edge_b = hero_src.getpixel((1020, y))[:3]
        base_r, base_g, base_b = (3, 21, 43)
        r = int(base_r * (1 - t) + edge_r * t)
        g = int(base_g * (1 - t) + edge_g * t)
        b = int(base_b * (1 - t) + edge_b * t)
        clean_hero.putpixel((x, y), (r, g, b))

# Also take top and bottom circuit tracks
top_edge = hero_src.crop((0, 0, 1020, 70))
bot_edge = hero_src.crop((0, h-70, 1020, h))

# Paste with subtle transparency
for x in range(1020):
    fade = (x / 1020.0) ** 1.5
    for y in range(70):
        tr, tg, tb = top_edge.getpixel((x, y))[:3]
        br, bg, bb = clean_hero.getpixel((x, y))
        clean_hero.putpixel((x, y), (int(br*(1-fade) + tr*fade), int(bg*(1-fade) + tg*fade), int(bb*(1-fade) + tb*fade)))
    for y in range(h-70, h):
        tr, tg, tb = bot_edge.getpixel((x, y - (h-70)))[:3]
        br, bg, bb = clean_hero.getpixel((x, y))
        clean_hero.putpixel((x, y), (int(br*(1-fade) + tr*fade), int(bg*(1-fade) + tg*fade), int(bb*(1-fade) + tb*fade)))

clean_hero.save(os.path.join(pub_img, "hero-bg-cover.jpg"), quality=95)
clean_hero.save(os.path.join(pub_img, "hero-bg.jpg"), quality=95)
print("Hero background 100% clean and pristine!")

# 2. Clean CTA Globe Background
cta_src = Image.open(os.path.join(root, "image copy 8.png"))
cw, ch = cta_src.size

clean_cta = Image.new("RGB", (cw, ch), (3, 24, 46))
# Globe is on the right. In image copy 8.png, x > 1750 and x from 1000..1400 is clean earth.
# The button in image copy 8.png was at x: 1410 to 1720, y: 130 to 250.
# Let's reconstruct the globe smoothly:
globe_right = cta_src.crop((1000, 0, cw, ch)).copy()
# Sample the clean upper/lower orbital arcs to smoothly cover the button area
upper_orbit = globe_right.crop((410, 0, 720, 120))
lower_orbit = globe_right.crop((410, 260, 720, ch))

# Fill button area (x: 410..720, y: 120..260) with interpolated orbital curve
for x in range(410, min(720, globe_right.width)):
    for y in range(120, min(260, globe_right.height)):
        top_c = globe_right.getpixel((x, 119))
        bot_c = globe_right.getpixel((x, min(260, globe_right.height-1)))
        alpha = (y - 120) / 140.0
        r = int(top_c[0] * (1 - alpha) + bot_c[0] * alpha)
        g = int(top_c[1] * (1 - alpha) + bot_c[1] * alpha)
        b = int(top_c[2] * (1 - alpha) + bot_c[2] * alpha)
        globe_right.putpixel((x, y), (r, g, b))

# Apply subtle blur to that region
region = globe_right.crop((400, 110, 730, 270)).filter(ImageFilter.GaussianBlur(radius=3))
globe_right.paste(region, (400, 110))

clean_cta.paste(globe_right, (1000, 0))

# Left side smooth fade into globe
for x in range(1000):
    t = (x / 1000.0) ** 2.5
    for y in range(ch):
        edge_c = clean_cta.getpixel((1000, y))
        base_c = (3, 24, 46)
        r = int(base_c[0] * (1 - t) + edge_c[0] * t)
        g = int(base_c[1] * (1 - t) + edge_c[1] * t)
        b = int(base_c[2] * (1 - t) + edge_c[2] * t)
        clean_cta.putpixel((x, y), (r, g, b))

clean_cta.save(os.path.join(pub_img, "cta-banner-bg.jpg"), quality=95)
clean_cta.save(os.path.join(pub_img, "cta-globe-clean.jpg"), quality=95)
print("CTA background 100% clean and pristine!")
