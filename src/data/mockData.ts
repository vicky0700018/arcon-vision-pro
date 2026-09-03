// Central mock data for Prospera Arcon LLP Pune.
// All image URLs live here so they can be swapped easily.

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  aboutPreview:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
  leader:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  projects: [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1000&q=80",
  ],
  services: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=900&q=80",
  ],
  testimonials: [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  ],
};

export type Company = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  llpin: string;
  incorporation: string;
  activity: string;
  status: string;
  registrar: string;
};

export type Stat = { id: string; value: string; label: string };

export type Service = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  active: boolean;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  status: string;
  description: string;
  cover: string;
  gallery: string[];
  active: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  active: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  image: string;
  active: boolean;
};

export type Leadership = {
  name: string;
  designation: string;
  description: string;
  image: string;
};

export type WhyItem = { id: string; title: string; description: string };

export type Homepage = {
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
  credibility: string[];
  aboutHeading: string;
  aboutText: string;
  aboutImage: string;
  stats: Stat[];
  whyHeading: string;
  whyItems: WhyItem[];
  ctaHeading: string;
  ctaText: string;
  ctaImage: string;
};

export type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "completed";
  createdAt: string;
};

export type Settings = {
  siteTitle: string;
  logoText: string;
  logoSubtitle: string;
  footerText: string;
  phone: string;
  email: string;
  address: string;
  social: { label: string; url: string }[];
};

export const companyData: Company = {
  name: "Prospera Arcon LLP",
  tagline: "Construction & Real Estate, Pune",
  description:
    "Prospera Arcon LLP is a recently established Limited Liability Partnership based in Pune, Maharashtra, focused on construction and real estate-related activities. The company aims to deliver quality construction and development solutions with a strong emphasis on professionalism, reliability and long-term value.",
  address:
    "F 8 Clover Pinnacle Ridge, S.No. 33/2/75, Kondhwa, Pune City, Pune, Maharashtra, India - 411048",
  phone: "+91 90350 92921",
  email: "support.prosperaarconllp.com",
  llpin: "ACY-0679",
  incorporation: "May 12, 2026",
  activity: "Construction of buildings and real estate-related activities",
  status: "Active",
  registrar: "ROC Pune",
};

export const homepageData: Homepage = {
  heroHeading: "Building Tomorrow. Creating Lasting Value.",
  heroSubheading:
    "Prospera Arcon LLP is a Pune-based real estate and construction firm focused on building quality spaces, reliable infrastructure and long-term value.",
  heroImage: IMAGES.hero,
  ctaPrimary: "Explore Our Work",
  ctaSecondary: "Get In Touch",
  credibility: [
    "Pune Based",
    "Construction & Real Estate",
    "Professional & Reliable",
    "Quality Driven",
  ],
  aboutHeading: "Building With Purpose.",
  aboutText:
    "Prospera Arcon LLP is a Pune-based construction and real estate company delivering thoughtfully planned buildings, residential developments and commercial spaces. Every project is guided by disciplined execution, transparent communication and an uncompromising standard of quality — creating assets designed to hold their value for decades.",
  aboutImage: IMAGES.aboutPreview,
  stats: [
    { id: "s1", value: "2026", label: "Incorporated" },
    { id: "s2", value: "Pune", label: "Based In" },
    { id: "s3", value: "100%", label: "Quality Focused" },
    { id: "s4", value: "24/7", label: "Commitment" },
  ],
  whyHeading: "Why Choose Prospera Arcon",
  whyItems: [
    {
      id: "w1",
      title: "Quality First",
      description:
        "Focused on delivering reliable construction and development solutions.",
    },
    {
      id: "w2",
      title: "Professional Approach",
      description: "Structured planning and professional execution at every stage.",
    },
    {
      id: "w3",
      title: "Trust & Transparency",
      description: "Clear communication and a client-first approach.",
    },
    {
      id: "w4",
      title: "Pune Expertise",
      description:
        "Strong understanding of Pune's real estate and construction environment.",
    },
    {
      id: "w5",
      title: "Long-Term Vision",
      description:
        "Focused on creating lasting value through thoughtful development.",
    },
  ],
  ctaHeading: "Let's Build Something Valuable Together.",
  ctaText:
    "Discuss your next construction, development or real estate project with Prospera Arcon LLP.",
  ctaImage: IMAGES.cta,
};

