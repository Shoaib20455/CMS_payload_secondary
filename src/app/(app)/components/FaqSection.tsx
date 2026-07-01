"use client";

import { usePathname } from "next/navigation";
import { useLandingPageLayout } from "./LandingPageFrame";

type Faq = {
  q: string;
  a: string;
};

const faqTopClassByValue: Record<number, string> = {
  8095: "bb-dynamic-012",
  8188: "bb-dynamic-013",
  8281: "bb-dynamic-014",
  8295: "bb-dynamic-015",
  8374: "bb-dynamic-016",
  8388: "bb-dynamic-017",
  8481: "bb-dynamic-018",
};

function FaqCard({
  faq,
  isOpen,
  leftClass,
  topClass,
  onClick,
}: {
  faq: Faq;
  isOpen: boolean;
  leftClass: string;
  topClass: string;
  onClick: () => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`bb-faq-001 ${leftClass} ${topClass} bb-faq-002 ${
        isOpen ? "bb-faq-003" : "bb-faq-004"
      }`}
    >
      <h3 className="bb-faq-005">{faq.q}</h3>

      {isOpen && <div className="bb-faq-006">{faq.a}</div>}

      <div className="bb-faq-007">
        <div className="bb-faq-008" />
        <div className={`bb-faq-009 ${isOpen ? "bb-faq-010" : "bb-faq-011"}`} />
      </div>
    </article>
  );
}

export default function FaqSection() {
  const pathname = usePathname();

  const {
    leftFaqs,
    rightFaqs,
    activeLeftFaq,
    activeRightFaq,
    setActiveLeftFaq,
    setActiveRightFaq,
    leftFaqTops,
    rightFaqTops,
  } = useLandingPageLayout();

  if (pathname.startsWith("/blog")) {
    return null;
  }

  const faqItems = [
    ...leftFaqs.map((faq, idx) => ({
      faq,
      absoluteIndex: idx,
      leftClass: "bb-dynamic-019",
      topClass: faqTopClassByValue[leftFaqTops[idx]] ?? "",
    })),
    ...rightFaqs.map((faq, idx) => ({
      faq,
      absoluteIndex: idx + leftFaqs.length,
      leftClass: "bb-dynamic-020",
      topClass: faqTopClassByValue[rightFaqTops[idx]] ?? "",
    })),
  ];

  const isFaqOpen = (absoluteIndex: number) => {
    if (absoluteIndex < leftFaqs.length) {
      return activeLeftFaq === absoluteIndex;
    }

    return activeRightFaq === absoluteIndex - leftFaqs.length;
  };

  const toggleFaq = (absoluteIndex: number) => {
    if (absoluteIndex < leftFaqs.length) {
      setActiveRightFaq(null);
      setActiveLeftFaq(activeLeftFaq === absoluteIndex ? null : absoluteIndex);
      return;
    }

    const rightIdx = absoluteIndex - leftFaqs.length;
    setActiveLeftFaq(null);
    setActiveRightFaq(activeRightFaq === rightIdx ? null : rightIdx);
  };

  return (
    <section data-responsive-section="faq" className="bb-faq-single">
      <div className="bb-faq-inner">
        <h2 className="bb-faq-012">Frequently Asked Questions</h2>

        <div className="bb-faq-list">
          {faqItems.map((item) => (
            <FaqCard
              key={`${item.absoluteIndex}-${item.faq.q}`}
              faq={item.faq}
              isOpen={isFaqOpen(item.absoluteIndex)}
              leftClass={item.leftClass}
              topClass={item.topClass}
              onClick={() => toggleFaq(item.absoluteIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}