export type Area = "Google" | "Website" | "Social" | "Enquiries";

export type Question = {
  id: string;
  area: Area;
  prompt: string;
  options: { label: string; score: number }[];
  fix: string;
};

/** The quick quiz behind the free health check. Each answer scores 0–100. */
export const questions: Question[] = [
  {
    id: "gbp",
    area: "Google",
    prompt: "Do you have a Google Business Profile?",
    options: [
      { label: "Yes, fully filled in", score: 100 },
      { label: "Yes, but it's basic", score: 55 },
      { label: "Not sure", score: 20 },
      { label: "No", score: 0 },
    ],
    fix: "Claim and complete your Google Business Profile: categories, services, hours, photos and a description. It's the single biggest free win for local businesses.",
  },
  {
    id: "search",
    area: "Google",
    prompt: "Search for what you do + your town. Where do you appear?",
    options: [
      { label: "Top 3 or the map", score: 100 },
      { label: "Page one somewhere", score: 60 },
      { label: "Page two or further", score: 25 },
      { label: "Couldn't find myself", score: 0 },
    ],
    fix: "Build local search signals: a page per main service and area, consistent name, address and phone everywhere, and regular Google posts.",
  },
  {
    id: "reviews",
    area: "Google",
    prompt: "How many Google reviews do you have?",
    options: [
      { label: "50+", score: 100 },
      { label: "10 to 49", score: 70 },
      { label: "1 to 9", score: 35 },
      { label: "None", score: 0 },
    ],
    fix: "Ask every happy customer for a review with a short link or QR code, and reply to every review. Reviews drive both ranking and trust.",
  },
  {
    id: "site-age",
    area: "Website",
    prompt: "When was your website last properly updated?",
    options: [
      { label: "This year", score: 100 },
      { label: "1 to 2 years ago", score: 60 },
      { label: "3+ years ago", score: 25 },
      { label: "I don't have one", score: 0 },
    ],
    fix: "Refresh your website so it reflects what you offer today, with up-to-date photos, prices and opening details.",
  },
  {
    id: "site-clarity",
    area: "Website",
    prompt: "Could a stranger tell what you do and how to contact you within 5 seconds?",
    options: [
      { label: "Definitely", score: 100 },
      { label: "Probably", score: 60 },
      { label: "Not really", score: 20 },
      { label: "No website", score: 0 },
    ],
    fix: "Rewrite the top of your homepage: what you do, who for, where, and one obvious button to call, book or enquire.",
  },
  {
    id: "site-mobile",
    area: "Website",
    prompt: "How does your website feel on a phone?",
    options: [
      { label: "Great", score: 100 },
      { label: "OK", score: 55 },
      { label: "Fiddly or slow", score: 15 },
      { label: "No website", score: 0 },
    ],
    fix: "Make the site mobile-first: big tap targets, fast images and click-to-call. Most of your visitors are on a phone.",
  },
  {
    id: "social-freq",
    area: "Social",
    prompt: "How often do you post on social media?",
    options: [
      { label: "Weekly or more", score: 100 },
      { label: "A few times a month", score: 65 },
      { label: "Now and then", score: 30 },
      { label: "Rarely or never", score: 0 },
    ],
    fix: "Plan a simple monthly content calendar and batch-create posts, so you show up every week without thinking about it.",
  },
  {
    id: "social-look",
    area: "Social",
    prompt: "Do your profiles look consistent and professional?",
    options: [
      { label: "Yes, all on-brand", score: 100 },
      { label: "Mostly", score: 60 },
      { label: "A bit of a mix", score: 30 },
      { label: "No profiles yet", score: 0 },
    ],
    fix: "Tidy your profiles: the same logo, colours, bio and link everywhere, with highlights or pinned posts that show what you do.",
  },
  {
    id: "enquiry-speed",
    area: "Enquiries",
    prompt: "How fast do you usually reply to a new enquiry?",
    options: [
      { label: "Within the hour", score: 100 },
      { label: "Same day", score: 70 },
      { label: "A day or two", score: 35 },
      { label: "Some get missed", score: 0 },
    ],
    fix: "Get every enquiry into one place with instant notifications and a quick auto-reply, so nothing slips through. This is exactly what AquaCRM does.",
  },
  {
    id: "enquiry-track",
    area: "Enquiries",
    prompt: "Do you know where your customers find you?",
    options: [
      { label: "Yes, I track it", score: 100 },
      { label: "Roughly", score: 55 },
      { label: "Not really", score: 20 },
      { label: "No idea", score: 0 },
    ],
    fix: "Set up simple tracking for calls, forms and bookings, and ask new customers how they found you, so you spend money where it works.",
  },
];

export const areas: Area[] = ["Google", "Website", "Social", "Enquiries"];

export function scoreLabel(score: number) {
  if (score >= 80) return { label: "Looking strong", color: "#00a99c" };
  if (score >= 55) return { label: "Good foundations, room to grow", color: "#e5a100" };
  if (score >= 30) return { label: "Missing out on customers", color: "#ff6a4d" };
  return { label: "Time to get sorted", color: "#d93a1a" };
}
