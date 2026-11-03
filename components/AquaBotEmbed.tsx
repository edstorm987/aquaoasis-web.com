import Script from "next/script";
import { AQUACRM_ORIGIN } from "@/lib/site";

/** The AquaCRM Aqua Bot (`/aqua-bot.js`). Only rendered when a bot id is configured. */
export function AquaBotEmbed({ botId }: { botId: string }) {
  return (
    <Script
      id="aqua-bot"
      src={`${AQUACRM_ORIGIN}/aqua-bot.js`}
      data-bot={botId}
      data-privacy-url="/privacy-policy"
      strategy="afterInteractive"
    />
  );
}
