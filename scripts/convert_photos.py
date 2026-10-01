from pathlib import Path
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

root = Path(r"D:\VSA Infinity Corporation")
out = root / "public"
out.mkdir(exist_ok=True)

jobs = [
    (root / "photo/Bathroom/IMG_4572.HEIC", out / "hero-bathroom.jpg", (1800, 2200)),
    (root / "photo/Bathroom/IMG_4673.HEIC", out / "service-full-remodel.jpg", (1600, 1200)),
    (root / "photo/Bathroom/IMG_7492.HEIC", out / "service-tub-shower.jpg", (1200, 1200)),
    (root / "photo/Floor/IMG_8151.HEIC", out / "service-flooring.jpg", (1200, 1200)),
    (root / "photo/Bathroom/IMG_5158.HEIC", out / "service-vanity.jpg", (1200, 1200)),
]

for src, dest, max_size in jobs:
    print(f"Converting {src.name} -> {dest.name} ...")
    img = Image.open(src)
    img = img.convert("RGB")
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    img.save(dest, "JPEG", quality=85, optimize=True)
    print(f"  OK {dest.stat().st_size // 1024} KB, {img.size}")

print("Done")
