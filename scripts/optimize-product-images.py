"""Optimize long product detail JPEGs in place with progressive encoding."""

from io import BytesIO
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"
PATTERNS = (
    "earplugs.jpg",
    "s2Detail/*/amazon-main.jpg",
    "s2Detail/blue/amazon-main-square.jpg",
    "hearingaids/hearingaids(grey).jpg",
    "hearingaids/助听器肤色主图.jpg",
    "s2Detail/*/aplus-*.jpg",
    "earplugDetail/**/*.jpg",
    "hearingaids/画板 *.jpg",
)


def main() -> None:
    files = sorted({path for pattern in PATTERNS for path in ROOT.glob(pattern)})
    original_total = optimized_total = updated = 0
    for path in files:
        original = path.stat().st_size
        original_total += original
        with Image.open(path) as image:
            if image.info.get("progressive"):
                optimized_total += original
                continue
            output = BytesIO()
            image.save(output, format="JPEG", quality=90, optimize=True, progressive=True, subsampling=0)
        candidate = output.getvalue()
        if len(candidate) < original:
            path.write_bytes(candidate)
            optimized_total += len(candidate)
            updated += 1
        else:
            optimized_total += original
    print(f"Optimized {updated}/{len(files)} images: {original_total:,} -> {optimized_total:,} bytes")


if __name__ == "__main__":
    main()
