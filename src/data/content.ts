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
  scale: "Small" | "Standard" | "Large" | "Route";
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
    title: "Reliable Weekly Visits",
    description:
      "Consistent mowing, edging, trimming, and cleanup so the yard stays presentable without you chasing it.",
    icon: "clock",
  },
  {
    title: "Straightforward Pricing",
    description:
      "Clear estimates for regular service, seasonal cleanups, and one-time jobs before work begins.",
    icon: "shield",
  },
  {
    title: "Clean Finish",
    description:
      "Crews leave hard surfaces blown off, edges sharp, and green waste hauled or staged as agreed.",
    icon: "glove",
  },
  {
    title: "Local Yard Know-How",
    description:
      "Practical care for everyday lawns, hedges, weeds, leaves, and overgrown areas in our service area.",
    icon: "sprout",
  },
];

export const services: Service[] = [
  {
    slug: "weekly-yard-maintenance",
    name: "Weekly Yard Maintenance",
    shortDescription:
      "Recurring mowing, edging, trimming, and cleanup for homes that need steady, dependable care.",
    overview: [
      "Ramirez Yard Maintenance keeps everyday yards looking clean and under control. Our weekly and biweekly visits focus on the essentials: mowing, line trimming, edging, light debris pickup, and a tidy final blow-off.",
      "This is simple, dependable yard care for busy homeowners, renters, and property managers who want the outside of the property handled without a complicated contract.",
    ],
    includes: [
      "Lawn mowing at the right height for the season",
      "Edging along sidewalks, driveways, and beds",
      "Line trimming around fences, posts, and tight areas",
      "Light weed touchups during regular visits",
      "Blow-off of walkways, patios, and driveways",
      "Weekly or biweekly scheduling options",
    ],
    process: [
      {
        title: "Walk",
        description: "We review the yard, access points, green waste rules, and any areas that need special care.",
        icon: "discover",
      },
      {
        title: "Quote",
        description: "You get a clear recurring-service price based on size, growth, and visit frequency.",
        icon: "design",
      },
      {
        title: "Maintain",
        description: "The crew handles the routine cut, edge, trim, and cleanup on schedule.",
        icon: "build",
      },
      {
        title: "Adjust",
        description: "We update the service as weather, growth, or your needs change.",
        icon: "care",
      },
    ],
    heroImage: lawnMaintenance,
    cardImage: lawnMaintenance,
    gallery: [lawnMaintenance, heroEstate, seasonalPlanting, designInstallation],
    accent: "Routine Yard Care",
    faq: [
      {
        question: "Do I need weekly service?",
        answer:
          "Most lawns look best with weekly service during the growing season. Biweekly visits can work for smaller or slower-growing yards.",
      },
      {
        question: "Can you come while I am not home?",
        answer:
          "Yes. As long as we have safe access to the yard and any pets are secured, we can complete regular service without you being home.",
      },
      {
        question: "Do you haul away clippings?",
        answer:
          "We can use your green-waste bin or quote hauling when extra removal is needed.",
      },
    ],
    relatedProjectSlugs: ["front-yard-reset", "rental-property-maintenance", "corner-lot-cleanup"],
    testimonialIds: ["amanda-l", "jennifer-r"],
  },
  {
    slug: "mowing-edging",
    name: "Mowing & Edging",
    shortDescription:
      "Sharp, even cuts and clean borders for lawns, sidewalks, curbs, and driveways.",
    overview: [
      "A clean lawn starts with a consistent cut and crisp edges. We mow, edge, and trim with attention to the small details that make the whole property look cared for.",
      "This service is available as a recurring plan or as part of a one-time cleanup when the yard has gotten ahead of you.",
    ],
    includes: [
      "Front and backyard mowing",
      "Driveway, curb, and sidewalk edging",
      "Fence-line and planter trimming",
      "Grass cleanup from hard surfaces",
      "Seasonal height adjustments",
      "Optional add-on weed touchups",
    ],
    process: [
      {
        title: "Check",
        description: "We look for sprinkler heads, obstacles, wet areas, and uneven spots before cutting.",
        icon: "discover",
      },
      {
        title: "Set",
        description: "The mower height is matched to the yard condition and season.",
        icon: "design",
      },
      {
        title: "Cut",
        description: "We mow, edge, trim, and keep clippings controlled.",
        icon: "build",
      },
      {
        title: "Clean",
        description: "Walkways, patios, and drives are blown off before we leave.",
        icon: "care",
      },
    ],
    heroImage: lawnMaintenance,
    cardImage: heroEstate,
    gallery: [lawnMaintenance, heroEstate, seasonalPlanting, hardscapeLiving],
    accent: "Clean Lawn Lines",
    faq: [
      {
        question: "Can you fix uneven lawn edges?",
        answer:
          "Yes. Overgrown edges may take one or two visits to bring back cleanly, especially along older sidewalks or curbs.",
      },
      {
        question: "Do you bag grass clippings?",
        answer:
          "We can bag when needed, though many routine cuts can mulch clippings back into the lawn if conditions are right.",
      },
      {
        question: "Do you service small yards?",
        answer:
          "Yes. Small front yards, side yards, and rental properties are a common part of our route.",
      },
    ],
    relatedProjectSlugs: ["front-yard-reset", "townhome-yard-service", "corner-lot-cleanup"],
    testimonialIds: ["michael-s"],
  },
  {
    slug: "hedge-shrub-trimming",
    name: "Hedge & Shrub Trimming",
    shortDescription:
      "Practical trimming for hedges, shrubs, fence lines, and overgrown entry areas.",
    overview: [
      "Shrubs and hedges can quickly make a property feel messy when they block walkways, windows, gates, or curb visibility. We trim for a neat, natural, manageable shape.",
      "This service works well as a seasonal visit or an add-on to regular yard maintenance.",
    ],
    includes: [
      "Hedge shaping and height control",
      "Shrub trimming around entries and windows",
      "Fence-line cleanup",
      "Light branch and sucker removal",
      "Debris collection and green-waste handling",
      "Recommendations for recurring trim timing",
    ],
    process: [
      {
        title: "Review",
        description: "We identify what needs shaping, clearing, or reducing before trimming begins.",
        icon: "discover",
      },
      {
        title: "Plan",
        description: "We agree on a practical finished height and shape for the space.",
        icon: "design",
      },
      {
        title: "Trim",
        description: "The crew trims carefully around siding, windows, walkways, and beds.",
        icon: "build",
      },
      {
        title: "Remove",
        description: "Cuttings are collected and handled according to the estimate.",
        icon: "care",
      },
    ],
    heroImage: seasonalPlanting,
    cardImage: seasonalPlanting,
    gallery: [seasonalPlanting, designInstallation, heroEstate, lawnMaintenance],
    accent: "Hedges & Shrubs",
    faq: [
      {
        question: "Can you trim overgrown hedges?",
        answer:
          "Usually, yes. Very heavy reductions may need to be staged so the plants recover better and the debris can be handled efficiently.",
      },
      {
        question: "Do you trim trees?",
        answer:
          "We handle light, reachable trimming. Larger tree work or high limbs should be handled by a licensed tree specialist.",
      },
      {
        question: "How often should shrubs be trimmed?",
        answer:
          "Many yards need shrub trimming every 6 to 10 weeks during active growth, with lighter touchups in cooler months.",
      },
    ],
    relatedProjectSlugs: ["overgrown-side-yard", "front-yard-reset", "rental-property-maintenance"],
    testimonialIds: ["jennifer-r"],
  },
  {
    slug: "seasonal-yard-cleanups",
    name: "Seasonal Yard Cleanups",
    shortDescription:
      "One-time help for leaves, weeds, overgrowth, storm debris, and yards that need a reset.",
    overview: [
      "Sometimes the yard needs more than a quick mow. Our cleanup visits are built for overgrowth, leaves, weeds, dead plant material, and general outdoor clutter that makes the property feel neglected.",
      "We can reset the yard before listing a home, preparing for guests, moving in, moving out, or starting a recurring maintenance plan.",
    ],
    includes: [
      "Leaf and debris cleanup",
      "Tall grass and overgrowth knockdown",
      "Weed pulling or string trimming",
      "Shrub touchups where reachable",
      "Patio, walkway, and driveway blow-off",
      "Green-waste bin use or haul-away quote",
    ],
    process: [
      {
        title: "Assess",
        description: "We estimate the time, debris volume, and equipment needed for the cleanup.",
        icon: "discover",
      },
      {
        title: "Prioritize",
        description: "We focus first on curb appeal, walkways, entries, and the areas you use most.",
        icon: "design",
      },
      {
        title: "Reset",
        description: "The crew cuts back, gathers debris, trims weeds, and clears hard surfaces.",
        icon: "build",
      },
      {
        title: "Maintain",
        description: "If you want, we can roll the yard into a routine service schedule afterward.",
        icon: "care",
      },
    ],
    heroImage: designInstallation,
    cardImage: designInstallation,
    gallery: [designInstallation, lawnMaintenance, seasonalPlanting, commercialCampus],
    accent: "One-Time Cleanups",
    faq: [
      {
        question: "Can you clean up a very overgrown yard?",
        answer:
          "Yes. We will quote it based on access, growth height, debris volume, and disposal needs.",
      },
      {
        question: "Do you do move-out cleanups?",
        answer:
          "Yes. We help homeowners, renters, and property managers get yards presentable before turnover or inspection.",
      },
      {
        question: "Is hauling included?",
        answer:
          "Hauling depends on the amount of debris. We can use available green-waste bins or include haul-away in the estimate.",
      },
    ],
    relatedProjectSlugs: ["corner-lot-cleanup", "overgrown-side-yard", "rental-property-maintenance"],
    testimonialIds: ["harrington-family", "michael-t"],
  },
  {
    slug: "weed-leaf-debris-removal",
    name: "Weed, Leaf & Debris Removal",
    shortDescription:
      "Targeted cleanup for weeds, leaves, branches, clippings, and outdoor debris.",
    overview: [
      "Weeds and debris make even a simple yard look unfinished. We provide focused cleanup for beds, fence lines, walkways, patios, and high-visibility areas.",
      "This service is commonly paired with mowing, shrub trimming, or seasonal cleanup visits.",
    ],
    includes: [
      "Leaf blowing and collection",
      "Weed pulling where practical",
      "String trimming of larger weed areas",
      "Small branch and clipping collection",
      "Patio, walkway, and driveway cleanup",
      "Green-waste handling options",
    ],
    process: [
      {
        title: "Target",
        description: "We identify the worst weed and debris areas before starting.",
        icon: "discover",
      },
      {
        title: "Clear",
        description: "Leaves, branches, and loose debris are collected or moved to green waste.",
        icon: "build",
      },
      {
        title: "Detail",
        description: "Edges, walkways, and beds are cleaned up so the yard reads as maintained.",
        icon: "design",
      },
      {
        title: "Prevent",
        description: "We recommend a simple service rhythm to keep the problem from returning quickly.",
        icon: "care",
      },
    ],
    heroImage: commercialCampus,
    cardImage: commercialCampus,
    gallery: [commercialCampus, lawnMaintenance, seasonalPlanting, designInstallation],
    accent: "Beds, Leaves & Weeds",
    faq: [
      {
        question: "Do you spray weeds?",
        answer:
          "We focus on pulling, trimming, and cleanup. If treatment is needed, we will discuss product expectations before anything is applied.",
      },
      {
        question: "Can this be added to my regular visit?",
        answer:
          "Yes. Weed and debris touchups are easy to add to recurring yard maintenance.",
      },
      {
        question: "Do you remove junk or construction debris?",
        answer:
          "No. We handle yard debris and green waste, not household junk, hazardous materials, or construction debris.",
      },
    ],
    relatedProjectSlugs: ["overgrown-side-yard", "townhome-yard-service", "corner-lot-cleanup"],
    testimonialIds: ["amanda-l"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "jennifer-r",
    name: "Jennifer R.",
    projectType: "Weekly yard service",
    rating: 5,
    quote:
      "They show up when they say they will, the edges are clean, and I do not have to think about the yard anymore.",
    date: "2026-01-18",
  },
  {
    id: "michael-s",
    name: "Michael S.",
    projectType: "Mowing and edging",
    rating: 5,
    quote:
      "Our front yard looked sharper after one visit. Simple service, fair price, and no runaround.",
    date: "2025-11-03",
  },
  {
    id: "amanda-l",
    name: "Amanda L.",
    projectType: "Biweekly maintenance",
    rating: 5,
    quote:
      "The crew keeps our small yard clean every other week and always blows off the patio before leaving.",
    date: "2026-03-09",
  },
  {
    id: "michael-t",
    name: "Michael T.",
    projectType: "Rental property cleanup",
    rating: 5,
    quote:
      "They helped us get a rental yard back in shape quickly between tenants. Communication was easy.",
    date: "2025-10-21",
  },
  {
    id: "harrington-family",
    name: "The Harrington Family",
    projectType: "Seasonal cleanup",
    rating: 5,
    quote:
      "Leaves, weeds, and overgrowth were handled in one day. The yard finally looked usable again.",
    date: "2025-12-14",
  },
];

export const projects: Project[] = [
  {
    slug: "front-yard-reset",
    title: "Front Yard Reset",
    location: "Santa Barbara, CA",
    category: "Mowing & Edging",
    propertyType: "Residential",
    scale: "Small",
    clientBrief:
      "The homeowner needed the front yard cleaned up before family visited for the weekend.",
    scope: ["Mowing", "Edging", "Shrub touchup", "Walkway blow-off"],
    timeline: "1 visit",
    heroImage: lawnMaintenance,
    thumbnail: lawnMaintenance,
    beforeImage: seasonalPlanting,
    afterImage: lawnMaintenance,
    gallery: [lawnMaintenance, heroEstate, seasonalPlanting],
    resultNarrative: [
      "A clean cut, sharper edges, and light shrub touchups made the entry feel cared for again.",
      "The yard was placed on a weekly route to keep the growth from getting ahead of the owner.",
    ],
    testimonialId: "michael-s",
  },
  {
    slug: "corner-lot-cleanup",
    title: "Corner Lot Cleanup",
    location: "Goleta, CA",
    category: "Seasonal Cleanup",
    propertyType: "Residential",
    scale: "Large",
    clientBrief:
      "A corner lot had visible weeds, leaves, and overgrown grass along the sidewalk and curb.",
    scope: ["Tall grass knockdown", "Curb edging", "Weed trimming", "Debris collection"],
    timeline: "1 day",
    heroImage: designInstallation,
    thumbnail: designInstallation,
    beforeImage: lawnMaintenance,
    afterImage: designInstallation,
    gallery: [designInstallation, lawnMaintenance, commercialCampus],
    resultNarrative: [
      "The cleanup restored clear sidewalk edges and improved the view from both street fronts.",
    ],
    testimonialId: "harrington-family",
  },
  {
    slug: "rental-property-maintenance",
    title: "Rental Property Maintenance",
    location: "Ventura, CA",
    category: "Recurring Maintenance",
    propertyType: "Residential",
    scale: "Route",
    clientBrief:
      "A property manager needed reliable exterior care between tenant turnover and inspections.",
    scope: ["Biweekly mowing", "Light weed control", "Debris cleanup", "Photo updates"],
    timeline: "Ongoing",
    heroImage: heroEstate,
    thumbnail: heroEstate,
    beforeImage: seasonalPlanting,
    afterImage: heroEstate,
    gallery: [heroEstate, lawnMaintenance, seasonalPlanting],
    resultNarrative: [
      "Regular visits kept the yard inspection-ready without requiring the manager to schedule one-off cleanups.",
    ],
    testimonialId: "michael-t",
  },
  {
    slug: "overgrown-side-yard",
    title: "Overgrown Side Yard",
    location: "Carpinteria, CA",
    category: "Weed & Debris Removal",
    propertyType: "Residential",
    scale: "Standard",
    clientBrief:
      "The side yard had become hard to access because of weeds, leaves, and low branches.",
    scope: ["Weed trimming", "Leaf cleanup", "Reachable branch trimming", "Green waste staging"],
    timeline: "1 visit",
    heroImage: seasonalPlanting,
    thumbnail: seasonalPlanting,
    beforeImage: designInstallation,
    afterImage: seasonalPlanting,
    gallery: [seasonalPlanting, designInstallation, lawnMaintenance],
    resultNarrative: [
      "The walkway became usable again and the homeowner had a clear plan for monthly upkeep.",
    ],
  },
  {
    slug: "townhome-yard-service",
    title: "Townhome Yard Service",
    location: "Oxnard, CA",
    category: "Small Yard Care",
    propertyType: "Residential",
    scale: "Small",
    clientBrief:
      "A compact front and back yard needed regular care without a full design or build contract.",
    scope: ["Small lawn mowing", "Planter weed touchups", "Patio blow-off"],
    timeline: "Biweekly",
    heroImage: commercialCampus,
    thumbnail: commercialCampus,
    beforeImage: lawnMaintenance,
    afterImage: commercialCampus,
    gallery: [commercialCampus, lawnMaintenance, hardscapeLiving],
    resultNarrative: [
      "Biweekly service kept the outdoor space tidy while matching the owner’s budget and yard size.",
    ],
    testimonialId: "amanda-l",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Carlos Ramirez",
    title: "Owner & Crew Lead",
    initials: "CR",
    image: founderPortrait,
    bio: "Carlos estimates jobs, sets the route, and makes sure every yard is left clean before the crew moves on.",
  },
  {
    name: "Maribel Ramirez",
    title: "Scheduling & Customer Care",
    initials: "MR",
    bio: "Maribel handles service reminders, estimate requests, and the details that keep regular visits simple.",
  },
  {
    name: "Luis Hernandez",
    title: "Maintenance Lead",
    initials: "LH",
    bio: "Luis leads mowing, edging, trimming, and cleanup work for weekly and one-time service visits.",
  },
  {
    name: "Jorge Martinez",
    title: "Cleanup Specialist",
    initials: "JM",
    bio: "Jorge focuses on overgrown yards, seasonal debris, hedge touchups, and green-waste handling.",
  },
];

export const coreValues = [
  {
    title: "Show Up",
    description: "Good yard care starts with arriving on the agreed day and keeping communication clear.",
  },
  {
    title: "Work Clean",
    description: "We keep gates, walkways, patios, and driveways tidy while we work and when we leave.",
  },
  {
    title: "Keep It Simple",
    description: "No overbuilt plans or confusing packages. Just the yard work you actually need.",
  },
  {
    title: "Respect Property",
    description: "We watch for pets, sprinkler heads, parked cars, windows, and neighbor boundaries.",
  },
];

export const awards = [
  "Locally Owned",
  "Free Estimates",
  "Weekly Routes",
  "Residential Service",
  "Property Manager Friendly",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-mow",
    title: "How Often Should You Mow Your Yard?",
    category: "Yard Care",
    published: "2026-05-05",
    readTime: "4 min read",
    excerpt:
      "A simple guide to weekly, biweekly, and seasonal mowing schedules for everyday lawns.",
    featuredImage: lawnMaintenance,
    author: "Carlos Ramirez",
    seoDescription:
      "Learn how often to mow your yard and when weekly or biweekly yard maintenance makes sense.",
    body: [
      "Most lawns look their best with weekly mowing during active growth. That rhythm keeps grass from getting too tall, helps edges stay clean, and makes each visit faster.",
      "Biweekly service can work well for small yards, shaded lawns, or cooler months when growth slows down. The tradeoff is that a biweekly yard may look less crisp near the end of the cycle.",
      "The right schedule depends on watering, sun exposure, season, and how polished you want the yard to look from the street.",
    ],
  },
  {
    slug: "seasonal-yard-cleanup-checklist",
    title: "Seasonal Yard Cleanup Checklist",
    category: "Cleanups",
    published: "2026-04-12",
    readTime: "4 min read",
    excerpt:
      "What to clear first when leaves, weeds, and overgrowth start making the yard feel messy.",
    featuredImage: seasonalPlanting,
    author: "Maribel Ramirez",
    seoDescription:
      "A practical seasonal yard cleanup checklist for leaves, weeds, trimming, and debris removal.",
    body: [
      "Start with access areas: gates, walkways, driveways, and the path to the front door. These spots create the biggest first impression and make the rest of the cleanup easier.",
      "Next, address tall weeds and overgrown grass. Once the heavy growth is knocked down, it is easier to see what should be bagged, hauled, or added to green waste.",
      "Finish with detail work: edging, patio blow-off, shrub touchups, and any recurring plan that keeps the yard from getting out of hand again.",
    ],
  },
  {
    slug: "why-edging-makes-a-yard-look-cleaner",
    title: "Why Edging Makes a Yard Look Cleaner",
    category: "Mowing",
    published: "2026-03-20",
    readTime: "3 min read",
    excerpt:
      "Clean borders along sidewalks and driveways can make a simple mow look much more finished.",
    featuredImage: heroEstate,
    author: "Luis Hernandez",
    seoDescription:
      "Why lawn edging improves curb appeal and helps basic yard maintenance look more complete.",
    body: [
      "A lawn can be freshly cut and still look unfinished if the edges are fuzzy. Edging creates a clean line where grass meets concrete, curb, or planter bed.",
      "For regular maintenance, edging also keeps grass from creeping farther onto sidewalks and driveways. That means each visit starts from a cleaner baseline.",
      "When homeowners ask for a sharper-looking front yard, edging is usually one of the first details we recommend.",
    ],
  },
  {
    slug: "getting-an-overgrown-yard-back-under-control",
    title: "Getting an Overgrown Yard Back Under Control",
    category: "Cleanups",
    published: "2026-03-04",
    readTime: "5 min read",
    excerpt:
      "A realistic approach to overgrown grass, weeds, leaves, and green-waste removal.",
    featuredImage: designInstallation,
    author: "Carlos Ramirez",
    seoDescription:
      "How to reset an overgrown yard with mowing, trimming, debris cleanup, and recurring maintenance.",
    body: [
      "The first step is deciding what has to be cleared for safety and access. Gates, walkways, utility areas, and entries usually come first.",
      "Next comes the rough cut: tall grass, large weed patches, and heavy debris. This stage may not look perfect immediately, but it makes detailed work possible.",
      "After the reset, the best move is a simple maintenance schedule. Regular visits are almost always easier and cheaper than repeated emergency cleanups.",
    ],
  },
];

