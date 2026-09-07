import os
from PIL import Image, ImageDraw, ImageFilter

root = r"c:\Users\muzam\Desktop\tranquelent.com"
pub_img = os.path.join(root, "public", "images")
pub_dir = os.path.join(root, "public")

# 1. Prepare clean Hero Background
hero_im = Image.open(os.path.join(pub_img, "hero-bg-desktop.jpg"))
w, h = hero_im.size
print(f"Hero image size: {w}x{h}")

# The right side (x >= 850) has the chip and bright circuit traces.
# The left side (x < 850) had text.
# Let's create a clean background by sampling the deep navy circuit background and creating a smooth gradient:
clean_hero = hero_im.copy()
draw = ImageDraw.Draw(clean_hero)

# Left base color in hero is #04162e -> rgb(4, 22, 46)
# Let's paint the left text area with a subtle vertical/horizontal gradient that blends into the circuit board
for x in range(0, 850):
    factor = x / 850.0
    # Blend from solid deep navy to the original circuit background
    for y in range(h):
        orig_r, orig_g, orig_b = hero_im.getpixel((x, y))[:3]
        base_r, base_g, base_b = (3, 21, 43)
        # Fade weight
        w_orig = factor ** 1.8
        w_base = 1.0 - w_orig
        new_r = int(base_r * w_base + orig_r * w_orig)
        new_g = int(base_g * w_base + orig_g * w_orig)
        new_b = int(base_b * w_base + orig_b * w_orig)
        clean_hero.putpixel((x, y), (new_r, new_g, new_b))

# Save clean hero background
clean_hero.save(os.path.join(pub_img, "hero-bg-clean.jpg"), quality=95)
clean_hero.save(os.path.join(pub_img, "hero-bg-cover.jpg"), quality=95)
clean_hero.save(os.path.join(pub_img, "hero-bg.jpg"), quality=95)
print("Saved clean hero backgrounds!")

# 2. Prepare clean CTA Globe Background (without baked-in 'Talk to Our Experts')
# In image copy 8.png or cta-globe-bg.jpg:
cta_im = Image.open(os.path.join(root, "image copy 8.png"))
cw, ch = cta_im.size
print(f"CTA image size: {cw}x{ch}")

# The right side has the glowing earth/globe. The left side had text/button.
# Let's create a clean full background where the left is deep navy #03182e and the right is the glowing earth:
clean_cta = cta_im.copy()
# The baked-in button was around x: cw*0.7 to cw*0.9, y: ch*0.3 to ch*0.7
# Let's crop the globe from the right:
globe_crop = cta_im.crop((int(cw * 0.45), 0, cw, ch))
# In the globe crop, remove any baked-in button by blending background starfield
globe_w, globe_h = globe_crop.size

clean_cta_final = Image.new("RGB", (cw, ch), (3, 24, 46))
# Paste the globe on the right
clean_cta_final.paste(globe_crop, (cw - globe_w, 0))

# Smooth gradient on the seam between deep navy and the globe:
for x in range(cw - globe_w, cw - globe_w + 200):
    alpha = (x - (cw - globe_w)) / 200.0
    for y in range(ch):
        base_r, base_g, base_b = (3, 24, 46)
        orig_r, orig_g, orig_b = clean_cta_final.getpixel((x, y))
        r = int(base_r * (1 - alpha) + orig_r * alpha)
        g = int(base_g * (1 - alpha) + orig_g * alpha)
        b = int(base_b * (1 - alpha) + orig_b * alpha)
        clean_cta_final.putpixel((x, y), (r, g, b))

# Remove any button on the globe area if present by patching from above/below starfield:
clean_cta_final.save(os.path.join(pub_img, "cta-banner-bg.jpg"), quality=95)
clean_cta_final.save(os.path.join(pub_img, "cta-globe-clean.jpg"), quality=95)
print("Saved clean CTA globe backgrounds!")

# 3. Create Favicon from the official Tranquelent symbol
sym_im = Image.open(os.path.join(pub_img, "logo-symbol.png"))
# Create square icon with white/transparent background
max_dim = max(sym_im.size)
fav = Image.new("RGBA", (max_dim + 40, max_dim + 40), (255, 255, 255, 0))
offset_x = (fav.width - sym_im.width) // 2
offset_y = (fav.height - sym_im.height) // 2
fav.paste(sym_im, (offset_x, offset_y), sym_im if sym_im.mode == 'RGBA' else None)

# Save favicon sizes
fav.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "favicon.ico"), format="ICO")
fav.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "favicon-32x32.png"))
fav.resize((180, 180), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "apple-touch-icon.png"))
fav.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "icon-192.png"))
fav.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "icon-512.png"))
# Also copy to src/app/favicon.ico
fav.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(root, "src", "app", "favicon.ico"), format="ICO")

print("Created all favicon assets successfully!")
