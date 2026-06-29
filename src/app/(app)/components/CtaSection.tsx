"use client";

import { usePathname } from "next/navigation";
import { useLandingPageLayout } from "./LandingPageFrame";

const ctaTopClasses: Record<
  number,
  {
    frame: string;
    title: string;
    copy: string;
    button: string;
  }
> = {
  8477: {
    frame: "bb-dynamic-004",
    title: "bb-dynamic-005",
    copy: "bb-dynamic-006",
    button: "bb-dynamic-007",
  },
  8584: {
    frame: "bb-dynamic-008",
    title: "bb-dynamic-009",
    copy: "bb-dynamic-010",
    button: "bb-dynamic-011",
  },
};

export default function CtaSection() {
  const pathname = usePathname();
  const { ctaTop } = useLandingPageLayout();

  if (pathname.startsWith("/blog")) {
    return null;
  }

  const topClasses = ctaTopClasses[ctaTop] ?? ctaTopClasses[8477];

  return (
    <>
      <div className="bb-blog-001">
        <div className={`bb-cta-001 ${topClasses.frame}`} />

        <div className={`bb-cta-002 ${topClasses.title}`}>
          Grow Your Business Faster
        </div>

        <div className={`bb-cta-003 ${topClasses.copy}`}>
          From load booking to payment follow-up, we handle the hard work behind
          the scenes so you can stay focused on the road ahead.
        </div>

        <button className={`bb-cta-004 ${topClasses.button}`}>
          Get Started
        </button>
      </div>

      <section data-responsive-section="cta" className="bb-cta-005">
        <div className="bb-cta-006">
          <h2 className="bb-cta-007">Grow Your Business Faster</h2>

          <p className="bb-cta-008">
            From load booking to payment follow-up, we handle the hard work
            behind the scenes so you can stay focused on the road ahead.
          </p>

          <button className="bb-cta-009">Get Started</button>
        </div>
      </section>
    </>
  );
}