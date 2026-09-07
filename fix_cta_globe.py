import os
from PIL import Image

root = r"c:\Users\muzam\Desktop\tranquelent.com"
pub_img = os.path.join(root, "public", "images")

# Let's open _assets/image.png which is the original full desktop UI
img_orig = Image.open(os.path.join(root, "_assets", "image.png"))
w, h = img_orig.size
print(f"Original image size: {w}x{h}")

# The CTA globe is at y=1435 to 1525 (height 90px in 1024 width, let's crop x: 500 to 1024)
cta_globe_slice = img_orig.crop((520, 1435, 1024, 1525))
# Scale up with LANCZOS to 1920x380
target_h = 380
target_w = int(cta_globe_slice.width * (target_h / cta_globe_slice.height))
globe_upscaled = cta_globe_slice.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Create 1920x380 banner
clean_cta = Image.new("RGB", (1920, target_h), (3, 24, 46))
clean_cta.paste(globe_upscaled, (1920 - target_w, 0))

# Smooth gradient on left transition
fade_w = 300
for x in range(1920 - target_w, 1920 - target_w + fade_w):
    t = (x - (1920 - target_w)) / float(fade_w)
    for y in range(target_h):
        base_c = (3, 24, 46)
        orig_c = clean_cta.getpixel((x, y))
        r = int(base_c[0] * (1 - t) + orig_c[0] * t)
        g = int(base_c[1] * (1 - t) + orig_c[1] * t)
        b = int(base_c[2] * (1 - t) + orig_c[2] * t)
        clean_cta.putpixel((x, y), (r, g, b))

clean_cta.save(os.path.join(pub_img, "cta-banner-bg.jpg"), quality=95)
clean_cta.save(os.path.join(pub_img, "cta-globe-clean.jpg"), quality=95)
print("Saved pristine CTA banner!")
