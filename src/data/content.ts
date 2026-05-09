import type { ImageMetadata } from "astro";

import commercialCampus from "@/assets/photos/commercial-campus.png";
import designInstallation from "@/assets/photos/design-installation.png";
import founderPortrait from "@/assets/photos/founder-portrait.png";
import hardscapeLiving from "@/assets/photos/hardscape-living.png";
import heroEstate from "@/assets/photos/hero-estate.png";
import lawnMaintenance from "@/assets/photos/lawn-maintenance.png";
import seasonalPlanting from "@/assets/photos/seasonal-planting.png";

type ProcessStep = {
  title: string;
  description: string;
  icon: "discover" | "design" | "build" | "care";
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string[];
  includes: string[];
  process: ProcessStep[];
  heroImage: ImageMetadata;
  cardImage: ImageMetadata;
  gallery: ImageMetadata[];
  accent: string;
  faq: { question: string; answer: string }[];
  relatedProjectSlugs: string[];
  testimonialIds: string[];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  propertyType: "Residential" | "Commercial";
  scale: "Estate" | "Signature" | "Boutique" | "Campus";
  clientBrief: string;
  scope: string[];
  timeline: string;
  heroImage: ImageMetadata;
  thumbnail: ImageMetadata;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  gallery: ImageMetadata[];
  resultNarrative: string[];
  testimonialId?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  projectType: string;
  rating: number;
  quote: string;
  date: string;
};

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  image?: ImageMetadata;
  initials: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  published: string;
  readTime: string;
  excerpt: string;
  featuredImage: ImageMetadata;
  author: string;
  seoDescription: string;
  body: string[];
};

export const valuePillars = [
  {
    title: "Precision Craftsmanship",
    description:
      "Meticulous attention to detail in every cut, stone line, irrigation zone, and planting composition.",
    icon: "sprout",
  },
  {
    title: "White-Glove Service",
    description:
      "Responsive communication, proactive planning, and polished jobsite standards from first visit through ongoing care.",
    icon: "glove",
  },
  {
    title: "Award-Winning Design",
    description:
      "Timeless outdoor environments shaped by proportion, material discipline, and a deep respect for the architecture.",
    icon: "trophy",
  },
  {
    title: "Guaranteed Satisfaction",
    description:
      "Every project closes with a detailed walkthrough, care guidance, and a clear plan for long-term success.",
    icon: "shield",
  },
];

