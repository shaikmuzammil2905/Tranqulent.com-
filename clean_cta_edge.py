import os
from PIL import Image

root = r"c:\Users\muzam\Desktop\tranquelent.com"
pub_img = os.path.join(root, "public", "images")

cta = Image.open(os.path.join(pub_img, "cta-banner-bg.jpg"))
# Crop 30px from left to remove any artifact
clean = cta.crop((30, 0, cta.width, cta.height)).resize((1920, cta.height), Image.Resampling.LANCZOS)
clean.save(os.path.join(pub_img, "cta-banner-bg.jpg"), quality=95)
clean.save(os.path.join(pub_img, "cta-globe-clean.jpg"), quality=95)
print("Spotless CTA globe banner saved!")