export const generalFaqs = [
  {
    category: "Process & Pricing",
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free estimates for regular yard maintenance, one-time cleanups, mowing, edging, and shrub trimming.",
  },
  {
    category: "Scheduling",
    question: "Do you offer weekly and biweekly service?",
    answer:
      "Yes. Weekly service is best during active growth, while biweekly service can work for smaller or slower-growing yards.",
  },
  {
    category: "Service",
    question: "What is included in basic yard maintenance?",
    answer:
      "A typical visit includes mowing, edging, trimming, light cleanup, and blowing off hard surfaces. We can add weeds, leaves, or shrub trimming as needed.",
  },
  {
    category: "Cleanups",
    question: "Can you handle an overgrown yard?",
    answer:
      "Yes. Overgrown yards are quoted based on size, access, growth height, debris volume, and hauling needs.",
  },
  {
    category: "Service",
    question: "Do you do landscape design or hardscape installation?",
    answer:
      "No. We focus on basic yard maintenance, mowing, edging, trimming, weeds, leaves, and cleanups.",
  },
  {
    category: "Service Area",
    question: "What areas do you serve?",
    answer:
      "We serve Santa Barbara and nearby communities including Goleta, Carpinteria, Montecito, and Ventura by route availability.",
  },
];

export const articleCategories = ["All", "Yard Care", "Cleanups", "Mowing"];

export const projectFilters = {
  services: [
    "All Services",
    "Recurring Maintenance",
    "Mowing & Edging",
    "Seasonal Cleanup",
    "Weed & Debris Removal",
    "Small Yard Care",
  ],
  propertyTypes: ["All Property Types", "Residential", "Commercial"],
  scales: ["All Job Sizes", "Small", "Standard", "Large", "Route"],
};
