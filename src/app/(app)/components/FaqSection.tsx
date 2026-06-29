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
  8481: "bb-dynamic-018"
};

function FaqCard({
  faq,
  isOpen,
  leftClass,
  topClass,
  onClick






}: {faq: Faq;isOpen: boolean;leftClass: string;topClass: string;onClick: () => void;}) {
  return (
    <div
      onClick={onClick}
      className={`bb-faq-001 ${leftClass} ${topClass} bb-faq-002 ${
      isOpen ?
      "bb-faq-003" :
      "bb-faq-004"}`
      }>
      
      <div className="bb-faq-005">
        {faq.q}
      </div>
      {isOpen &&
      <div className="bb-faq-006">
          {faq.a}
        </div>
      }
      <div className="bb-faq-007">
        <div className="bb-faq-008" />
        <div
          className={`bb-faq-009 ${
          isOpen ? "bb-faq-010" : "bb-faq-011"}`
          } />
        
      </div>
    </div>);

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

  const allFaqs = [...leftFaqs, ...rightFaqs];
  const activeMobileFaq =
  activeLeftFaq !== null ? activeLeftFaq : activeRightFaq !== null ? activeRightFaq + leftFaqs.length : null;

  const toggleMobileFaq = (idx: number) => {
    if (idx < leftFaqs.length) {
      setActiveRightFaq(null);
      setActiveLeftFaq(activeLeftFaq === idx ? null : idx);
      return;
    }

    setActiveLeftFaq(null);
    const rightIdx = idx - leftFaqs.length;
    setActiveRightFaq(activeRightFaq === rightIdx ? null : rightIdx);
  };

  return (
    <>
    <div className="bb-blog-001">
      <div className="bb-faq-012">
        Frequently Asked Questions
      </div>

      {leftFaqs.map((faq, idx) => {
          const isOpen = activeLeftFaq === idx;

          return (
            <FaqCard
              key={faq.q}
              faq={faq}
              isOpen={isOpen}
              leftClass="bb-dynamic-019"
              topClass={faqTopClassByValue[leftFaqTops[idx]]}
              onClick={() => setActiveLeftFaq(isOpen ? null : idx)} />);


        })}

      {rightFaqs.map((faq, idx) => {
          const isOpen = activeRightFaq === idx;

          return (
            <FaqCard
              key={faq.q}
              faq={faq}
              isOpen={isOpen}
              leftClass="bb-dynamic-020"
              topClass={faqTopClassByValue[rightFaqTops[idx]]}
              onClick={() => setActiveRightFaq(isOpen ? null : idx)} />);


        })}
    </div>

      <section
        data-responsive-section="faq"
        className="bb-faq-013">
        
        <div className="bb-blog-021">
          <h2 className="bb-faq-014">
            Frequently Asked Questions
          </h2>

          <div className="bb-faq-015">
            {allFaqs.map((faq, idx) => {
              const isOpen = activeMobileFaq === idx;

              return (
                <button
                  key={faq.q}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleMobileFaq(idx)}
                  className={`bb-faq-016 ${
                  isOpen ?
                  "bb-faq-017" :
                  "bb-faq-018"}`
                  }>
                  
                  <div className="bb-faq-019">
                    <span className="bb-faq-020">
                      {faq.q}
                    </span>
                    <span className="bb-faq-021">
                      <span className="bb-faq-022" />
                      <span className={`bb-faq-023 ${isOpen ? "bb-faq-010" : "bb-faq-011"}`} />
                    </span>
                  </div>
                  {isOpen &&
                  <p className="bb-faq-024">
                      {faq.a}
                    </p>
                  }
                </button>);

            })}
          </div>
        </div>
      </section>
    </>);

}