export const services: Service[] = [
  {
    slug: "landscape-design-installation",
    name: "Landscape Design & Installation",
    shortDescription:
      "Custom outdoor environments designed around architecture, lifestyle, and long-term beauty.",
    overview: [
      "Ramirez Landscaping approaches design and installation as one continuous craft discipline. Each project begins with a site reading and a conversation about how the property should feel, function, and mature over time. From there, planting palettes, circulation, grading, lighting, and material transitions are composed into a unified outdoor experience.",
      "Our installation crews execute every layer with precision, from soil preparation and drainage to final planting and detail carpentry. The result is a landscape that feels inevitable rather than assembled: elegant, durable, and deeply connected to the home it surrounds.",
    ],
    includes: [
      "Landscape concept planning and site analysis",
      "Planting design with premium specimen selection",
      "Grading, drainage, and soil conditioning",
      "Installation of trees, shrubs, groundcovers, and seasonal accents",
      "Mulch, decorative rock, and finishing details",
      "Walkthrough, punch list completion, and care guidance",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We learn your vision, priorities, and how you want to live in the space.",
        icon: "discover",
      },
      {
        title: "Design",
        description:
          "Our team creates a tailored plan balancing architecture, planting, and circulation.",
        icon: "design",
      },
      {
        title: "Build",
        description:
          "Installation is executed with disciplined craftsmanship and tight quality control.",
        icon: "build",
      },
      {
        title: "Care",
        description:
          "We finish with detailed walkthroughs and an ongoing stewardship plan if needed.",
        icon: "care",
      },
    ],
    heroImage: designInstallation,
    cardImage: designInstallation,
    gallery: [designInstallation, heroEstate, seasonalPlanting, hardscapeLiving],
    accent: "Residential Signature Design",
    faq: [
      {
        question: "How long does a typical design and installation project take?",
        answer:
          "Most residential transformations move from planning through installation in six to twelve weeks, depending on permitting, site complexity, and material lead times.",
      },
      {
        question: "Can you work within an existing architectural style?",
        answer:
          "Yes. We tailor material selections, planting structure, and proportion so the landscape feels naturally aligned with the home rather than stylistically separate.",
      },
      {
        question: "Do you manage irrigation and lighting as part of the installation?",
        answer:
          "We frequently integrate irrigation and lighting into the same project scope to ensure the site performs as beautifully as it looks.",
      },
    ],
    relatedProjectSlugs: [
      "montecito-courtyard-renewal",
      "private-garden-oasis",
      "tree-lined-driveway",
    ],
    testimonialIds: ["jennifer-r", "michael-s"],
  },
  {
    slug: "lawn-care-maintenance-programs",
    name: "Lawn Care & Maintenance Programs",
    shortDescription:
      "Estate-level maintenance programs that preserve health, cleanliness, and year-round curb appeal.",
    overview: [
      "Our maintenance programs are designed for homeowners and property managers who want a landscape that never looks neglected between major visits. We build service calendars around turf health, seasonal changes, irrigation performance, pruning cycles, and weekly presentation standards.",
      "Rather than offering generic mow-and-blow service, Ramirez Landscaping provides structured care with accountable crews, property notes, and proactive recommendations. The goal is simple: your landscape should always look intentional, polished, and ready to welcome guests.",
    ],
    includes: [
      "Weekly or biweekly mowing and detailing",
      "Seasonal fertilization and lawn-health monitoring",
      "Irrigation observation and adjustment",
      "Shrub shaping and detail pruning",
      "Seasonal bed cleanup and debris management",
      "Property notes with service recommendations",
    ],
    process: [
      {
        title: "Assess",
        description:
          "We evaluate turf condition, irrigation habits, and the presentation standards of the property.",
        icon: "discover",
      },
      {
        title: "Plan",
        description:
          "A recurring maintenance calendar is built around the site’s real needs and client expectations.",
        icon: "design",
      },
      {
        title: "Maintain",
        description:
          "Crews service the property consistently with attention to detail and tidy execution.",
        icon: "build",
      },
      {
        title: "Refine",
        description:
          "We monitor performance, adjust seasonal tasks, and recommend improvements as conditions change.",
        icon: "care",
      },
    ],
    heroImage: lawnMaintenance,
    cardImage: lawnMaintenance,
    gallery: [lawnMaintenance, heroEstate, seasonalPlanting, designInstallation],
    accent: "Estate Stewardship",
    faq: [
      {
        question: "How often should a luxury property be maintained?",
        answer:
          "Most properties benefit from weekly service, while select sites can be maintained every other week depending on growth rate, irrigation, and presentation expectations.",
      },
      {
        question: "Do you provide seasonal refresh recommendations?",
        answer:
          "Yes. We flag planting decline, irrigation inefficiencies, and opportunities for seasonal color or lighting updates as part of ongoing care.",
      },
      {
        question: "Can maintenance be paired with enhancement work?",
        answer:
          "Absolutely. Many clients use maintenance as a baseline and schedule phased improvements throughout the year.",
      },
    ],
    relatedProjectSlugs: ["luxurious-poolscape", "irrigated-excellence", "modern-hillside-estate"],
    testimonialIds: ["amanda-l"],
  },
  {
    slug: "hardscape-outdoor-living-spaces",
    name: "Hardscape & Outdoor Living Spaces",
    shortDescription:
      "Patios, fire features, kitchens, and gathering spaces designed for elegant outdoor living.",
    overview: [
      "The best outdoor living spaces feel as gracious and usable as the interiors they extend. Ramirez Landscaping designs hardscape environments that anchor movement, dining, entertaining, and evening atmosphere while remaining visually calm and materially enduring.",
      "From structural layout and paving patterns to integrated lighting and planting softness, every element is composed to support both hospitality and longevity. We prioritize transitions, seating comfort, circulation, and the feeling of arrival just as much as the visible finish materials.",
    ],
    includes: [
      "Patios, courtyards, and paving design",
      "Fire features and lounge environments",
      "Outdoor kitchens and bar seating zones",
      "Integrated lighting and planting transitions",
      "Retaining features and grade solutions",
      "Material curation for timeless outdoor use",
    ],
    process: [
      {
        title: "Program",
        description:
          "We define how the space should be used for dining, gathering, privacy, and flow.",
        icon: "discover",
      },
      {
        title: "Compose",
        description:
          "Layouts, paving geometry, materials, and plant structure are designed as one system.",
        icon: "design",
      },
      {
        title: "Construct",
        description:
          "Execution emphasizes level transitions, finish quality, and durable installation methods.",
        icon: "build",
      },
      {
        title: "Illuminate",
        description:
          "Lighting and furnishing coordination give the space its final warmth and functionality.",
        icon: "care",
      },
    ],
    heroImage: hardscapeLiving,
    cardImage: hardscapeLiving,
    gallery: [hardscapeLiving, heroEstate, designInstallation, commercialCampus],
    accent: "Outdoor Hospitality",
    faq: [
      {
        question: "Can you integrate landscape lighting into outdoor living projects?",
        answer:
          "Yes. Lighting is often essential to how these spaces feel after sunset, so we plan it early rather than treating it as an afterthought.",
      },
      {
        question: "What materials do you typically recommend?",
        answer:
          "We favor stone, architectural concrete, masonry, and high-performance finishes chosen for timelessness, climate suitability, and upkeep expectations.",
      },
      {
        question: "Do you handle phased hardscape transformations?",
        answer:
          "We do. Many clients start with a primary gathering space and expand into kitchens, lighting, and secondary seating areas in later phases.",
      },
    ],
    relatedProjectSlugs: ["hillside-estate-retreat", "silverleaf-residence", "modern-hillside-estate"],
    testimonialIds: ["michael-s"],
  },
  {
    slug: "irrigation-systems-water-management",
    name: "Irrigation Systems & Water Management",
    shortDescription:
      "High-performance irrigation planning, upgrades, and troubleshooting for healthy, efficient landscapes.",
    overview: [
      "Water management is one of the most important invisible systems in any landscape. Our irrigation work balances plant health, conservation, and seasonal responsiveness so the landscape stays vibrant without waste.",
      "Whether we are installing a new system, optimizing an aging property, or correcting coverage issues, we focus on zoning discipline, runoff prevention, and long-term maintainability. The outcome is a landscape that performs consistently through changing weather and usage patterns.",
    ],
    includes: [
      "Irrigation design and zoning plans",
      "Controller setup and seasonal programming",
      "Coverage correction and leak troubleshooting",
      "Drainage strategy and runoff mitigation",
      "Water-use optimization recommendations",
      "Performance walkthroughs and monitoring",
    ],
    process: [
      {
        title: "Inspect",
        description:
          "We identify pressure, coverage, drainage, and plant-specific watering requirements.",
        icon: "discover",
      },
      {
        title: "Engineer",
        description:
          "Zoning, equipment selection, and water routing are planned for performance and efficiency.",
        icon: "design",
      },
      {
        title: "Install",
        description:
          "Our team implements or upgrades the system with clean, traceable workmanship.",
        icon: "build",
      },
      {
        title: "Optimize",
        description:
          "We calibrate settings and recommend seasonal adjustments to maintain healthy growth.",
        icon: "care",
      },
    ],
    heroImage: lawnMaintenance,
    cardImage: lawnMaintenance,
    gallery: [lawnMaintenance, seasonalPlanting, designInstallation, heroEstate],
    accent: "Performance Infrastructure",
    faq: [
      {
        question: "Do you work on existing irrigation systems?",
        answer:
          "Yes. Many of our water-management projects involve diagnosing inefficiencies and modernizing systems already in place.",
      },
      {
        question: "Can you help reduce water use without harming plant health?",
        answer:
          "That is one of the main goals. Proper zoning, controller strategy, and drainage correction often improve both efficiency and visual quality.",
      },
      {
        question: "Do you provide seasonal adjustments?",
        answer:
          "We can include seasonal tuning as part of recurring maintenance or as scheduled standalone visits.",
      },
    ],
    relatedProjectSlugs: ["irrigated-excellence", "tree-lined-driveway", "private-garden-oasis"],
    testimonialIds: ["jennifer-r"],
  },
  {
    slug: "seasonal-color-planting",
    name: "Seasonal Color & Planting",
    shortDescription:
      "Refined seasonal plantings that bring texture, rhythm, and a fresh sense of arrival throughout the year.",
    overview: [
      "Seasonal planting is most effective when it feels deliberate rather than loud. We design refreshes that complement the structure of the permanent landscape, adding color, softness, and visual lift without losing sophistication.",
      "Selections are tailored to the architecture, existing palette, and maintenance profile of the property. The effect is a garden that feels alive and responsive to the season while remaining aligned with the overall identity of the home or commercial space.",
    ],
    includes: [
      "Seasonal color planning and palette design",
      "Premium annual and perennial selections",
      "Planter refreshes and entry enhancements",
      "Soil amendment and bed preparation",
      "Layered texture and bloom sequencing",
      "Care guidance for sustained visual impact",
    ],
    process: [
      {
        title: "Review",
        description:
          "We evaluate existing plant structure, microclimates, and the visual role of seasonal color.",
        icon: "discover",
      },
      {
        title: "Curate",
        description:
          "Bloom, foliage, and textural layers are selected to complement architecture and maintenance needs.",
        icon: "design",
      },
      {
        title: "Install",
        description:
          "Beds and planters are refreshed with attention to rhythm, spacing, and finish detail.",
        icon: "build",
      },
      {
        title: "Sustain",
        description:
          "We provide guidance or maintenance support to keep the display healthy and polished.",
        icon: "care",
      },
    ],
    heroImage: seasonalPlanting,
    cardImage: seasonalPlanting,
    gallery: [seasonalPlanting, designInstallation, heroEstate, lawnMaintenance],
    accent: "Seasonal Garden Styling",
    faq: [
      {
        question: "How often can seasonal color be refreshed?",
        answer:
          "Many clients schedule updates quarterly, though some properties benefit from smaller monthly rotations in key presentation zones.",
      },
      {
        question: "Will seasonal plantings work with a restrained palette?",
        answer:
          "Yes. We often use subtle tonal shifts, foliage contrast, and layered texture instead of relying on bright color alone.",
      },
      {
        question: "Do you refresh containers as well as garden beds?",
        answer:
          "We do. Entry planters and focal containers are a common part of seasonal enhancement work.",
      },
    ],
    relatedProjectSlugs: ["mediterranean-garden", "private-garden-oasis", "oceanfront-retreat"],
    testimonialIds: ["amanda-l"],
  },
  {
    slug: "commercial-landscape-services",
    name: "Commercial Landscape Services",
    shortDescription:
      "Polished landscape environments for campuses, hospitality properties, and high-visibility commercial sites.",
    overview: [
      "Commercial landscapes carry operational demands beyond aesthetics alone. They must present the property well, support circulation, and remain consistent under regular use. Ramirez Landscaping brings hospitality-level presentation standards to campuses, mixed-use sites, boutique hotels, and premium office properties.",
      "We align maintenance, enhancement, and phased improvements with ownership goals, tenant experience, and budget priorities. The result is a site that looks managed, intentional, and worthy of the brand it represents.",
    ],
    includes: [
      "Commercial property maintenance plans",
      "Entry, campus, and hospitality enhancements",
      "Seasonal color and focal planter refreshes",
      "Irrigation oversight and repair coordination",
      "Tree, shrub, and planting bed management",
      "Property manager reporting and recommendations",
    ],
    process: [
      {
        title: "Audit",
        description:
          "We assess presentation quality, maintenance consistency, and high-visibility problem areas.",
        icon: "discover",
      },
      {
        title: "Align",
        description:
          "Service scope is tailored to ownership goals, site traffic, and budget expectations.",
        icon: "design",
      },
      {
        title: "Operate",
        description:
          "Crews and enhancement teams maintain the property with clear standards and communication.",
        icon: "build",
      },
      {
        title: "Report",
        description:
          "We provide recommendations for phased improvement and long-term asset stewardship.",
        icon: "care",
      },
    ],
    heroImage: commercialCampus,
    cardImage: commercialCampus,
    gallery: [commercialCampus, hardscapeLiving, lawnMaintenance, heroEstate],
    accent: "Commercial Excellence",
    faq: [
      {
        question: "Do you work with property managers and ownership groups?",
        answer:
          "Yes. We structure communication and reporting so managers have visibility into site condition, recommendations, and scheduling.",
      },
      {
        question: "Can you service mixed-use or hospitality properties?",
        answer:
          "We support premium commercial sites where landscape quality is part of the guest or tenant experience.",
      },
      {
        question: "Are enhancement projects available alongside ongoing maintenance?",
        answer:
          "Yes. Many commercial engagements pair recurring service with phased refreshes, entry upgrades, or irrigation improvements.",
      },
    ],
    relatedProjectSlugs: ["corporate-campus-enhancement", "silverleaf-residence", "hillside-estate-retreat"],
    testimonialIds: ["michael-t"],
  },
  {
    slug: "tree-shrub-services",
    name: "Tree & Shrub Services",
    shortDescription:
      "Health-focused pruning, shaping, and structural care for trees, hedges, and specimen plantings.",
    overview: [
      "Trees and shrubs provide the architecture of the landscape, which is why they require more than routine trimming. Our care emphasizes plant health, natural form, sight lines, and long-term balance across the property.",
      "Whether shaping specimen material at the entry or managing hedge structure throughout an estate, we work with disciplined pruning practices that preserve strength, beauty, and scale over time.",
    ],
    includes: [
      "Structural and detail pruning",
      "Specimen shaping and hedge refinement",
      "Canopy cleaning and clearance management",
      "Health monitoring and risk spotting",
      "Seasonal pruning calendars",
      "Integration with estate maintenance plans",
    ],
    process: [
      {
        title: "Survey",
        description:
          "We identify plant health, sight-line issues, and structural shaping priorities.",
        icon: "discover",
      },
      {
        title: "Sequence",
        description:
          "A pruning plan is set around species needs, timing, and the visual hierarchy of the site.",
        icon: "design",
      },
      {
        title: "Prune",
        description:
          "Our crews execute careful cuts that preserve natural form and long-term vigor.",
        icon: "build",
      },
      {
        title: "Monitor",
        description:
          "We revisit as needed and coordinate with irrigation or nutrition recommendations when appropriate.",
        icon: "care",
      },
    ],
    heroImage: seasonalPlanting,
    cardImage: heroEstate,
    gallery: [heroEstate, seasonalPlanting, designInstallation, lawnMaintenance],
    accent: "Structured Garden Care",
    faq: [
      {
        question: "Do you offer one-time pruning visits?",
        answer:
          "Yes. We provide both recurring care and standalone pruning for properties that need seasonal attention.",
      },
      {
        question: "Will pruning make the landscape look harsh or overcut?",
        answer:
          "Our standard is controlled, natural refinement. We avoid the over-sheared look that can strip character from the garden.",
      },
      {
        question: "Can you coordinate shrub care with maintenance crews?",
        answer:
          "Absolutely. We often build pruning into broader estate maintenance programs so the landscape reads as a unified whole.",
      },
    ],
    relatedProjectSlugs: ["tree-lined-driveway", "mediterranean-garden", "luxurious-poolscape"],
    testimonialIds: ["jennifer-r"],
  },
  {
    slug: "outdoor-lighting-design",
    name: "Outdoor Lighting Design",
    shortDescription:
      "Architectural and landscape lighting that extends usability and gives the property its evening identity.",
    overview: [
      "Lighting changes not only how a property looks at night, but how it is experienced. We design subtle systems that reveal pathways, frame architecture, and give planting depth after sunset without overwhelming the landscape.",
      "The strongest lighting plans feel elegant rather than obvious. Our approach favors layered illumination, deliberate contrast, and careful fixture placement so the site remains welcoming, legible, and beautifully composed in the evening.",
    ],
    includes: [
      "Lighting plans for pathways and entries",
      "Architectural and specimen uplighting",
      "Hospitality-style ambience for outdoor living spaces",
      "Fixture selection and placement strategy",
      "Troubleshooting and lighting refreshes",
      "Programming guidance and seasonal tuning",
    ],
    process: [
      {
        title: "Walk the Site",
        description:
          "We evaluate circulation, focal points, and how the property should feel after dark.",
        icon: "discover",
      },
      {
        title: "Layer",
        description:
          "We compose path, architectural, and garden lighting into a balanced evening experience.",
        icon: "design",
      },
      {
        title: "Install",
        description:
          "Fixtures are placed and calibrated with attention to glare control and finish quality.",
        icon: "build",
      },
      {
        title: "Fine-Tune",
        description:
          "We adjust beam, intensity, and timing so the atmosphere feels natural and intentional.",
        icon: "care",
      },
    ],
    heroImage: heroEstate,
    cardImage: hardscapeLiving,
    gallery: [heroEstate, hardscapeLiving, designInstallation, commercialCampus],
    accent: "Evening Atmosphere",
    faq: [
      {
        question: "Can lighting be added to an existing landscape?",
        answer:
          "Yes. Many lighting projects are retrofit enhancements designed to improve safety, hospitality, and visual depth.",
      },
      {
        question: "Do you prioritize subtle lighting over brightness?",
        answer:
          "Always. We design for mood, legibility, and focal emphasis rather than flooding the property with light.",
      },
      {
        question: "Can you combine lighting with patio or planting upgrades?",
        answer:
          "Yes. Lighting often performs best when designed alongside hardscape or planting improvements.",
      },
    ],
    relatedProjectSlugs: ["hillside-estate-retreat", "silverleaf-residence", "luxurious-poolscape"],
    testimonialIds: ["michael-s"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "jennifer-r",
    name: "Jennifer R.",
    projectType: "Residential Estate",
    rating: 5,
    quote:
      "Ramirez Landscaping transformed our entire outdoor space with patience, detail, and a level of craftsmanship that exceeded every expectation.",
    date: "2025-09-12",
  },
  {
    id: "michael-s",
    name: "Michael S.",
    projectType: "Outdoor Living Installation",
    rating: 5,
    quote:
      "Their design discipline and installation quality gave us a resort-caliber setting that still feels personal and timeless.",
    date: "2025-05-18",
  },
  {
    id: "amanda-l",
    name: "Amanda L.",
    projectType: "Luxury Homeowner",
    rating: 5,
    quote:
      "From ongoing maintenance to seasonal enhancements, the experience has been polished, proactive, and completely reliable.",
    date: "2026-01-20",
  },
  {
    id: "michael-t",
    name: "Michael T.",
    projectType: "Commercial Property Manager",
    rating: 5,
    quote:
      "Their team is organized, responsive, and deeply invested in how our property presents to tenants and visitors every day.",
    date: "2025-11-06",
  },
  {
    id: "harrington-family",
    name: "The Harrington Family",
    projectType: "Courtyard Renewal",
    rating: 5,
    quote:
      "Ramirez Landscaping turned our courtyard into a living work of art. Their professionalism and dedication were second to none.",
    date: "2025-08-07",
  },
];

