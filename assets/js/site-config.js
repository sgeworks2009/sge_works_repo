/**
 * SGE Works — Centralized Business Configuration & Verified Company Information
 * 
 * NOTE FOR CLIENT / DEVELOPER:
 * All business information, contact points, location addresses, and operational limits
 * are centrally defined here. If phone numbers, plot addresses, or email addresses
 * change, updating this file ensures consistency across the website and structured data.
 */

window.SGE_CONFIG = {
  business: {
    legalName: "Shree Gurudatta Engineering Works",
    brandName: "SGE Works",
    tagline: "We Serve Quality in Exchange of Your Trust",
    establishedYear: 2009,
    primarySpecialization: "Hard Chrome Plating & Surface Engineering",
    promoters: [
      { name: "Mr. Shivaji Mahajan", role: "Promoter" },
      { name: "Mr. Milind Mahajan", role: "Management & Operations" }
    ]
  },
  contact: {
    phoneDisplay: "8857894141",
    phoneTel: "+918857894141",
    whatsappNumber: "918857894141",
    whatsappDefaultMessage: "Hello SGE Works, I have an inquiry regarding Hard Chrome Plating / Precision Grinding."
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
    plot: "Plot No- P4P RIG 108",
    landmark: "Near Shitole Weight Bridge, MIDC Chowk",
    area: "MIDC Bhosari",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411026",
    country: "India",
    fullAddress: "Plot No- P4P RIG 108, Near Shitole Weight Bridge, MIDC Chowk, MIDC, Bhosari, Pune – 411026, Maharashtra, India",
    googleMapsUrl: "https://share.google/h1DAELcNBqEatvdKx",
    geoCoordinates: {
      latitude: 18.6298,
      longitude: 73.8431
    }
  },
  technicalCapabilities: {
    maxCoatingThickness: "600 μm (600 Micron)",
    componentDiameter: "Ø6 mm to Ø400 mm",
    jobLength: "50 mm to 3000 mm",
    chemicalCapacity: "Up to 2,000 Litres",
    surfaceRoughness: "Ra < 0.2 μm (controlled finish)",
    typicalHardness: "65+ HRC (Industrial Hard Chrome)",
    experienceYears: "15+ Years"
  },
  verifiedServices: [
    {
      id: "service-hard-chrome",
      name: "Hard Chrome Plating",
      brief: "On all Cylinder, Pistons, Spindles, Drum Rollers, Shafts, Mandrels surface maximum 600 micron diameterly.",
      badge: "CORE PROCESS // UP TO 600 μm"
    },
    {
      id: "service-flash-chrome",
      name: "Flash Chrome Plating",
      brief: "On Pipes, Dies, Fixtures and Machine base plates.",
      badge: "THIN-FILM COATING // 5–15 μm"
    },
    {
      id: "service-precision-grinding",
      name: "Precision Grinding",
      brief: "Grinding before and after hard chrome plating as per customer requirement.",
      badge: "CYLINDRICAL FINISHING // Ra < 0.2 μm"
    },
    {
      id: "service-buffing-polishing",
      name: "Buffing & Polishing",
      brief: "Buffing and Polishing to Plates and Rods.",
      badge: "SURFACE REFINEMENT // MIRROR FINISH"
    },
    {
      id: "service-deplating",
      name: "De-plating / Chrome Removal",
      brief: "Quick & safe chrome removal for maintenance jobs, dies and shafts.",
      badge: "MAINTENANCE & STRIPPING // BASE INTACT"
    }
  ],
  verifiedComponents: [
    "Hydraulic cylinder rods",
    "Piston rods",
    "Shafts",
    "Spindles",
    "Drum rollers",
    "Pipes and tubes",
    "Mandrels",
    "Dies and fixtures",
    "Machine plates"
  ],
  verifiedIndustries: [
    "Machine manufacturers",
    "Hydraulic and pneumatic cylinder manufacturers",
    "Engineering and fabrication industries",
    "Automotive and auto component industries",
    "Tool and die industries",
    "Export-oriented industries",
    "Process equipment manufacturers"
  ],
  verifiedClients: [
    { name: "HYT Engineering", sub: "Engineering Co. Pvt. Ltd." },
    { name: "Finolex PIPES", sub: "Industrial PVC / Fluid Transport" },
    { name: "V R Precision", sub: "Precision Engineering Pvt. Ltd." },
    { name: "BOSCH", sub: "Automotive & Industrial" },
    { name: "ARAI", sub: "Progress through Research" },
    { name: "SKF", sub: "Bearings & Rotating Solutions" },
    { name: "Electronica", sub: "Machine Tools & EDM" },
    { name: "Verensol", sub: "Technologies Pvt. Ltd." }
  ]
};
