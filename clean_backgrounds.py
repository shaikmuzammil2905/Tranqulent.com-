import os
from PIL import Image, ImageDraw, ImageFilter

root = r"c:\Users\muzam\Desktop\tranquelent.com"
pub_img = os.path.join(root, "public", "images")

# 1. CLEAN HERO BACKGROUND
# The original hero screenshot:
hero_src = Image.open(os.path.join(root, "image copy.png"))
w, h = hero_src.size

clean_hero = Image.new("RGB", (w, h), (4, 22, 46)) # Dark navy base

# The chip and circuit area is on the right (x from 850 to w)
chip_crop = hero_src.crop((850, 0, w, h))
clean_hero.paste(chip_crop, (850, 0))

# Also take vertical slices of pure circuit texture from above and below the text area (e.g. top 80px and bottom 100px)
# and blend across the left side with a soft ambient circuit glow:
top_strip = hero_src.crop((0, 0, 850, 80))
bot_strip = hero_src.crop((0, h - 80, 850, h))

# Paste with soft gradient
clean_hero.paste(top_strip, (0, 0))
clean_hero.paste(bot_strip, (0, h - 80))

# Blend the transition between x=650 and x=900 with a smooth gradient from deep navy to the circuit board
for x in range(600, 880):
    t = (x - 600) / 280.0
    for y in range(h):
        base_color = (4, 22, 46)
        if x < 850:
            # Sample navy color
            orig_color = clean_hero.getpixel((x, y))
            r = int(base_color[0] * (1 - t) + orig_color[0] * t)
            g = int(base_color[1] * (1 - t) + orig_color[1] * t)
            b = int(base_color[2] * (1 - t) + orig_color[2] * t)
            clean_hero.putpixel((x, y), (r, g, b))

# Apply slight blur to smooth out the middle area
clean_hero = clean_hero.filter(ImageFilter.SMOOTH_MORE)
# Re-paste the ultra sharp chip on right
clean_hero.paste(hero_src.crop((920, 0, w, h)), (920, 0))

clean_hero.save(os.path.join(pub_img, "hero-bg-cover.jpg"), quality=95)
clean_hero.save(os.path.join(pub_img, "hero-bg-clean.jpg"), quality=95)
clean_hero.save(os.path.join(pub_img, "hero-bg.jpg"), quality=95)
print("Saved 100% clean hero background!")

# 2. CLEAN CTA GLOBE BACKGROUND
# The original CTA screenshot:
cta_src = Image.open(os.path.join(root, "image copy 8.png"))
cw, ch = cta_src.size

clean_cta = Image.new("RGB", (cw, ch), (3, 24, 46))

# In image copy 8.png:
# The pure globe with stars (no button) is on the right: x from 980 to cw, but the button was around x: 1420 to 1720, y: 130 to 250
# Let's clone starfield from y=0..120 and y=260..ch over the button:
globe_area = cta_src.crop((950, 0, cw, ch)).copy()
# The button in globe_area is at x_rel ~ (1420-950)=470 to (1720-950)=770, y ~ 130 to 260
# In globe_area, sample clean stars from right side (x_rel: 780..950) or below (y: 270..380) to patch over button:
patch_source = globe_area.crop((780, 50, 950, 180)).resize((310, 135))
globe_area.paste(patch_source, (465, 130))

# Blur the patch boundaries slightly
clean_cta.paste(globe_area, (950, 0))

# Smooth transition from left deep navy (0..950) to the globe
for x in range(850, 1050):
    t = (x - 850) / 200.0
    for y in range(ch):
        base_color = (3, 24, 46)
        orig_color = clean_cta.getpixel((x, y))
        r = int(base_color[0] * (1 - t) + orig_color[0] * t)
        g = int(base_color[1] * (1 - t) + orig_color[1] * t)
        b = int(base_color[2] * (1 - t) + orig_color[2] * t)
        clean_cta.putpixel((x, y), (r, g, b))

clean_cta.save(os.path.join(pub_img, "cta-banner-bg.jpg"), quality=95)
clean_cta.save(os.path.join(pub_img, "cta-globe-clean.jpg"), quality=95)
print("Saved 100% clean CTA banner background!")
