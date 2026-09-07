import os
from PIL import Image

root = r"c:\Users\muzam\Desktop\tranquelent.com"
pub_img = os.path.join(root, "public", "images")
os.makedirs(pub_img, exist_ok=True)

def process_image(src_name, dest_name, max_w=1920, quality=92, is_png=False):
    src_path = os.path.join(root, src_name)
    if not os.path.exists(src_path):
        print(f"Warning: {src_path} not found")
        return
    im = Image.open(src_path)
    print(f"Processing {src_name} (original: {im.size}, mode: {im.mode}) -> {dest_name}")
    
    if im.width > max_w:
        new_h = int(im.height * (max_w / im.width))
        im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)
    
    dest_path = os.path.join(pub_img, dest_name)
    if is_png:
        im.save(dest_path, "PNG", optimize=True)
    else:
        im.convert("RGB").save(dest_path, "JPEG", quality=quality)
    print(f"Saved {dest_name} (size: {im.size})")

# 1. Hero background from image copy.png
process_image("image copy.png", "hero-bg-desktop.jpg", max_w=1920, quality=94)

# 2. Section 1 (Semiconductor & Electronics) from image copy 2.png
process_image("image copy 2.png", "ind-semiconductor-soc.jpg", max_w=1600, quality=92)

# 3. Section 2 (Technology & Digital Engineering) from image copy 4.png
process_image("image copy 4.png", "ind-digital-robotics.jpg", max_w=1600, quality=92)

# 4. Section 3 (Who We Are composite) from image copy 6.png
process_image("image copy 6.png", "who-we-are-composite.png", max_w=1600, is_png=True)

# 5. Service 1: Semiconductor from image copy 10.png
process_image("image copy 10.png", "service-semiconductor.jpg", max_w=1400, quality=92)

# 6. Service 2: Embedded from image copy 11.png
process_image("image copy 11.png", "service-embedded.jpg", max_w=1400, quality=92)

# 7. Service 3: Software from image copy 12.png
process_image("image copy 12.png", "service-software.jpg", max_w=1400, quality=92)

# 8. Service 4: Consulting from image copy 13.png
process_image("image copy 13.png", "service-consulting.jpg", max_w=1400, quality=92)

print("All new image assets processed and saved to public/images successfully!")
