# SGE Works Website — Implementation Plan
**Project:** Shree Gurudatta Engineering Works (SGE Works)  
**Location:** Plot No- P4P RIG 108, Near Shitole Weight Bridge, MIDC Chowk, MIDC, Bhosari, Pune – 411026, Maharashtra, India  
**Specialization:** Hard Chrome Plating & Surface Engineering  
**Engineering Discipline:** Design-to-Code Implementation (Static Web Architecture)  
**Author:** Antigravity Senior Frontend Engineer & Performance Specialist  

---

## 1. Executive Summary & Design Understanding

### 1.1 Brand Identity & Design Direction: "Industrial Editorial"
Shree Gurudatta Engineering Works (SGE Works) is an established industrial engineering company operating since 2009 in MIDC Bhosari, Pune. The design aesthetic is strictly **Industrial Editorial**:
- **Not a generic SaaS template**: No pastel gradients, no floating pill cards, no bubbly rounded cards (`border-radius: 0px` strictly adhered to for machined metal precision), no bouncy animations.
- **Visual Character**: High-contrast, severe, architectural, image-led, confident, and contemporary. Real workshop imagery, machined chrome cylinder textures, hairline 1px borders (`#1E293B`, `rgba(255, 255, 255, 0.12)`), technical monospaced indices (`Space Mono`), and bold structural headlines (`Space Grotesk`).
- **Color Discipline**:
  - Base Canvas: Deep Industrial Navy (`#0A1322`, `#0B1320`, `#131C2B`, `#162032`)
  - Secondary Metallic Tones: Chrome Silver (`#CBD5E1`, `#E2E8F0`), Muted Slate (`#94A3B8`)
  - Functional Accent: Furnace Orange (`#EA580C`, `#F97316`) reserved for active states, conversion CTAs, and mechanical highlights.
  - Light Editorial Alternations: Muted slate-blue workplanes (`#DFE7F0`, `#E8EEF5`) for high-contrast technical tables and service reviews.

### 1.2 Analysis of Provided Stitch Reference & Brochure Assets
The Stitch project was reviewed alongside the original 8-panel brochure (`brochure.png`):
1. **Brochure Verification**:
   - Panel 01: SGE Works logo, Hard Chrome Plating Service & Engineering Works, "We Serve Quality in Exchange of Your Trust", Est. 2009, 3 badges (Export Quality, Advanced Technology, Experienced Team).
   - Panel 02: About SGE Works, Promoters Mr. Shivaji Mahajan & Mr. Milind Mahajan, MIDC Bhosari Pune plant photo, 4 capability pillars (15+ Years, Zero Rejection, Skilled Workforce, Customer Focus), Quality | Precision | Performance | Reliability.
   - Panel 03–04: Five core services (Hard Chrome Plating, Flash Chrome Plating, Precision Grinding Services, Buffing & Polishing, De-plating / Chrome Removal).
   - Panel 05: Technical Capabilities (600 μm max thickness, Ø6–Ø400 mm diameter, 50–3000 mm length, 2,000 L chemical capacity).
   - Panel 06: Eight Sample Components (Hydraulic Cylinder Rod, Piston Rod, Shafts & Spindles, Drum Rollers, Pipes & Tubes, Mandrels, Dies & Fixtures, Machine Plates).
   - Panel 07: Seven Industries Served, Valued Clients (HYT, Finolex Pipes, V R Precision, Bosch, ARAI, SKF, Electronica, Verensol).
   - Panel 08: Why Choose Us, Workshop Address, Phone 8857894141, Email `sgeworks2009@gmail.com`.

