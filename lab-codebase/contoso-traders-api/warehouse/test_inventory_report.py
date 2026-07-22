import unittest

from inventory_report import build_report, low_stock, restock_priority

PRODUCTS = [
    {"id": 1, "name": "Pocket Wormhole", "stock": 7, "rating": 4.9},
    {"id": 2, "name": "Nebula Night Light", "stock": 210, "rating": 4.6},
    {"id": 3, "name": "Jetpack (Refurbished)", "stock": 3, "rating": 3.5},
    {"id": 4, "name": "Martian Dust Vacuum", "stock": 18, "rating": 3.9},
]


class LowStockTests(unittest.TestCase):
    def test_flags_products_below_threshold(self):
        names = [p["name"] for p in low_stock(PRODUCTS)]
        self.assertEqual(
            names, ["Pocket Wormhole", "Jetpack (Refurbished)", "Martian Dust Vacuum"]
        )

    def test_respects_custom_threshold(self):
        self.assertEqual(low_stock(PRODUCTS, threshold=5), [PRODUCTS[2]])

    def test_empty_catalog(self):
        self.assertEqual(low_stock([]), [])


class RestockPriorityTests(unittest.TestCase):
    def test_orders_by_rating_descending(self):
        names = [p["name"] for p in restock_priority(PRODUCTS)]
        self.assertEqual(
            names, ["Pocket Wormhole", "Martian Dust Vacuum", "Jetpack (Refurbished)"]
        )


class ReportTests(unittest.TestCase):
    def test_report_lists_priority_items(self):
        report = build_report(PRODUCTS)
        self.assertIn("Pocket Wormhole", report)
        self.assertIn("Restock Report", report)

    def test_fully_stocked_message(self):
        report = build_report([{"id": 1, "name": "Mug", "stock": 500, "rating": 5.0}])
        self.assertIn("sufficiently stocked", report)


if __name__ == "__main__":
    unittest.main()