export const servicesData: Service[] = [
  {
    id: "sv1",
    title: "Building Construction",
    description:
      "Planning and execution of high-quality building construction projects.",
    category: "Construction",
    image: IMAGES.services[0]!,
    active: true,
  },
  {
    id: "sv2",
    title: "Residential Projects",
    description:
      "Development and construction solutions for modern residential spaces.",
    category: "Residential",
    image: IMAGES.services[1]!,
    active: true,
  },
  {
    id: "sv3",
    title: "Commercial Construction",
    description:
      "Professional commercial construction solutions with a focus on functionality and quality.",
    category: "Commercial",
    image: IMAGES.services[2]!,
    active: true,
  },
  {
    id: "sv4",
    title: "Real Estate Development",
    description: "End-to-end real estate development and project execution.",
    category: "Real Estate",
    image: IMAGES.services[3]!,
    active: true,
  },
  {
    id: "sv5",
    title: "Project Planning",
    description:
      "Strategic planning and project management for construction initiatives.",
    category: "Planning",
    image: IMAGES.services[4]!,
    active: true,
  },
  {
    id: "sv6",
    title: "Infrastructure Solutions",
    description: "Reliable construction and infrastructure-focused execution.",
    category: "Infrastructure",
    image: IMAGES.services[5]!,
    active: true,
  },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    name: "Prospera Heights",
    category: "Residential Development",
    location: "Pune",
    year: "2026",
    status: "Ongoing",
    description:
      "A contemporary residential development designed around light, ventilation and efficient planning, offering well-proportioned homes with premium common amenities.",
    cover: IMAGES.projects[0]!,
    gallery: [IMAGES.gallery[0]!, IMAGES.gallery[3]!, IMAGES.gallery[5]!],
    active: true,
  },
  {
    id: "p2",
    name: "Arcon Business Square",
    category: "Commercial Development",
    location: "Pune",
    year: "2026",
    status: "Planning",
    description:
      "A commercial address built for modern businesses — flexible floor plates, strong structural engineering and a facade that signals corporate credibility.",
    cover: IMAGES.projects[1]!,
    gallery: [IMAGES.gallery[1]!, IMAGES.gallery[6]!, IMAGES.gallery[8]!],
    active: true,
  },
  {
    id: "p3",
    name: "Clover Residency",
    category: "Residential Project",
    location: "Pune",
    year: "2026",
    status: "Ongoing",
    description:
      "A refined residential project focused on durable construction quality, thoughtful layouts and calm, landscaped surroundings.",
    cover: IMAGES.projects[2]!,
    gallery: [IMAGES.gallery[2]!, IMAGES.gallery[4]!, IMAGES.gallery[7]!],
    active: true,
  },
  {
    id: "p4",
    name: "Prospera Urban Spaces",
    category: "Mixed-Use Development",
    location: "Pune",
    year: "2026",
    status: "Upcoming",
    description:
      "A mixed-use development combining retail, workspace and residences into a single, walkable urban environment.",
    cover: IMAGES.projects[3]!,
    gallery: [IMAGES.gallery[5]!, IMAGES.gallery[0]!, IMAGES.gallery[6]!],
    active: true,
  },
];

const galleryCategories = [
  "Residential",
  "Commercial",
  "Construction",
  "Architecture",
  "Infrastructure",
];

export const galleryData: GalleryItem[] = IMAGES.gallery.map((image, i) => ({
  id: `g${i + 1}`,
  title:
    [
      "Structural Framework",
      "Site Execution",
      "Facade Detail",
      "Residential Elevation",
      "Urban Massing",
      "Interior Volume",
      "Commercial Lobby",
      "Living Spaces",
      "City Infrastructure",
    ][i] ?? `Gallery ${i + 1}`,
  category: galleryCategories[i % galleryCategories.length]!,
  image,
  active: true,
}));

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Deshpande",
    company: "Deshpande Associates",
    review:
      "Disciplined planning and clear communication throughout. The team treated our timeline and budget with genuine respect.",
    rating: 5,
    image: IMAGES.testimonials[0]!,
    active: true,
  },
  {
    id: "t2",
    name: "Sneha Kulkarni",
    company: "Kulkarni Realty",
    review:
      "Quality of finishing and structural work exceeded expectations. A professional outfit that understands Pune's market.",
    rating: 5,
    image: IMAGES.testimonials[1]!,
    active: true,
  },
  {
    id: "t3",
    name: "Amit Shah",
    company: "Shah Ventures",
    review:
      "Transparent, responsive and detail-oriented. We would confidently work with Prospera Arcon on future developments.",
    rating: 4,
    image: IMAGES.testimonials[2]!,
    active: true,
  },
];

export const leadershipData: Leadership = {
  name: "Vikesh Kantilal Chhajed",
  designation: "Designated Partner",
  description:
    "Vikesh Kantilal Chhajed leads Prospera Arcon LLP with a focus on disciplined project execution, transparent client relationships and long-term value creation across construction and real estate development in Pune.",
  image: IMAGES.leader,
};

export const settingsData: Settings = {
  siteTitle: "Prospera Arcon LLP Pune | Construction & Real Estate",
  logoText: "PROSPERA ARCON LLP",
  logoSubtitle: "PUNE",
  footerText:
    "Pune-based construction and real estate company focused on quality, reliability and long-term value.",
  phone: "+91 90350 92921",
  email: "support.prosperaarconllp.com",
  address:
    "F 8 Clover Pinnacle Ridge, S.No. 33/2/75, Kondhwa, Pune City, Pune, Maharashtra, India - 411048",
  social: [
    { label: "LinkedIn", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "Facebook", url: "#" },
    { label: "X", url: "#" },
  ],
};

export const enquiriesData: Enquiry[] = [];

export const serviceOptions = servicesData.map((s) => s.title);
