# Contoso Traders — Galactic Gadget Shop API 🚀

The polyglot codebase behind Contoso Traders' out-of-this-world gadget storefront:
a **Node.js (Express) storefront API** and a **Python warehouse analytics module**,
sharing one product catalog. This repository is the working codebase for the
**GitHub Copilot SDK & Agent Merge: Agentic Developer Workflows** guided lab.

## What's inside

| Path | Purpose |
|---|---|
| `server.js` | Express app entry point (Node.js) |
| `routes/products.js` | Product catalog endpoints |
| `routes/orders.js` | Order placement endpoints |
| `lib/cart.js` | Cart totals and discount logic |
| `warehouse/inventory_report.py` | Python warehouse analytics — morning restock report |
| `warehouse/test_inventory_report.py` | Python test suite (stdlib `unittest`) |
| `requirements.txt` | Python dependencies (the Copilot SDK) |
| `data/products.json` | The gadget catalog, shared by both halves |
| `data/issues.json` | Open issues reported by Contoso teams (agent fuel!) |
| `tests/` | Node.js test suite (`node --test`) |
| `.github/workflows/ci.yml` | CI — runs both test suites on every push and PR |

## Run it

```bash
# Storefront (Node.js)
npm install
npm start        # API on http://localhost:3000
npm test         # storefront test suite

# Warehouse analytics (Python)
python warehouse/inventory_report.py          # print the restock report
python -m unittest discover -s warehouse      # warehouse test suite
```

## Known gaps (on purpose)

The codebase carries `TODO` comments and `data/issues.json` tracks real gaps —
missing input validation, no pagination, no health endpoint. During the lab, Copilot
agents read, triage, and fix these. Please leave them in place if you're setting up
the lab.
