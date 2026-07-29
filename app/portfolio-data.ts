export const aquaWork = [
  {
    slug: "ocean-boulevard",
    type: "Hospitality operation",
    title: "Ocean Boulevard",
    summary:
      "A public venue experience connected to staff workflows, service tools and development controls.",
    image: "/work/ocean-boulevard/overview.png",
    imageAlt: "Ocean Boulevard website and operational system",
    areas: [
      "Public website and gated maintenance states",
      "Staff and operational workflows",
      "Service and support context",
      "Development visibility",
    ],
  },
  {
    slug: "beast-commerce",
    type: "Commerce platform",
    title: "Beast Commerce",
    summary:
      "An on-demand storefront joined to the orders, products and fulfilment tools behind the buying journey.",
    image: "/work/beast-commerce/overview.png",
    imageAlt: "Beast Commerce storefront and operations",
    areas: [
      "Customer storefront",
      "Product and order journeys",
      "Operational management",
      "Connected fulfilment context",
    ],
  },
  {
    slug: "aquacrm",
    type: "Agency operating system",
    title: "AquaCRM",
    summary:
      "A connected workspace for leads, clients, finance, fulfilment, support, portals and development visibility.",
    image: "/images/aquaoasis-card-audit.png",
    imageAlt: "AquaCRM operational dashboard",
    areas: [
      "Lead-to-client pipeline",
      "Customer portals and project stages",
      "Finance, actions and support",
      "Development and performance monitoring",
    ],
  },
  {
    slug: "demo-media",
    type: "Interactive website concept",
    title: "Demo Media",
    summary:
      "A complete media studio experience with immersive service discovery, galleries, shoot stories, enquiries and a branded client journey.",
    image: "/work/demo-media/overview.png",
    imageAlt: "Demo Media photography and film website concept",
    previewUrl: "http://localhost:3036",
    areas: [
      "Immersive single-page service discovery",
      "Photography, film, aerial and studio journeys",
      "Interactive galleries and shoot stories",
      "Responsive enquiries and client access",
    ],
  },
] as const;

export type AquaWork = (typeof aquaWork)[number];
