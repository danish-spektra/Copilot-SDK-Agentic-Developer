# Contoso Traders — Galactic Gadget Shop API 🚀

A small Express REST API that powers Contoso Traders' out-of-this-world gadget storefront.
This repository is the working codebase for the **GitHub Copilot SDK & Agent Merge:
Agentic Developer Workflows** guided lab.

## What's inside

| Path | Purpose |
|---|---|
| `server.js` | Express app entry point |
| `routes/products.js` | Product catalog endpoints |
| `routes/orders.js` | Order placement endpoints |
| `lib/cart.js` | Cart totals and discount logic |
| `data/products.json` | The gadget catalog |
| `data/issues.json` | Open issues reported by Contoso teams (agent fuel!) |
| `tests/` | Test suite (`node --test`) |
| `.github/workflows/ci.yml` | CI — runs the test suite on every push and PR |

## Run it

```bash
npm install
npm start        # API on http://localhost:3000
npm test         # run the test suite
```

## Known gaps (on purpose)

The codebase carries `TODO` comments and `data/issues.json` tracks real gaps —
missing input validation, no pagination, no health endpoint. During the lab, Copilot
agents read, triage, and fix these. Please leave them in place if you're setting up
the lab.
