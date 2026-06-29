"use client";

import { usePathname } from "next/navigation";

import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";
import LandingPageFrame from "./LandingPageFrame";

export default function RouteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");
  const isHomePage = pathname === "/";

  if (isBlogPage) {
    return <main className="bg-[#F8FAFC]">{children}</main>;
  }

  return (
    <LandingPageFrame>
      <main className="flex-1">{children}</main>
      {isHomePage && (
        <>
          <FaqSection />
          <CtaSection />
        </>
      )}
    </LandingPageFrame>
  );
}