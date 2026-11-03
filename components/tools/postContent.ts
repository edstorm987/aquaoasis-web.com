/**
 * Content rules for the free post creator. Platform formats follow the AquaCRM
 * social planner (`lib/fulfilment/socialPostFormats.ts`); captions are built
 * from templates here, so the tool works with no account and no AI call.
 */

export const platforms = [
  { id: "instagram", label: "Instagram", limit: 2200, shape: "square", tagCount: 8 },
  { id: "facebook", label: "Facebook", limit: 63206, shape: "square", tagCount: 3 },
  { id: "linkedin", label: "LinkedIn", limit: 3000, shape: "landscape", tagCount: 3 },
  { id: "x", label: "X", limit: 280, shape: "landscape", tagCount: 2 },
  { id: "google-business", label: "Google", limit: 1500, shape: "landscape", tagCount: 0 },
] as const;

export type PlatformId = (typeof platforms)[number]["id"];

export const postTypes = [
  { id: "offer", label: "Offer", headline: "This week only" },
  { id: "new", label: "Something new", headline: "Just landed" },
  { id: "behind", label: "Behind the scenes", headline: "Meet the team" },
  { id: "tip", label: "Helpful tip", headline: "Quick tip" },
  { id: "event", label: "Event", headline: "Save the date" },
  { id: "thanks", label: "Thank you", headline: "Thank you" },
] as const;

export type PostTypeId = (typeof postTypes)[number]["id"];

export const tones = ["Friendly", "Professional", "Playful"] as const;
export type Tone = (typeof tones)[number];

export const ctas = ["Book now", "Call us", "Pop in", "Shop now", "Link in bio", "Message us"] as const;
export type Cta = (typeof ctas)[number];

export const backgrounds = [
  { id: "aqua", label: "Aqua to violet", from: "#00d1c1", to: "#7c5cff", light: false },
  { id: "sunset", label: "Sunset", from: "#ffc23d", to: "#ff6a4d", light: false },
  { id: "night", label: "Midnight", from: "#0b1020", to: "#3b4a8c", light: false },
  { id: "lime", label: "Fresh lime", from: "#c8f560", to: "#00d1c1", light: true },
  { id: "paper", label: "Clean paper", from: "#ffffff", to: "#efede6", light: true },
] as const;

export type BackgroundId = (typeof backgrounds)[number]["id"];

const openers: Record<PostTypeId, Record<Tone, string>> = {
  offer: {
    Friendly: "Treat time! 🎉",
    Professional: "A limited-time offer for our customers.",
    Playful: "Psst… your wallet is going to love this 👀",
  },
  new: {
    Friendly: "Something new just arrived and we can't wait to show you ✨",
    Professional: "We're pleased to introduce something new.",
    Playful: "Drumroll please 🥁 It's finally here!",
  },
  behind: {
    Friendly: "Ever wondered what goes on behind the scenes? 👋",
    Professional: "A look behind the scenes at how we work.",
    Playful: "Caught in the act 📸 Here's what really happens back here…",
  },
  tip: {
    Friendly: "Here's a quick tip we think you'll love 💡",
    Professional: "One practical tip from our team.",
    Playful: "Tip of the day, served fresh 💡",
  },
  event: {
    Friendly: "You're invited! 🗓️",
    Professional: "Join us for an upcoming event.",
    Playful: "Clear your diary, this one's a goodie 🎈",
  },
  thanks: {
    Friendly: "A huge thank you to everyone who supports us 💛",
    Professional: "Thank you to our customers for your continued support.",
    Playful: "You lot are the best, and we're not just saying that 🥹",
  },
};

const ctaLines: Record<Cta, string> = {
  "Book now": "Book now and secure your spot.",
  "Call us": "Give us a call to find out more.",
  "Pop in": "Pop in and see us.",
  "Shop now": "Shop now while it lasts.",
  "Link in bio": "Tap the link in our bio.",
  "Message us": "Send us a message and we'll sort you out.",
};

export function buildCaption({
  platform,
  type,
  tone,
  cta,
  business,
  details,
  hashtags,
}: {
  platform: PlatformId;
  type: PostTypeId;
  tone: Tone;
  cta: Cta;
  business: string;
  details: string;
  hashtags: string[];
}) {
  const name = business.trim() || "us";
  const about = details.trim();
  const ctaLine = platform !== "instagram" && cta === "Link in bio" ? "Find out more on our website." : ctaLines[cta];
  const sign = business.trim() ? `\n\n— ${business.trim()}` : "";
  const tags = hashtags.length ? `\n\n${hashtags.join(" ")}` : "";

  if (platform === "x") {
    return `${openers[type][tone]} ${about || `News from ${name}.`} ${ctaLine}${tags ? ` ${hashtags.join(" ")}` : ""}`.trim();
  }
  if (platform === "linkedin") {
    return `${openers[type].Professional}\n\n${about || `An update from ${name}.`}\n\n${ctaLine}${sign}${tags}`;
  }
  return `${openers[type][tone]}\n\n${about || `Here's what's new at ${name}.`}\n\n${ctaLine}${sign}${tags}`;
}

const stopWords = new Set(["the", "and", "for", "with", "our", "your", "you", "this", "that", "from", "are", "new", "all", "ltd", "limited", "now"]);

export function suggestHashtags(business: string, details: string, town: string) {
  const words = `${business} ${details}`
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));
  const unique = [...new Set(words)].slice(0, 4).map((word) => `#${word}`);
  const place = town.trim().replace(/[^a-zA-Z0-9]/g, "");
  return [
    ...unique,
    ...(business.trim() ? [`#${business.trim().replace(/[^a-zA-Z0-9]/g, "")}`] : []),
    ...(place ? [`#${place}`, `#Shop${place}`, `#${place}Business`] : []),
    "#SmallBusiness",
    "#ShopLocal",
    "#SupportLocal",
  ].filter((tag, index, all) => tag.length > 2 && all.indexOf(tag) === index);
}

export function contentPlan(business: string, platform: string) {
  const name = business.trim() || "your business";
  return [
    { week: "Week 1", theme: "Introduce yourself", posts: [`Who's behind ${name}: a photo and a short story`, "Your best-selling product or service, with the price", `Behind the scenes: a day at ${name}`] },
    { week: "Week 2", theme: "Show proof", posts: ["Share a customer review as a graphic", "Before and after, or a finished job", "Answer the question customers ask most"] },
    { week: "Week 3", theme: "Be useful", posts: ["A quick tip related to what you sell", "A short video: how it's made or how to use it", "Spotlight a local partner or supplier"] },
    { week: "Week 4", theme: "Ask for the sale", posts: ["A time-limited offer with a clear call to action", "Remind people how to book, buy or find you", `Thank your customers and preview next month on ${platform}`] },
  ];
}
