from pathlib import Path
import json
import re
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

root = Path(r"D:\VSA Infinity Corporation")
photo_root = root / "photo"
out_root = root / "public" / "gallery"
out_root.mkdir(parents=True, exist_ok=True)

IMAGE_EXTS = {".heic", ".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".HEIC", ".PNG"}

items = []

for category_dir in sorted(photo_root.iterdir()):
    if not category_dir.is_dir():
        continue
    category = category_dir.name
    dest_dir = out_root / category.lower()
    dest_dir.mkdir(parents=True, exist_ok=True)

    for i, src in enumerate(sorted(category_dir.iterdir()), start=1):
        if not src.is_file() or src.suffix not in IMAGE_EXTS and src.suffix.lower() not in {".heic", ".jpg", ".jpeg", ".png", ".webp"}:
            continue
        # Clean slug from stem
        stem = re.sub(r"[^A-Za-z0-9_-]+", "-", src.stem).strip("-").lower() or f"photo-{i}"
        dest_name = f"{stem}.jpg"
        dest = dest_dir / dest_name
        # avoid collisions
        n = 2
        while dest.exists() and dest.stat().st_mtime < src.stat().st_mtime:
            # overwrite if we want refresh - just overwrite always for rebuild
            break
        while any(x["src"] == f"/gallery/{category.lower()}/{dest.name}" for x in items):
            dest = dest_dir / f"{stem}-{n}.jpg"
            n += 1

        print(f"{category}: {src.name} -> {dest.relative_to(out_root)}")
        img = Image.open(src).convert("RGB")
        img.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        img.save(dest, "JPEG", quality=82, optimize=True)

        items.append({
            "id": f"{category.lower()}-{dest.stem}",
            "src": f"/gallery/{category.lower()}/{dest.name}",
            "category": category,
            "alt": f"{category} project photo",
        })

# Write TS data file
ts_path = root / "src" / "data" / "gallery.ts"
categories = sorted({item["category"] for item in items})
lines = [
    "import { asset } from '../utils/asset';",
    "",
    "export type GalleryCategory = " + " | ".join(json.dumps(c) for c in categories) + ";",
    "",
    "export type GalleryImage = {",
    "  id: string;",
    "  src: string;",
    "  category: GalleryCategory;",
    "  alt: string;",
    "};",
    "",
    "export const galleryCategories: Array<'All' | GalleryCategory> = ['All', "
    + ", ".join(json.dumps(c) for c in categories)
    + "];",
    "",
    "const galleryImagesRaw: GalleryImage[] = "
    + json.dumps(items, indent=2)
    + ";",
    "",
    "export const galleryImages: GalleryImage[] = galleryImagesRaw.map((img) => ({",
    "  ...img,",
    "  src: asset(img.src)",
    "}));",
    "",
]
ts_path.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(items)} images to {ts_path}")
