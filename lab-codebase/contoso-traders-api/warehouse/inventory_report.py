"""Contoso Traders warehouse analytics — inventory reporting.

The warehouse team runs this every morning to decide what to restock
before the storefront opens. It reads the shared product catalog that
the Node.js storefront serves at /api/products.
"""

import json
from pathlib import Path

CATALOG_PATH = Path(__file__).parent.parent / "data" / "products.json"
LOW_STOCK_THRESHOLD = 20

# TODO: warehouse wants a sell-through rate per product once orders are persisted
# TODO: flag products with rating < 4.0 for the quality review board


def load_catalog(path=CATALOG_PATH):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def low_stock(products, threshold=LOW_STOCK_THRESHOLD):
    """Products at risk of selling out."""
    return [p for p in products if p["stock"] < threshold]


def restock_priority(products, threshold=LOW_STOCK_THRESHOLD):
    """Low-stock products, best sellers first (rating as a proxy for demand)."""
    return sorted(low_stock(products, threshold), key=lambda p: -p["rating"])


def build_report(products, threshold=LOW_STOCK_THRESHOLD):
    lines = ["Contoso Traders - Morning Restock Report", "=" * 41]
    priority = restock_priority(products, threshold)
    if not priority:
        lines.append("All gadgets sufficiently stocked. Enjoy your coffee.")
    for p in priority:
        lines.append(f"[{p['stock']:>3} left] {p['name']} (rating {p['rating']})")
    return "\n".join(lines)


if __name__ == "__main__":
    print(build_report(load_catalog()))
