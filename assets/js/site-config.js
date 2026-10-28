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
      { name: "Mr. Shivaji Mahajan", role: "Director" },
      { name: "Mr. D. S. Mahajan", role: "CEO & Management" }
    ]
  },
  contact: {
    primaryContactPerson: "Mr. D. S. Mahajan",
    phoneDisplay: "8857894141",
    phoneTel: "+918857894141",
    whatsappNumber: "918857894141",
    whatsappDefaultMessage: "Hello SGE Works, I have an inquiry regarding Hard Chrome Plating / Precision Grinding."
  },
  schedule: {
    workingDays: "Friday – Wednesday (Fully open Sundays)",
    workingHours: "8:00 AM – 8:30 PM",
    weeklyHoliday: "Thursday (Holiday & Plant Maintenance Day)",
    logistics: "2-Ton Electric Overhead Crane system for loading & unloading heavy jobs"
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
    plot: "Plot No. PAP-BG-108",
    landmark: "Near Shitole Bridge, MIDC Chowk",
    area: "MIDC Bhosari",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411026",
    country: "India",
    fullAddress: "Plot No. PAP-BG-108, Near Shitole Bridge, MIDC Chowk, MIDC, Bhosari, Pune – 411026, Maharashtra, India",
    googleMapsUrl: "https://share.google/h1DAELcNBqEatvdKx",
    geoCoordinates: {
      latitude: 18.6298,
      longitude: 73.8431
    }
  },
  technicalCapabilities: {
    maxCoatingThickness: "600 μm (600 Micron)",
    componentDiameter: "Ø6 mm to Ø400 mm",
    jobLength: "50 mm to 3000 mm (Up to 3 Meters)",
    chemicalCapacity: "Primary 3,000L Tank & Secondary 2,000L Tank (Dual Plating Baths)",
    primaryTank: "3,000 Litres (Primary High-Capacity Chemical Bath)",
    secondaryTank: "2,000 Litres (Secondary Chemical Plating Bath)",
    surfaceRoughness: "Ra < 0.2 μm (controlled finish)",
    typicalHardness: "62+ HRC (800–1000 HV Standard)",
    flashChromeThickness: "15 to 30 Microns",
    craneCapacity: "2 Tons (Electric Overhead Crane)",
    experienceYears: "15+ Years"
  },
  verifiedServices: [
    {
      id: "service-hard-chrome",
      name: "Hard Chrome Plating",
      brief: "On all Cylinder, Pistons, Spindles, Drum Rollers, Shafts, Mandrels surface maximum 600 micron diameterly.",
      badge: "CORE PROCESS // UP TO 600 μm // 62+ HRC"
    },
    {
      id: "service-flash-chrome",
      name: "Flash Chrome Plating",
      brief: "On Pipes, Dies, Fixtures, Small Pins and Machine base plates.",
      badge: "THIN-FILM COATING // 15–30 μm"
    },
    {
      id: "service-satin-chrome",
      name: "Satin Chrome Plating",
      brief: "Non-glare matte pearl finish for optical tools, automotive switches, and precision molding dies.",
      badge: "MATTE ANTI-GLARE // HIGH CORROSION RESISTANCE"
    },
    {
      id: "service-precision-grinding",
      name: "Precision Grinding",
      brief: "Grinding before and after hard chrome plating as per customer requirement up to 3000 mm length.",
      badge: "CYLINDRICAL FINISHING // Ra < 0.2 μm // 3000 mm"
    },
    {
      id: "service-buffing-polishing",
      name: "Buffing & Polishing",
      brief: "Buffing and Polishing to Plates, Rods, and mirror-finish molding die components.",
      badge: "SURFACE REFINEMENT // MIRROR FINISH"
    },
    {
      id: "service-deplating",
      name: "De-plating / Chrome Removal",
      brief: "Quick & safe chemical acid chrome removal for maintenance jobs, dies and shafts with base metal intact.",
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
    { name: "VR Precision Products", sub: "Pvt. Ltd." },
    { name: "Finolex Pipes", sub: "Industrial Fluid Transport & PVC" },
    { name: "Gudel India", sub: "Linear Motion & Industrial Automation" },
    { name: "Renuka Auto Components", sub: "Die Casting & Precision Machining" },
    { name: "HYT Engineering", sub: "Engineering Co. Pvt. Ltd." },
    { name: "BOSCH", sub: "Automotive & Industrial" },
    { name: "ARAI", sub: "Progress through Research" },
    { name: "SKF", sub: "Bearings & Rotating Solutions" },
    { name: "Electronica", sub: "Machine Tools & EDM" },
    { name: "Verensol", sub: "Technologies Pvt. Ltd." }
  ]
};
