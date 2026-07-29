import type { ReactNode } from "react";
import { AquaSiteFooter } from "./AquaSiteFooter";
import { AquaSiteHeader } from "./AquaSiteHeader";

const milesymediaUrl =
  process.env.NEXT_PUBLIC_MILESYMEDIA_URL ?? "http://localhost:3030";

export function AquaPageShell({ children }: { children: ReactNode }) {
  return (
    <main className="aqua2-site">
      <AquaSiteHeader />
      {children}
      <AquaSiteFooter
        milesymediaUrl={milesymediaUrl}
      />
    </main>
  );
}
