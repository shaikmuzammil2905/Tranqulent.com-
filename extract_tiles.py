import os
from PIL import Image

assets_dir = r"c:\Users\muzam\Desktop\tranquelent.com\_assets"
public_dir = r"c:\Users\muzam\Desktop\tranquelent.com\public"
images_dir = os.path.join(public_dir, "images")

img_main = Image.open(os.path.join(assets_dir, "image.png"))
w, h = img_main.size

# Hero visual - crop the right 55% of the hero section containing the glowing chip & circuit board
hero_visual = img_main.crop((450, 50, 1024, 370))
hero_visual.convert("RGB").save(os.path.join(images_dir, "hero-chip-visual.jpg"), quality=95)

# Who we are - 3 individual tiles from the collage
# Tile 1: Wafer & Chip (left tile)
tile_wafer = img_main.crop((485, 395, 715, 635))
tile_wafer.convert("RGB").save(os.path.join(images_dir, "collage-wafer.jpg"), quality=95)

# Tile 2: Blue Car Wireframe (top right tile)
tile_car = img_main.crop((720, 395, 960, 510))
tile_car.convert("RGB").save(os.path.join(images_dir, "collage-car.jpg"), quality=95)

# Tile 3: Datacenter Server Racks (bottom right tile)
tile_server = img_main.crop((720, 515, 960, 635))
tile_server.convert("RGB").save(os.path.join(images_dir, "collage-server.jpg"), quality=95)

# Industry Cards clean backgrounds
# Semiconductor Card background:
ind_semi_clean = img_main.crop((330, 1300, 565, 1425))
ind_semi_clean.convert("RGB").save(os.path.join(images_dir, "ind-semiconductor-bg.jpg"), quality=95)

# Technology & Digital Card background:
ind_digital_clean = img_main.crop((568, 1300, 790, 1425))
ind_digital_clean.convert("RGB").save(os.path.join(images_dir, "ind-digital-bg.jpg"), quality=95)

# CTA Banner Globe visual (right side of CTA)
cta_globe = img_main.crop((500, 1435, 1024, 1525))
cta_globe.convert("RGB").save(os.path.join(images_dir, "cta-globe.jpg"), quality=95)

# Full CTA Banner background
cta_full = img_main.crop((0, 1435, 1024, 1525))
cta_full.convert("RGB").save(os.path.join(images_dir, "cta-banner-bg.jpg"), quality=95)

print("Individual clean component images saved successfully!")