2. **Shortcomings in Stitch Prototype to Remediate**:
   - **Runtime Dependency**: Stitch loaded Tailwind via a heavy client-side CDN script (`cdn.tailwindcss.com`). This causes FOUC, slows initial render, and violates the static, zero-runtime dependency requirement. We will compile and structure clean, modular **Modern Vanilla CSS** using CSS Custom Properties.
   - **External Image Hosting**: Images in Stitch HTML link to external temporary Google URLs (`lh3.googleusercontent.com/aida/...`). We will extract and organize all high-resolution Stitch assets locally into `assets/images/` with SEO-optimized filenames (e.g. `hard-chrome-plating-facility-bhosari-pune.webp`).
   - **Missing Services Dropdown**: Navigation lacked the required dropdown submenu for the 5 services with keyboard navigation, ARIA states, and smooth scroll targets.
   - **Missing Mobile Navigation**: The mobile menu was completely omitted in Stitch (`hidden lg:flex` with no mobile drawer or toggle). A fully accessible, touch-friendly mobile drawer must be engineered.
   - **Sticky Navigation Scroll Transition**: Navigation must transition cleanly from semi-transparent to solid industrial navy with a bottom hairline border upon scrolling.
   - **Anchor Scroll Offset**: Fix header occlusion by setting `scroll-margin-top: 85px` on all section targets.
   - **Touch-Friendly Component Slider**: Convert static component cards into a responsive, touch-swipeable track while ensuring all 8 components remain crawlable HTML text for search engines.
   - **Contact Section Realism**: Align contact section with industrial RFQ workflows (Direct call, WhatsApp, drawing upload guidance via email, Google Maps link, and clear technical RFQ checklist) rather than a generic SaaS form.

---

## 2. Proposed Project Structure

```
sgeworks/
├── index.html                 # Main semantic HTML5 single-page website
├── robots.txt                 # Search crawler directives
├── sitemap.xml                # XML sitemap with canonical URL
├── favicon.svg                # Scalable brand favicon
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens (colors, typography, spacing, hairlines)
│   │   ├── base.css           # Reset, typography, utility classes, print & accessibility
│   │   ├── components.css     # Buttons, nav, dropdown, modal, slider, badges, floating dock
│   │   └── sections.css       # Hero, spec strip, about, services, capabilities, industries, contact, footer
│   ├── js/
│   │   ├── site-config.js     # Centralized verified business details (address, phone, email, hours)
│   │   ├── navigation.js      # Sticky nav scroll transition, services dropdown, mobile menu drawer
│   │   ├── slider.js          # Touch-swipe & keyboard component slider
│   │   └── main.js            # Smooth scroll, IntersectionObserver reveals, active nav spy
│   ├── images/
│   │   ├── hero-cylindrical-chrome-machining.webp
│   │   ├── facility-exterior-entrance.webp
│   │   ├── facility-inspection-quality-technician.webp
│   │   ├── hard-chrome-plating-tanks-bhosari.webp
│   │   ├── flash-chrome-plating-mold-dies.webp
│   │   ├── precision-cylindrical-grinding-shafts.webp
│   │   ├── buffing-polishing-mirror-finish.webp
│   │   ├── deplating-chrome-stripping-bath.webp
│   │   ├── components/        # 8 component images with descriptive filenames
│   │   │   ├── hydraulic-cylinder-rod.webp
│   │   │   ├── piston-rod.webp
│   │   │   ├── shafts-and-spindles.webp
│   │   │   ├── drum-rollers.webp
│   │   │   ├── pipes-and-tubes.webp
│   │   │   ├── mandrels.webp
│   │   │   ├── dies-and-fixtures.webp
│   │   │   └── machine-plates.webp
│   │   └── industries/        # 7 industrial sector illustrations/photos
│   │       ├── machine-manufacturers.webp
│   │       ├── hydraulic-pneumatics.webp
│   │       ├── engineering-fabrication.webp
│   │       ├── automotive-components.webp
│   │       ├── tool-and-die.webp
│   │       ├── process-equipment.webp
│   │       └── export-oriented-engineering.webp
│   └── icons/
│       └── logo.svg           # SGE Works vector brand mark
├── IMPLEMENTATION_PLAN.md     # This comprehensive engineering roadmap
└── README.md                  # Operational guide, deployment notes, and SEO checklist
```