export const projects: Project[] = [
  {
    slug: "montecito-courtyard-renewal",
    title: "Montecito Courtyard Renewal",
    location: "Montecito, CA",
    category: "Landscape Design",
    propertyType: "Residential",
    scale: "Estate",
    clientBrief:
      "The clients wanted a private arrival court that felt timeless, inviting, and better connected to the home’s Mediterranean architecture.",
    scope: [
      "Landscape Design & Installation",
      "Natural Stone Hardscaping",
      "Low-Voltage Landscape Lighting",
      "Irrigation System Upgrade",
      "Outdoor Living Enhancements",
    ],
    timeline: "10 weeks",
    heroImage: designInstallation,
    thumbnail: designInstallation,
    beforeImage: seasonalPlanting,
    afterImage: designInstallation,
    gallery: [designInstallation, heroEstate, hardscapeLiving, seasonalPlanting],
    resultNarrative: [
      "The renewed courtyard now delivers a formal yet welcoming arrival sequence with layered planting, structured paving, and subtle evening illumination.",
      "By softening the stonework with planting texture and improving circulation, the project elevated both curb presence and daily enjoyment of the property.",
    ],
    testimonialId: "harrington-family",
  },
  {
    slug: "beverly-hills-estate-transformation",
    title: "Beverly Hills Estate Transformation",
    location: "Beverly Hills, CA",
    category: "Landscape Design & Installation",
    propertyType: "Residential",
    scale: "Estate",
    clientBrief:
      "A recently renovated home needed an exterior landscape commensurate with the architecture and scale of the estate.",
    scope: [
      "Concept Design",
      "Specimen Planting",
      "Lighting Design",
      "Entry Sequence Enhancement",
    ],
    timeline: "12 weeks",
    heroImage: heroEstate,
    thumbnail: heroEstate,
    beforeImage: lawnMaintenance,
    afterImage: heroEstate,
    gallery: [heroEstate, designInstallation, seasonalPlanting, hardscapeLiving],
    resultNarrative: [
      "The transformation reframed the home with stronger structure, softer nighttime ambience, and a more gracious sense of arrival.",
    ],
    testimonialId: "jennifer-r",
  },
  {
    slug: "oceanfront-retreat",
    title: "Oceanfront Retreat",
    location: "Laguna Beach, CA",
    category: "Seasonal Color & Planting",
    propertyType: "Residential",
    scale: "Signature",
    clientBrief:
      "The clients wanted an elevated planting palette that could complement ocean views without competing with them.",
    scope: [
      "Plant Palette Refinement",
      "Seasonal Container Program",
      "Irrigation Optimization",
    ],
    timeline: "4 weeks",
    heroImage: seasonalPlanting,
    thumbnail: seasonalPlanting,
    beforeImage: lawnMaintenance,
    afterImage: seasonalPlanting,
    gallery: [seasonalPlanting, designInstallation, heroEstate],
    resultNarrative: [
      "Layered foliage, restrained bloom color, and seasonal updates created a setting that feels lush yet understated.",
    ],
  },
  {
    slug: "silverleaf-residence",
    title: "Silverleaf Residence",
    location: "Scottsdale, AZ",
    category: "Outdoor Living Spaces",
    propertyType: "Residential",
    scale: "Signature",
    clientBrief:
      "The outdoor entertaining areas lacked intimacy and evening warmth, despite generous square footage and strong architecture.",
    scope: [
      "Patio Reconfiguration",
      "Integrated Lighting",
      "Outdoor Kitchen Surrounds",
      "Planting Softscape",
    ],
    timeline: "9 weeks",
    heroImage: hardscapeLiving,
    thumbnail: hardscapeLiving,
    beforeImage: designInstallation,
    afterImage: hardscapeLiving,
    gallery: [hardscapeLiving, heroEstate, commercialCampus],
    resultNarrative: [
      "The revised layout created a sequence of outdoor rooms that now support entertaining, quiet evenings, and stronger visual connection to the home.",
    ],
    testimonialId: "michael-s",
  },
  {
    slug: "private-garden-oasis",
    title: "Private Garden Oasis",
    location: "Pasadena, CA",
    category: "Landscape Design",
    propertyType: "Residential",
    scale: "Signature",
    clientBrief:
      "A dense urban property needed more privacy, planting richness, and a calmer relationship between house and garden.",
    scope: [
      "Planting Design",
      "Privacy Screening",
      "Circulation Improvements",
    ],
    timeline: "8 weeks",
    heroImage: designInstallation,
    thumbnail: designInstallation,
    beforeImage: lawnMaintenance,
    afterImage: designInstallation,
    gallery: [designInstallation, seasonalPlanting, heroEstate],
    resultNarrative: [
      "Layered plant structure and better-defined pathways brought quiet, enclosure, and a more luxurious sense of retreat.",
    ],
  },
  {
    slug: "corporate-campus-enhancement",
    title: "Corporate Campus Enhancement",
    location: "Irvine, CA",
    category: "Commercial Landscape",
    propertyType: "Commercial",
    scale: "Campus",
    clientBrief:
      "Property management wanted a more polished first impression at the primary entry sequence and outdoor gathering zones.",
    scope: [
      "Commercial Enhancements",
      "Entry Planting Refresh",
      "Hospitality Seating Landscapes",
    ],
    timeline: "6 weeks",
    heroImage: commercialCampus,
    thumbnail: commercialCampus,
    beforeImage: lawnMaintenance,
    afterImage: commercialCampus,
    gallery: [commercialCampus, hardscapeLiving, lawnMaintenance],
    resultNarrative: [
      "The updated planting and hardscape details improved visual quality for tenants and strengthened the site’s professional presence.",
    ],
    testimonialId: "michael-t",
  },
  {
    slug: "mediterranean-garden",
    title: "Mediterranean Garden",
    location: "San Juan Capistrano, CA",
    category: "Seasonal Color & Planting",
    propertyType: "Residential",
    scale: "Boutique",
    clientBrief:
      "The clients wanted more floral richness and layered texture while preserving a composed, old-world atmosphere.",
    scope: [
      "Planting Bed Renewal",
      "Container Styling",
      "Shrub Detailing",
    ],
    timeline: "3 weeks",
    heroImage: seasonalPlanting,
    thumbnail: seasonalPlanting,
    beforeImage: designInstallation,
    afterImage: seasonalPlanting,
    gallery: [seasonalPlanting, heroEstate, designInstallation],
    resultNarrative: [
      "The refreshed garden now carries more depth, seasonal interest, and softness while remaining architecturally disciplined.",
    ],
  },
  {
    slug: "luxurious-poolscape",
    title: "Luxurious Poolscape",
    location: "Newport Coast, CA",
    category: "Outdoor Living Spaces",
    propertyType: "Residential",
    scale: "Estate",
    clientBrief:
      "A large backyard needed a more cohesive poolside environment with stronger evening atmosphere and better lounge flow.",
    scope: [
      "Poolside Planting",
      "Lighting Design",
      "Lounge Terrace Enhancements",
    ],
    timeline: "7 weeks",
    heroImage: hardscapeLiving,
    thumbnail: hardscapeLiving,
    beforeImage: heroEstate,
    afterImage: hardscapeLiving,
    gallery: [hardscapeLiving, seasonalPlanting, heroEstate],
    resultNarrative: [
      "A layered lighting plan and more intentional planting palette turned the pool area into a true hospitality-grade retreat.",
    ],
  },
  {
    slug: "irrigated-excellence",
    title: "Irrigated Excellence",
    location: "Carlsbad, CA",
    category: "Irrigation Systems",
    propertyType: "Residential",
    scale: "Signature",
    clientBrief:
      "Dry spots, runoff, and inconsistent controller settings were undermining a mature landscape and creating unnecessary water use.",
    scope: [
      "Irrigation Audit",
      "Controller Programming",
      "Coverage Correction",
    ],
    timeline: "2 weeks",
    heroImage: lawnMaintenance,
    thumbnail: lawnMaintenance,
    beforeImage: seasonalPlanting,
    afterImage: lawnMaintenance,
    gallery: [lawnMaintenance, designInstallation, seasonalPlanting],
    resultNarrative: [
      "The recalibrated system restored visual consistency, reduced waste, and gave the landscape a healthier, better-tended appearance.",
    ],
  },
  {
    slug: "tree-lined-driveway",
    title: "Tree-Lined Driveway",
    location: "Ojai, CA",
    category: "Tree & Shrub Services",
    propertyType: "Residential",
    scale: "Boutique",
    clientBrief:
      "The entry drive felt overgrown and visually compressed, with specimen trees obscuring the property’s strongest features.",
    scope: [
      "Structural Pruning",
      "Shrub Refinement",
      "Entry Sequence Cleanup",
    ],
    timeline: "10 days",
    heroImage: heroEstate,
    thumbnail: heroEstate,
    beforeImage: lawnMaintenance,
    afterImage: heroEstate,
    gallery: [heroEstate, seasonalPlanting, designInstallation],
    resultNarrative: [
      "Careful pruning reopened the approach, improved light quality, and restored the sense of scale the property deserved.",
    ],
  },
  {
    slug: "modern-hillside-estate",
    title: "Modern Hillside Estate",
    location: "Encinitas, CA",
    category: "Landscape Design & Installation",
    propertyType: "Residential",
    scale: "Estate",
    clientBrief:
      "A new-build hillside home needed outdoor spaces that felt warm, grounded, and visually integrated with the architecture.",
    scope: [
      "Landscape Master Planning",
      "Outdoor Living Enhancements",
      "Lighting and Planting",
    ],
    timeline: "14 weeks",
    heroImage: hardscapeLiving,
    thumbnail: hardscapeLiving,
    beforeImage: designInstallation,
    afterImage: hardscapeLiving,
    gallery: [hardscapeLiving, heroEstate, designInstallation, seasonalPlanting],
    resultNarrative: [
      "The completed site balances bold architecture with layered planting and a more welcoming, livable outdoor experience.",
    ],
  },
  {
    slug: "hillside-estate-retreat",
    title: "Hillside Estate Retreat",
    location: "Santa Barbara, CA",
    category: "Outdoor Lighting Design",
    propertyType: "Residential",
    scale: "Estate",
    clientBrief:
      "The owners wanted their evening landscape experience to feel more intimate, safer, and more luxurious for entertaining.",
    scope: [
      "Outdoor Lighting Design",
      "Focal Tree Uplighting",
      "Path and Terrace Illumination",
    ],
    timeline: "3 weeks",
    heroImage: heroEstate,
    thumbnail: heroEstate,
    beforeImage: designInstallation,
    afterImage: heroEstate,
    gallery: [heroEstate, hardscapeLiving, commercialCampus],
    resultNarrative: [
      "The new lighting layers added drama, wayfinding, and a richer sense of depth without overpowering the architecture or plantings.",
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Carlos Ramirez",
    title: "Founder & Owner",
    initials: "CR",
    image: founderPortrait,
    bio: "Carlos leads design direction, client strategy, and the quality standards that define every Ramirez Landscaping project.",
  },
  {
    name: "Maribel Ramirez",
    title: "Design Director",
    initials: "MR",
    bio: "Maribel shapes planting palettes, finish selections, and the details that give each property its lasting character.",
  },
  {
    name: "Luis Hernandez",
    title: "Operations Manager",
    initials: "LH",
    bio: "Luis coordinates crews, schedules, and logistics to keep execution disciplined, efficient, and clean on site.",
  },
  {
    name: "Jorge Martinez",
    title: "Lead Landscape Architect",
    initials: "JM",
    bio: "Jorge helps translate site challenges into spatially elegant solutions that feel both practical and elevated.",
  },
];

export const coreValues = [
  {
    title: "Craftsmanship",
    description:
      "We take pride in the details that make a lasting impression.",
  },
  {
    title: "Integrity",
    description:
      "Honesty, transparency, and accountability are at the heart of everything we do.",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in design, service, and results.",
  },
  {
    title: "Stewardship",
    description:
      "We respect the land and build outdoor environments that endure.",
  },
];

export const awards = [
  "California Landscape Contractors Association",
  "CLCA Member",
  "Accredited BBB Business",
  "California Native Plant Society Supporter",
  "Builders Association Partner",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-outdoor-spaces-that-stand-the-test-of-time",
    title: "Designing Outdoor Spaces That Stand the Test of Time",
    category: "Design Guidance",
    published: "2026-05-05",
    readTime: "6 min read",
    excerpt:
      "Timeless outdoor environments rely on proportion, restraint, and material choices that age gracefully.",
    featuredImage: hardscapeLiving,
    author: "Carlos Ramirez",
    seoDescription:
      "A guide to timeless landscape design principles for luxury residential properties.",
    body: [
      "Timeless landscapes are rarely the loudest. They earn their staying power through proportion, durable material decisions, and planting structure that matures gracefully rather than chasing a short-term trend.",
      "For residential clients, that often means beginning with how the architecture wants to meet the landscape. Strong entries, generous transitions, and carefully placed focal moments create a property that feels composed the day it is finished and even better a few seasons later.",
      "The most successful projects also respect maintenance reality. A refined landscape should not depend on constant rescue work to look presentable. Thoughtful zoning, right-sized planting, and disciplined hardscape geometry make longevity possible.",
    ],
  },
  {
    slug: "spring-landscape-checklist",
    title: "Spring Landscape Checklist",
    category: "Seasonal Care",
    published: "2026-04-12",
    readTime: "4 min read",
    excerpt:
      "A spring reset should prepare the property for stronger growth, cleaner edges, and a more polished presentation.",
    featuredImage: seasonalPlanting,
    author: "Maribel Ramirez",
    seoDescription:
      "A seasonal landscaping checklist for spring maintenance, planting, and irrigation readiness.",
    body: [
      "Spring is the ideal time to address the quiet issues that can compromise a landscape later in the year: irrigation inefficiencies, pruning that was deferred through winter, and planting beds that need renewed structure.",
      "Start with irrigation performance. Even minor misalignment can show up quickly as temperatures rise. Then move to edge detail, mulch quality, and any shrubs or perennials that need shape correction before new growth becomes harder to manage.",
      "Finally, identify where seasonal color or container refreshes can create the strongest visual lift. Small, well-placed updates often outperform broad changes when the permanent framework of the landscape is already strong.",
    ],
  },
  {
    slug: "pathways-that-elevate-curb-appeal",
    title: "Pathways That Elevate Curb Appeal",
    category: "Outdoor Living",
    published: "2026-03-20",
    readTime: "5 min read",
    excerpt:
      "Entry paths shape how a property is experienced before the front door is ever reached.",
    featuredImage: designInstallation,
    author: "Jorge Martinez",
    seoDescription:
      "How entry walks, paving lines, and planting improve curb appeal and the sense of arrival.",
    body: [
      "A front walk does more than connect a driveway to a door. It sets pace, frames views, and establishes the tone of the home before a guest reaches the threshold.",
      "The best paths balance directness with ceremony. Material edges, planting softness, and nighttime lighting all influence whether the arrival feels abrupt or gracious.",
      "When we design entry experiences, we think about what the path reveals, what it conceals, and where the landscape should create a pause. Those details are often what transform curb appeal into a genuine sense of place.",
    ],
  },
  {
    slug: "native-plants-that-thrive-locally",
    title: "Native Plants That Thrive Locally",
    category: "Plant Care",
    published: "2026-03-04",
    readTime: "5 min read",
    excerpt:
      "Native and climate-adapted planting can deliver beauty, resilience, and a more grounded regional character.",
    featuredImage: commercialCampus,
    author: "Maribel Ramirez",
    seoDescription:
      "Climate-appropriate plant guidance for luxury residential and commercial landscape projects.",
    body: [
      "Native and climate-appropriate plants are most compelling when they are selected for beauty as much as resilience. Texture, movement, seasonal interest, and architectural form all matter.",
      "In refined residential work, local species often become the connective tissue that makes the landscape feel rooted to its setting. In commercial work, they support consistent performance and reduced maintenance pressure.",
      "The key is curation. A resilient palette should still feel composed and site-specific rather than purely utilitarian.",
    ],
  },
];

