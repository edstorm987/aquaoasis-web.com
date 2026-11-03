const isProduction = process.env.NODE_ENV === "production";

/** AquaCRM moved to aqua-crm.co.uk on 2026-09-15; aqua-crm.com is no longer trusted by it. */
export const AQUACRM_ORIGIN = (process.env.NEXT_PUBLIC_AQUACRM_URL?.trim()
  || (isProduction ? "https://www.aqua-crm.co.uk" : "http://localhost:3032")).replace(/\/$/, "");

export const AQUACRM_PUBLIC_URL = "https://www.aqua-crm.co.uk";
export const ZIMANTE_URL = "https://zimante-group.com";
export const EDWARD_URL = "https://edward-hallam.com";
export const MILESYMEDIA_URL = process.env.NEXT_PUBLIC_MILESYMEDIA_URL ?? "https://milesymedia.com";
export const SITE_URL = process.env.NEXT_PUBLIC_AQUAOASIS_URL ?? "https://aquaoasis-web.com";

export const contact = {
  phone: "07305410203",
  phoneHref: "tel:+447305410203",
  email: "aquaoasis-web@gmail.com",
  emailHref: "mailto:aquaoasis-web@gmail.com",
  location: "Suffolk, England. Working with businesses across the UK.",
};

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/work", label: "Work" },
  { href: "/free-tools", label: "Free tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  kicker: string;
  title: string;
  intro: string;
  accent: "aqua" | "violet" | "sun" | "coral" | "lime";
  icon: "browser" | "social" | "pin" | "bag" | "rocket";
  outcomes: string[];
  includes: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  tool?: { href: string; label: string };
  enquiryService: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Websites",
    short: "A fast, good-looking website that turns visitors into enquiries.",
    kicker: "Websites",
    title: "A website that works as hard as you do.",
    intro:
      "We plan it, write it, design it and build it. You get a quick, mobile-first site that looks like your business, tells people what you do in seconds and makes getting in touch obvious.",
    accent: "aqua",
    icon: "browser",
    outcomes: [
      "Looks unmistakably like your business",
      "Answers customer questions before they ask",
      "Turns visits into calls, bookings and enquiries",
    ],
    includes: [
      { title: "Plain-English copy", copy: "We write the words with you, so the site sounds like you and sells what you do." },
      { title: "Mobile-first design", copy: "Most of your visitors are on a phone. We design for them first." },
      { title: "Enquiries that land", copy: "Forms, calls and bookings routed to you, not lost in an inbox." },
      { title: "Found on Google", copy: "Clean structure, page titles and local signals built in from day one." },
      { title: "Fast and secure", copy: "Modern hosting, HTTPS and quick load times as standard." },
      { title: "Easy updates", copy: "Ask us, or change the simple things yourself. Either is fine." },
    ],
    steps: [
      { title: "Chat", copy: "A quick call about your business, customers and what you want the site to do." },
      { title: "Plan", copy: "Pages, words and the one action every visitor should take." },
      { title: "Build", copy: "Design and development, with a preview link you can click through." },
      { title: "Launch", copy: "Domain, Google and tracking connected. Then we keep improving it." },
    ],
    faqs: [
      { q: "How much does a website cost?", a: "Focused first websites start from £899. Bigger sites, bookings and ecommerce are quoted on what you actually need." },
      { q: "I already have a website. Can you fix it?", a: "Yes. Run the free health check first, then we can tell you whether it needs a refresh or a rebuild." },
      { q: "Do I need to write anything?", a: "No. We'll ask you good questions and write it for you. You approve it." },
    ],
    tool: { href: "/free-tools/health-check", label: "Check your current site for free" },
    enquiryService: "Website or ecommerce",
  },
  {
    slug: "social-media",
    name: "Social media",
    short: "Posts, content and management, so you stay visible without the daily grind.",
    kicker: "Social media",
    title: "Show up every week, without the stress.",
    intro:
      "We set up your profiles properly, plan what to post, create it and publish it. You stay visible, consistent and on-brand while you get on with running the business.",
    accent: "violet",
    icon: "social",
    outcomes: [
      "A consistent, recognisable presence",
      "Content planned around what you sell",
      "Hours back every week",
    ],
    includes: [
      { title: "Profile setup", copy: "Bios, links, highlights and branding sorted across the platforms that matter." },
      { title: "Content plans", copy: "A monthly plan built around your offers, seasons and customers." },
      { title: "Posts and reels", copy: "Graphics, captions and short video, made for each platform." },
      { title: "Scheduling", copy: "Published at the right times, so you never have to remember." },
      { title: "Photo and video", copy: "Original shoots with our sister company Milesymedia when you need them." },
      { title: "Simple reporting", copy: "What's working, in plain English, once a month." },
    ],
    steps: [
      { title: "Audit", copy: "What you have now, what competitors do and where your customers spend time." },
      { title: "Plan", copy: "Themes, formats and a calendar you sign off." },
      { title: "Create", copy: "We make the posts. You approve them with a tap." },
      { title: "Publish and learn", copy: "We post, watch the numbers and adjust." },
    ],
    faqs: [
      { q: "Which platforms do you cover?", a: "Instagram, Facebook, LinkedIn, TikTok, X and your Google Business Profile. We'll recommend the ones worth your time." },
      { q: "Do I have to be on camera?", a: "Only if you want to be. Plenty of great content doesn't need you in it." },
      { q: "Can I try it first?", a: "Yes. Use our free post creator to make a post now, and ask us for a content plan." },
    ],
    tool: { href: "/free-tools/post-creator", label: "Make a post with the free creator" },
    enquiryService: "Social media",
  },
  {
    slug: "google-seo",
    name: "Google & local SEO",
    short: "Get found on Google Search and Maps when local customers go looking.",
    kicker: "Google & local SEO",
    title: "Be the business people find first.",
    intro:
      "When someone searches for what you do near them, you should be there with great reviews, the right details and a reason to call. We set up and look after your Google presence so that happens.",
    accent: "sun",
    icon: "pin",
    outcomes: [
      "Show up on Google Search and Maps",
      "Accurate details everywhere customers look",
      "More calls, directions and website visits",
    ],
    includes: [
      { title: "Google Business Profile", copy: "Created or rebuilt, verified and filled in properly, with photos and services." },
      { title: "Reviews", copy: "A simple way for happy customers to leave reviews, and help replying to them." },
      { title: "Local pages", copy: "Website pages for the places and services people actually search for." },
      { title: "Search foundations", copy: "Titles, descriptions, speed and structure that Google understands." },
      { title: "Listings clean-up", copy: "Consistent name, address and phone number across the web." },
      { title: "Tracking", copy: "See calls, clicks and searches, so you know it's working." },
    ],
    steps: [
      { title: "Check", copy: "Where you appear now, for the searches that matter." },
      { title: "Fix", copy: "Profile, listings and website foundations put right." },
      { title: "Grow", copy: "Reviews, posts and local pages that build over time." },
      { title: "Report", copy: "Clear monthly numbers on how people are finding you." },
    ],
    faqs: [
      { q: "How long does SEO take?", a: "Your Google profile can improve within weeks. Wider search rankings build over months. We'll be honest about both." },
      { q: "Do you guarantee number one?", a: "No one honest can. We do the work that gives you the best chance and show you the results." },
      { q: "I don't have a shop. Can I still show on Maps?", a: "Often, yes. Service-area businesses can have a profile without showing an address." },
    ],
    tool: { href: "/free-tools/health-check", label: "Run the free Google health check" },
    enquiryService: "Google & local visibility",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    short: "An online shop that's easy to buy from and easy to run.",
    kicker: "Ecommerce",
    title: "Sell online, properly.",
    intro:
      "From a handful of products to a full catalogue, we build shops that are quick to browse, simple to check out and joined up with what happens after the order comes in.",
    accent: "coral",
    icon: "bag",
    outcomes: [
      "A shop customers trust with their card",
      "Smooth checkout on any device",
      "Orders that flow into how you work",
    ],
    includes: [
      { title: "Shop design", copy: "Product pages and collections that show your stock at its best." },
      { title: "Payments", copy: "Cards, Apple Pay and Google Pay set up and tested." },
      { title: "Delivery and collection", copy: "Shipping rates, click-and-collect and local delivery options." },
      { title: "Bookings and memberships", copy: "Sell time, classes, subscriptions or memberships as well as products." },
      { title: "Product photography", copy: "Shot by Milesymedia when your products need to shine." },
      { title: "After the sale", copy: "Order emails, stock and fulfilment that don't need babysitting." },
    ],
    steps: [
      { title: "Scope", copy: "What you sell, how you deliver it and how you take payment." },
      { title: "Design", copy: "A storefront and checkout built around your customers." },
      { title: "Build and load", copy: "Products, payments and delivery set up and tested." },
      { title: "Launch and grow", copy: "Go live, then use campaigns to bring buyers in." },
    ],
    faqs: [
      { q: "Which platform do you use?", a: "Whatever fits. Sometimes that's an established platform, sometimes a custom build. We'll explain the trade-offs." },
      { q: "Can you move my existing shop?", a: "Yes. We can migrate products, customers and orders with care." },
      { q: "What does a shop cost?", a: "It depends on catalogue size and features, so we quote each one. Get in touch and we'll scope it quickly." },
    ],
    enquiryService: "Website or ecommerce",
  },
  {
    slug: "campaigns",
    name: "Campaigns",
    short: "Ads, email and launches with tracking, so you can see what pays.",
    kicker: "Campaigns",
    title: "Campaigns that bring customers, not just clicks.",
    intro:
      "Launching something, filling quiet weeks or growing into a new area? We plan and run campaigns across Google, social and email, with proper tracking so every pound is accounted for.",
    accent: "lime",
    icon: "rocket",
    outcomes: [
      "Clear goals before any money is spent",
      "Ads and emails that sound like you",
      "Results you can actually see",
    ],
    includes: [
      { title: "Google Ads", copy: "Search and local campaigns aimed at people ready to buy." },
      { title: "Social ads", copy: "Meta and other platforms, targeted at the right people nearby." },
      { title: "Email", copy: "Newsletters and offers to the customers who already know you." },
      { title: "Landing pages", copy: "Focused pages that turn campaign clicks into enquiries." },
      { title: "Creative", copy: "Ad graphics, copy and video that stop the scroll." },
      { title: "Tracking", copy: "Every enquiry and sale traced back to where it came from." },
    ],
    steps: [
      { title: "Goal", copy: "What does success look like, and what's it worth to you?" },
      { title: "Build", copy: "Audience, message, creative and landing page." },
      { title: "Launch", copy: "Go live with a sensible budget and close watching." },
      { title: "Optimise", copy: "Move money to what works. Report in plain English." },
    ],
    faqs: [
      { q: "What budget do I need?", a: "Less than you might think to start. We'll recommend a test budget and only scale what earns its keep." },
      { q: "Do you take a cut of ad spend?", a: "Your ad spend goes to the platform. Our fee is agreed up front." },
      { q: "Can you run a one-off launch?", a: "Yes. Openings, events, product drops and seasonal pushes are all welcome." },
    ],
    enquiryService: "Advertising & campaigns",
  },
];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