---

## 3. Detailed Component & Interaction Architecture

### 3.1 Sticky Navigation & Brand Header
- **Desktop**:
  - Brand identity: SGE Works stylized monogram + full corporate title + "PUNE · EST. 2009".
  - Main links: `About`, `Services ▾` (with dropdown), `Capabilities`, `Industries`, `Contact`.
  - Primary CTA: `REQUEST A QUOTE →` with high-contrast orange accent (`#EA580C`).
  - Scroll state: Starts transparent/subtle blur; transitions to solid `#0B1320` with a 1px border (`rgba(255, 255, 255, 0.12)`) after 40px scroll.
- **Services Dropdown**:
  - Accessible via hover and keyboard focus (`Tab`, `Enter`, `Space`, `Escape`).
  - ARIA attributes: `aria-haspopup="true"`, `aria-expanded="false"`.
  - 5 links navigating directly to `#service-hard-chrome`, `#service-flash-chrome`, `#service-precision-grinding`, `#service-buffing-polishing`, `#service-deplating`.
- **Mobile Navigation Drawer**:
  - Hamburger toggle button (`aria-label="Toggle navigation menu"`, `aria-expanded="false"`).
  - Full-screen slide-down drawer retaining the dark industrial palette.
  - Expandable accordion for Services.
  - Quick touch targets for Phone, WhatsApp, and Quote Request.

### 3.2 Hero Section (`#hero`)
- Full viewport height (`min-height: calc(100vh - 80px)`).
- Layered background: High-resolution chrome cylindrical grinding workshop visual with bottom-right and bottom-left directional contrast gradients.
- Typography:
  - Technical label: `EST. 2009 · BHOSARI, PUNE`
  - H1: `SHREE GURUDATTA ENGINEERING WORKS`
  - Subhead: `HARD CHROME PLATING SERVICE & ENGINEERING WORKS`
  - Tagline: `"We Serve Quality in Exchange of Your Trust"`
  - 3 Core Pillars: `EXPORT QUALITY (NO REJECTION)`, `ADVANCED TECHNOLOGY`, `EXPERIENCED TEAM`.
  - CTAs: Primary `REQUEST A QUOTE →` and Secondary `EXPLORE SERVICES ↓`.

### 3.3 Technical Capabilities Strip
- Continuous horizontal technical specification band:
  - `600 μm` — MAX COATING THICKNESS
  - `Ø6–400 mm` — COMPONENT DIAMETER CAPACITY
  - `50–3000 mm` — JOB LENGTH CAPACITY
  - `2,000 L` — CHEMICAL TANK CAPACITY
  - `15+ YRS` — PROVEN INDUSTRY EXPERIENCE
  - `STRINGENT` — ZERO REJECTION QUALITY COMMITMENT
- Planar cells delimited by 1px vertical borders.
- Responsive wrapping: 6 columns desktop, 3 columns tablet, 2 columns mobile.

### 3.4 About Section (`#about`)
- Section index: `01 // ABOUT US`
- Text content verbatim from brochure: Promoters Mr. Shivaji Mahajan & Mr. Milind Mahajan; MIDC Bhosari plant operations.
- Authentic plant visual: Quality inspection technician with digital micrometer + plant exterior badge.
- 4 Key Engineering Attributes:
  - 15+ Years of Experience (Compliant Free Service to Export Customers)
  - Quality Commitment (Customer Satisfaction Standard)
  - Skilled & Experienced Workforce
  - Customer Focused Technical Approach
- Bottom editorial ticker: `QUALITY | PRECISION | PERFORMANCE | RELIABILITY`.