export const generalFaqs = [
  {
    category: "Process & Pricing",
    question: "How do I start a new project?",
    answer:
      "Begin with a consultation. We discuss your goals, site conditions, priorities, and timing before outlining the most appropriate next step.",
  },
  {
    category: "Process & Pricing",
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide complimentary estimate consultations for qualified projects and recurring service inquiries.",
  },
  {
    category: "Maintenance",
    question: "Do you offer ongoing maintenance after installation?",
    answer:
      "Yes. Many clients continue with one of our maintenance programs to protect the quality and health of the landscape long after the initial project is complete.",
  },
  {
    category: "Irrigation",
    question: "Can you troubleshoot an existing irrigation system?",
    answer:
      "Absolutely. We frequently diagnose inefficiencies, revise zoning, and improve controller programming on established properties.",
  },
  {
    category: "Design & Build",
    question: "Do you handle permits and HOA coordination?",
    answer:
      "We can coordinate with permitting or design-review requirements where project scope calls for it, and we help clients understand those needs early.",
  },
  {
    category: "Service Area",
    question: "What areas do you serve?",
    answer:
      "We primarily serve Southern California, including Santa Barbara, Ventura, Los Angeles, Orange, Riverside, and San Diego counties.",
  },
];

export const articleCategories = [
  "All",
  "Design Guidance",
  "Seasonal Care",
  "Outdoor Living",
  "Plant Care",
];

export const projectFilters = {
  services: [
    "All Services",
    "Landscape Design",
    "Landscape Design & Installation",
    "Outdoor Living Spaces",
    "Seasonal Color & Planting",
    "Commercial Landscape",
    "Irrigation Systems",
    "Tree & Shrub Services",
    "Outdoor Lighting Design",
  ],
  propertyTypes: ["All Property Types", "Residential", "Commercial"],
  scales: ["All Scales", "Estate", "Signature", "Boutique", "Campus"],
};
