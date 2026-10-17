# Shree Gurudatta Engineering Works (SGE Works) — Website

Production-ready, high-performance static website for **Shree Gurudatta Engineering Works (SGE Works)**, specialized in **Industrial Hard Chrome Plating & Surface Engineering** in MIDC Bhosari, Pune, Maharashtra.

---

## 1. Quick Start & Local Preview

This project is built with **Pure Semantic HTML5, Modern Modular CSS, and Vanilla JavaScript**. It has **zero build steps** and **zero runtime framework dependencies**.

### Local Preview Options:

- **Using Python 3 (built-in)**:
  ```bash
  python3 -m http.server 8000
  ```
  Open [http://localhost:8000](http://localhost:8000) in your browser.

- **Using Node.js `npx serve`**:
  ```bash
  npx serve .
  ```

- **Direct File Opening**:
  You can also double-click `index.html` to open it directly in modern web browsers.

---

## 2. Architecture & File Structure

```
sgeworks/
├── index.html                 # Complete semantic HTML5 single-page industrial website
├── robots.txt                 # Search engine directives referencing sitemap
├── sitemap.xml                # Canonical XML sitemap
├── favicon.svg                # Precision geometric brand favicon
├── IMPLEMENTATION_PLAN.md     # Detailed design-to-code architectural roadmap
├── README.md                  # This documentation
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens (palette, typography, hairlines, spacing)
│   │   ├── base.css           # CSS reset, typography scale, accessibility, motion overrides
│   │   ├── components.css     # Navigation, dropdown, mobile drawer, buttons, slider, dock
│   │   └── sections.css       # Hero, spec strip, about, services, capabilities, industries, footer
│   ├── js/
│   │   ├── site-config.js     # Centralized verified company information & configuration
│   │   ├── navigation.js      # Sticky header, accessible services dropdown & mobile drawer
│   │   ├── slider.js          # Touch-swipe & keyboard component slider
│   │   └── main.js            # IntersectionObserver scroll reveals, RFQ form handling
│   ├── icons/
│   │   └── logo.svg           # High-precision vector logo mark
│   └── images/
│       ├── hero-cylindrical-chrome-machining.jpg
│       ├── facility-inspection-quality-technician.jpg
│       ├── hard-chrome-plating-tanks-bhosari.jpg
│       ├── flash-chrome-plating-mold-dies.jpg
│       ├── precision-cylindrical-grinding-shafts.jpg
│       ├── buffing-polishing-mirror-finish.jpg
│       ├── deplating-chrome-stripping-bath.jpg
│       ├── components/        # 8 verified sample component photographs
│       └── industries/        # 7 industrial sector photographs
└── stitch_reference/          # Preserved raw Google Stitch exports and brochure reference
```

---

## 3. Implemented Features Summary

1. **Industrial Editorial Aesthetic**:
   - Strictly `0px` border-radius (`border-radius: 0;`), evoking laser-cut and sheared machined steel plates.
   - Deep industrial navy palette (`#0B1320`, `#131C2B`, `#162032`) paired with machined chrome accents (`#E2E8F0`, `#CBD5E1`) and restrained furnace orange (`#EA580C`, `#F97316`).
   - High-contrast editorial alternating layouts for technical credibility.
2. **Fixed Sticky Navigation & Transitions**:
   - Transparent with backdrop-blur over hero; transitions smoothly to solid dark navy with a 1px border upon scrolling past 40px.
   - Responsive Services dropdown submenu with direct deep-links to each service.
   - Fully accessible mobile drawer with hamburger toggle, accordion submenu, and ESC key dismissal.
   - Fixed header offset compensation (`scroll-margin-top: 85px`) to prevent heading occlusion.
3. **Verified Brochure Content**:
   - Verbatim company details: Established 2009, promoters Mr. Shivaji Mahajan & Mr. Milind Mahajan.
   - 5 exact services: *Hard Chrome Plating, Flash Chrome Plating, Precision Grinding, Buffing & Polishing, De-plating / Chrome Removal*.
   - 4 exact technical limits: *600 μm coating, Ø6–Ø400 mm diameter, 50–3000 mm length, 2,000 L chemical capacity*.
   - 8 sample components: *Hydraulic cylinder rods, Piston rods, Shafts & spindles, Drum rollers, Pipes & tubes, Mandrels, Dies & fixtures, Machine plates*.
   - 7 core industries with an extensive Cross-Sector Engineering Parameter Matrix table.
   - 8 valued client references from brochure panel 07: *HYT Engineering, Finolex PIPES, V R Precision, BOSCH, ARAI, SKF, Electronica, Verensol Technologies*.
4. **Touch-Swipe Component Slider**:
   - Smooth horizontal touch swipe gesture support, keyboard arrow navigation, and Prev/Next controls.
   - Fallback-safe: All component names and images exist as static crawlable HTML.
5. **Persistent Floating Quick-Connect Dock**:
   - Pinned to bottom-right with an active plant status indicator.
   - One-tap WhatsApp chat with prefilled RFQ message (`8857894141`).
   - One-tap phone dialer (`tel:8857894141`).
6. **Zero External Runtime Scripts**:
   - Removed Stitch's CDN Tailwind development runtime script.
   - 100% native CSS with modern custom properties. Instant first-contentful-paint (FCP).

---

## 4. Centralized Business Configuration

To modify phone numbers, official addresses, or email addresses, edit **`assets/js/site-config.js`**. All business parameters are centralized there in one single place.

Example snippet from `assets/js/site-config.js`:
```javascript
window.SGE_CONFIG = {
  business: {
    legalName: "Shree Gurudatta Engineering Works",
    establishedYear: 2009,
    ...
  },
  contact: {
    phoneDisplay: "8857894141",
    whatsappNumber: "918857894141",
    ...
  },
  location: {
    plot: "Plot No- P4P RIG 108",
    landmark: "Near Shitole Weight Bridge, MIDC Chowk",
    area: "MIDC Bhosari",
    city: "Pune",
    postalCode: "411026",
    ...
  }
};
```

---

## 5. SEO & Local Search Checklist

- [x] **Single H1 Tag**: Confidently positioned on hero banner with brand and core specialization.
- [x] **Logical Heading Hierarchy**: Proper H2 and H3 parent-child hierarchy throughout all sections.
- [x] **Local SEO Triad**: Naturally establishes *Shree Gurudatta Engineering Works* in *MIDC Bhosari, Pune, Maharashtra* with targeted terms (*Hard chrome plating Pune, cylindrical grinding Bhosari, hydraulic cylinder rod chrome plating*).
- [x] **Structured Data (JSON-LD)**: Enhanced `LocalBusiness` schema with address, geo-coordinates, telephone, email, foundingDate (2009), areaServed, and `hasOfferCatalog` listing all 5 services.
- [x] **Open Graph & Twitter Cards**: Complete social graph meta tags with local absolute image references.
- [x] **Sitemap & Robots**: Valid `sitemap.xml` pointing to canonical homepage, and `robots.txt` referencing the sitemap.
- [x] **Image SEO & Performance**: Descriptive filenames (`hard-chrome-plating-tanks-bhosari.jpg`, etc.), natural alt text, native `width` and `height` attributes to prevent CLS, `loading="lazy"` below fold, and `loading="eager"` on hero.
- [x] **Accessibility (a11y)**: Keyboard tab order, visible focus outlines (`--color-furnace-orange`), skip-to-content link, `prefers-reduced-motion` compliance, and ARIA attributes on interactive dropdown and mobile drawer.

---

## 6. Deployment Guide

Because the website uses static assets without build dependencies, it can be deployed instantly to any static web hosting platform:

### 1. Cloudflare Pages
1. Connect your Git repository or upload the project folder.
2. Build command: *None (leave blank)*.
3. Build output directory: `.` (root).

### 2. GitHub Pages
1. Push this repository to GitHub.
2. In repository Settings > Pages, select Deploy from branch > `main` > `/ (root)`.

### 3. Netlify / Vercel
1. Run `npx netlify deploy --prod` or drag-and-drop the directory into Netlify Drop.

### 4. Traditional Apache / NGINX / CPanel
1. Upload all files into `public_html` or `/var/www/html/`.
2. Ensure HTTPS is enabled and `sitemap.xml` / `robots.txt` are at the webroot.

---

## 7. Remaining Client Confirmations & Placeholders

1. **Production Domain**: The canonical URL and structured data currently use `https://www.sgeworks.in/` as a placeholder. Once the client confirms the official registered domain, update this URL in `index.html`, `sitemap.xml`, and `robots.txt`.
2. **GSTIN / Business Hours**: Provisional hours (Monday–Saturday 09:00 to 19:00) and GSTIN can be formally populated in `site-config.js` and `index.html` upon client sign-off.
3. **Client Logos**: Client names from the brochure (Bosch, SKF, Finolex, ARAI, Electronica, HYT, VR Precision, Verensol) are displayed in an understated typography rail in accordance with brochure panel 07.