### 3.5 Services Section (`#services`)
- Section index: `02 // OUR SERVICES`
- 5 Verified Services in alternating editorial layouts (not generic identical cards):
  1. **Hard Chrome Plating**: On all Cylinder, Pistons, Spindles, Drum Rollers, Shafts, Mandrels surface maximum 600 micron diameterly.
  2. **Flash Chrome Plating**: On Pipes, Dies, Fixtures and Machine base plates.
  3. **Precision Grinding Services**: Grinding before and after hard chrome plating as per customer requirement.
  4. **Buffing & Polishing**: Buffing and Polishing to Plates and Rods.
  5. **De-plating / Chrome Removal**: Quick & safe chrome removal for maintenance jobs, dies and shafts.
- Distinct anchor IDs for each service so the navigation dropdown deep-links smoothly.

### 3.6 Capabilities & Component Gallery (`#capabilities` & `#components`)
- Section index: `03 // CAPABILITIES & SAMPLE COMPONENTS`
- 8 Verified Components:
  1. Hydraulic Cylinder Rod
  2. Piston Rod
  3. Shafts & Spindles
  4. Drum Rollers
  5. Pipes & Tubes
  6. Mandrels
  7. Dies & Fixtures
  8. Machine Plates
- Touch-friendly slider with Prev/Next controls, touch swipe support, and fallback grid.
- 4 Performance pillars: Precision Surface Finish, Enhanced Wear Resistance, Longer Life, Better Performance.

### 3.7 Industries We Serve & Specification Matrix (`#industries`)
- Section index: `04 // INDUSTRIES WE SERVE`
- 7 Core Sectors:
  1. Machine Manufacturers
  2. Hydraulic & Pneumatic Cylinder Manufacturers
  3. Engineering & Fabrication Industries
  4. Automotive & Auto Components
  5. Tool & Die Industries
  6. Process Equipment Manufacturers
  7. Export-Oriented Industries
- **Engineering Parameter Matrix**: The cross-sector engineering parameter table (Deposition depth, Machining, Performance values) provides immense value for technical buyers and search crawlers.

### 3.8 Valued Clients & Why Choose Us (`#clients`)
- Subtle horizontal logo rail: Bosch, SKF, Finolex Pipes, ARAI, Electronica, HYT Engineering, VR Precision, Verensol Technologies.
- 6 Verified value bullets from brochure panel 08:
  - 15+ Years of expertise in Hard Chrome Plating
  - State-of-the-art infrastructure & plating tanks
  - Large component handling capacity
  - Skilled & experienced workforce
  - Export quality with zero rejection commitment
  - Competitive pricing with on-time delivery

### 3.9 Contact Section & RFQ Desk (`#contact`)
- Section index: `05 // CONTACT US`
- Direct contact desk (no fake SaaS form submission):
  - Physical Address: Plot No- P4P RIG 108, Near Shitole Weight Bridge, MIDC Chowk, MIDC, Bhosari, Pune – 411026, Maharashtra, India.
  - Direct Phone: `8857894141`
  - Direct WhatsApp: `+91 8857894141` (prefilled RFQ message)
  - Official Email: `sgeworks2009@gmail.com`
  - RFQ Technical Submission Guide: Direct mailto link formatted with subject and body templates for component drawings, diameter, length, and micron specifications.
  - Interactive Google Maps direction link.

### 3.10 Persistent Floating Quick-Connect Dock
- Fixed bottom-right docked console:
  - Active status indicator: `Bhosari Plant // Active`
  - WhatsApp button with direct link and phone display.
  - Call button with direct `tel:8857894141`.
  - Engineered with a 1px border, high contrast, and zero layout shift.

---

## 4. Technical Strategy: Zero Runtime Dependencies

1. **Pure Modern CSS**:
   - Organized in modular files: `variables.css`, `base.css`, `components.css`, `sections.css`.
   - Complete CSS Custom Properties mapped directly from `industrial_editorial/DESIGN.md`.
   - Fluid typography using `clamp()` and CSS Grid/Flexbox.
   - Zero Tailwind runtime script overhead (removes 300KB+ client-side JS overhead).
