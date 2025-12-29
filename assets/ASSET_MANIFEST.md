# Lux Markets - Asset Manifest

## Downloaded Assets from luxmarkets.org

All images have been extracted from the current Squarespace website and organized for use in the new prototype.

---

### Logos (`/assets/images/logos/`)

| File | Description | Original URL |
|------|-------------|--------------|
| `lux-markets-logo.png` | Main Lux Markets logo (transparent) | squarespace-cdn/TRANSPARENT-01.png |
| `lux-markets-logo-mobile.png` | Mobile version of logo | squarespace-cdn/TRANSPARENT-01.png |

---

### Partner Logos (`/assets/images/partners/`)

| File | Description |
|------|-------------|
| `amli.png` | AMLI Residential logo |
| `greystar.png` | Greystar logo |
| `cws.png` | CWS Apartments logo |
| `kairoi.png` | Kairoi Residential logo |
| `willow-bridge.png` | Willow Bridge Property logo |
| `goodwin.png` | Goodwin Property Management logo |

---

### Feature Images (`/assets/images/features/`)

| File | Description |
|------|-------------|
| `dashboard-1.png` | Vendor dashboard screenshot |
| `dashboard-2.png` | Dashboard alternate view |
| `dashboard-3.png` | Dashboard mobile/analytics view |
| `marketing-screenshot.jpeg` | Marketing materials screenshot |
| `apartment-onion-creek.png` | Onion Creek Luxury Apartments venue |
| `feature-design.png` | Main feature/hero design image |

---

### Blog Article Images (`/assets/images/blog/`)

| File | Article Topic |
|------|--------------|
| `email-marketing.png` | Email Marketing for CPG |
| `shopify-logo.jpg` | Shopify for CPG brands |
| `commercial-kitchens.png` | Commercial Kitchens guide |
| `brand-activations.png` | Brand Activations |
| `farmers-markets.png` | Farmers Markets guide |
| `ecommerce-marketing.png` | E-Commerce Marketing |
| `cpg-broker.png` | CPG Broker Pros/Cons |
| `cpg-podcasts.png` | CPG Podcasts |
| `co-manufacturers.png` | Co-Manufacturers guide |
| `distributors.png` | Distributors guide |
| `branding-packaging.png` | Branding & Packaging |
| `event-marketing.png` | Event Marketing |

---

## Usage in Prototype

The following pages have been updated to use real images:

1. **index.html** (Homepage)
   - Logo in navigation and footer
   - Partner logos in trust bar
   - Feature images in gallery section

2. **Other pages** can be updated similarly using paths like:
   - `../assets/images/logos/lux-markets-logo.png`
   - `../assets/images/partners/amli.png`
   - `../assets/images/features/feature-design.png`
   - `../assets/images/blog/email-marketing.png`

---

## Notes

- All images are hosted locally for offline development
- Partner logos use grayscale filter in CSS for visual consistency
- Logo appears white on dark backgrounds via CSS filter
- Gallery images have hover zoom effect
