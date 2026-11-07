/**
 * SGE Works — Centralized Business Configuration & Verified Company Information
 * 
 * NOTE FOR CLIENT / DEVELOPER:
 * All business information, contact points, location addresses, and operational limits
 * are centrally defined here. Sourced from the official company brochure and client-confirmed
 * specifications.
 */

window.SGE_CONFIG = {
  business: {
    legalName: "Shree Gurudatta Engineering Works",
    brandName: "SGE Works",
    tagline: "Industrial Hard Chrome Plating & Surface Engineering",
    establishedYear: 2009,
    primarySpecialization: "Hard Chrome Plating & Job Works",
    domain: "https://sgeworks.com/",
    promoters: [
      { name: "Mr. Shivaji Mahajan", role: "Director" },
      { name: "Mr. D. S. Mahajan", role: "CEO" }
    ]
  },
  contact: {
    primaryContactPerson: "Mr. D. S. Mahajan",
    phoneDisplay: "8857894141",
    phoneTel: "+918857894141",
    directorPhoneTel: "+919665844040",
    email: "sgeworks2009@gmail.com",
    whatsappNumber: "918857894141",
    whatsappDefaultMessage: "Hello SGE Works, I have an inquiry regarding Hard Chrome Plating / Precision Grinding."
  },
  schedule: {
    logistics: "Electric crane system for loading and unloading heavy jobs up to 2 tonnes"
  },
  brand: {
    logoSvg: "assets/icons/logo.svg",
    logoDarkSvg: "assets/icons/logo-dark.svg",
    logoIconSvg: "assets/icons/logo-icon.svg",
    logoPng: "assets/images/logo.png",
    logoDarkPng: "assets/images/logo-dark.png",
    faviconSvg: "favicon.svg",
    appleTouchIcon: "apple-touch-icon.png"
  },
  location: {
    plot: "Plot No. PAP BG 108",
    landmark: "Near Gujar Gas Agency, Opposite L&T Switch Gear",
    area: "MIDC Bhosari",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411026",
    country: "India",
    fullAddress: "Plot No. PAP BG 108, Near Gujar Gas Agency, Opposite L&T Switch Gear, MIDC, Bhosari, Pune – 411026, Maharashtra, India"
  },
  technicalCapabilities: {
    maxHardChromeThickness: "Up to 600 μm",
    flashChromeThickness: "15 to 30 μm",
    satinChromeThickness: "10 to 25 μm",
    typicalHardness: "62+ HRC",
    dimensionalTolerance: "H6 / h7 (dimensional tolerance classes)",
    craneSystem: "Electric crane system for loading and unloading heavy jobs up to 2 tonnes",
    platingTanks: [
      {
        tankId: "Tank 01",
        dimensions: "1000 × 1000 × 2000 mm",
        chemicalCapacity: "2,000 litres",
        componentDiameter: "Ø6–Ø300 mm",
        jobLength: "50–1800 mm"
      },
      {
        tankId: "Tank 02",
        dimensions: "1000 × 1000 × 3300 mm",
        chemicalCapacity: "Operational envelope (undocumented volume)",
        componentDiameter: "Ø6–Ø400 mm",
        jobLength: "50–3000 mm"
      },
      {
        tankId: "Tank 03",
        dimensions: "1000 × 1500 × 1500 mm",
        chemicalCapacity: "Operational envelope (undocumented volume)",
        componentDiameter: "Ø6–Ø200 mm",
        jobLength: "up to 1300 mm"
      }
    ],
    deplatingTank: {
      tankId: "De-Plating Tank",
      description: "Dedicated chemical acid de-plating and chrome stripping tank",
      acidCapacity: "1,000 litres"
    }
  },
  verifiedServices: [
    {
      id: "service-hard-chrome",
      name: "Hard Chrome Plating",
      brief: "Industrial hard chrome plating up to 600 μm on cylinders, pistons, shafts, rollers, and mandrels with 62+ HRC surface hardness.",
      badge: "CORE PROCESS // UP TO 600 μm // 62+ HRC"
    },
    {
      id: "service-flash-chrome",
      name: "Flash Chrome Plating",
      brief: "Thin-film flash chrome plating (15–30 μm) on pipes, dies, fixtures, and machine base plates.",
      badge: "THIN-FILM COATING // 15–30 μm"
    },
    {
      id: "service-satin-chrome",
      name: "Satin Chrome Plating",
      brief: "Satin chrome plating with a verified coating thickness of 10 to 25 μm.",
      badge: "10–25 μm"
    },
    {
      id: "service-precision-grinding",
      name: "Precision Cylindrical Grinding",
      brief: "Cylindrical grinding performed before and after hard chrome plating according to customer requirements to dimensional tolerance classes H6/h7.",
      badge: "CYLINDRICAL FINISHING // H6 / h7"
    },
    {
      id: "service-buffing-polishing",
      name: "Buffing & Polishing",
      brief: "Buffing and polishing services for treated industrial components, plates, and shafts.",
      badge: "SURFACE REFINEMENT // BUFFING & POLISHING"
    },
    {
      id: "service-deplating",
      name: "De-plating / Chrome Removal",
      brief: "Chemical removal of existing chrome from maintenance components, dies, and shafts using a dedicated 1,000-litre acid de-plating tank.",
      badge: "MAINTENANCE & STRIPPING // 1,000L ACID TANK"
    }
  ],
  verifiedComponents: [
    "Hydraulic cylinder rods and piston rods",
    "Cylinder pistons",
    "Industrial shafts",
    "Spindles",
    "Drum rollers",
    "Mandrels",
    "Pipes and tubes",
    "Dies and fixtures",
    "Machine base plates",
    "Machinery components"
  ],
  verifiedIndustries: [
    "Engineering and machine manufacturing",
    "Hydraulic and pneumatic cylinder manufacturing",
    "Automotive and auto components",
    "Bearing and shaft manufacturing",
    "Tool and die manufacturing",
    "Industrial equipment and process machinery",
    "Export-oriented manufacturing"
  ],
  verifiedClients: [
    { name: "HYT Engineering", sub: "Engineering Co. Pvt. Ltd." },
    { name: "Finolex Pipes", sub: "Industrial Fluid Transport & PVC" },
    { name: "VR Precision Products", sub: "Pvt. Ltd." },
    { name: "BOSCH", sub: "Automotive & Industrial" },
    { name: "ARAI", sub: "Progress through Research" },
    { name: "SKF", sub: "Bearings & Rotating Solutions" },
    { name: "Electronica", sub: "Machine Tools & EDM" },
    { name: "Verensol", sub: "Technologies Pvt. Ltd." },
    { name: "Gudel India", sub: "Linear Motion & Industrial Automation" },
    { name: "Renuka Auto Components", sub: "Die Casting & Precision Machining" }
  ]
};