2. **Vanilla JavaScript**:
   - Native DOM APIs, `IntersectionObserver` for section scroll reveals.
   - Touch event listeners (`touchstart`, `touchmove`, `touchend`) for the component slider.
   - Keyboard event listeners (`Escape`, `ArrowLeft`, `ArrowRight`, `Tab`).
   - Centralized `site-config.js` storing all business parameters so updates never require searching through HTML markup.
3. **Optimized Local Assets**:
   - Convert images to WebP and optimized JPEG using native tooling.
   - Embed width and height attributes on all `<img>` tags to completely eliminate Cumulative Layout Shift (CLS).
   - Eager-load hero image (`fetchpriority="high"`, `loading="eager"`).
   - Lazy-load all below-the-fold images (`loading="lazy"`).

---

## 5. SEO & Local Search Optimization Approach

1. **Local SEO Triad**:
   - Firmly establish: **Shree Gurudatta Engineering Works (SGE Works)** in **MIDC Bhosari, Pune, Maharashtra**.
   - Natural inclusion of high-intent search terms: *Hard chrome plating Pune, Hard chrome plating Bhosari, Precision grinding Bhosari, Flash chrome plating MIDC, Hydraulic cylinder rod plating Pune, Piston rod chrome plating Maharashtra, Industrial roller plating*.
2. **Structured Data (JSON-LD)**:
   - Enhanced `LocalBusiness` / `AutomotiveRepair` / `Service` schema.
   - Verified address, geo-coordinates, telephone, email, foundingDate (2009), areaServed, and detailed `hasOfferCatalog` listing the 5 core services and 8 component categories.
3. **Meta & Social Graph**:
   - Comprehensive Open Graph (`og:title`, `og:description`, `og:image`, `og:type="website"`).
   - Twitter Card tags.
   - Canonical URL tag pointing to production URL placeholder (`https://www.sgeworks.in/`).
   - Language tag: `<html lang="en">`.
4. **Sitemap & Robots**:
   - Valid `sitemap.xml` pointing to the canonical URL.
   - Clean `robots.txt` allowing crawler indexation and referencing `sitemap.xml`.

---

## 6. Phased Execution Plan

- **Phase 1: Foundation & Asset Preparation** (Current Step)
  - Process and organize all local image assets into `assets/images/` with SEO-friendly naming.
  - Generate the SVG brand logo and favicon.
  - Implement `site-config.js` for centralized business information.
- **Phase 2: CSS Architecture & Design Tokens**
  - Implement `variables.css`, `base.css`, `components.css`, and `sections.css`.
  - Validate typography (`Space Grotesk`, `Work Sans`, `Space Mono`), color palette, and hairlines.
- **Phase 3: Semantic HTML5 Structure & Verbatim Content**
  - Implement complete `index.html` with all 7 primary sections, anchor offsets, and full crawlable content.
  - Add JSON-LD LocalBusiness schema.
- **Phase 4: Interaction Engineering (Vanilla JS)**
  - Implement sticky navigation scroll states.
  - Implement accessible Services dropdown (keyboard + hover).
  - Implement mobile drawer navigation.
  - Implement touch-enabled component carousel.
  - Implement floating quick-connect dock.
- **Phase 5: SEO Deliverables & Static Deployment Files**
  - Create `robots.txt` and `sitemap.xml`.
  - Add comprehensive documentation in `README.md`.
- **Phase 6: Quality Assurance, Accessibility & Browser Validation**
  - Test desktop, tablet, and mobile viewports.
  - Verify keyboard accessibility and reduced-motion states.
  - Inspect console for zero errors.

---

## 7. Blockers & Dependencies
- No blocking dependencies. All required raw materials, imagery, and brochure data have been verified and copied locally.
- Client provisional data (exact GSTIN, working hours, confirmed production domain) are clearly flagged in `site-config.js` and `README.md` for client sign-off.
