"use client";

import { useState } from "react";

const leftClassByColumn = [
"bb-dynamic-019",
"bb-dynamic-068",
"bb-dynamic-020",
"bb-dynamic-069"];


const topClassByRow = ["bb-dynamic-070", "bb-dynamic-071"];

const whyChooseCards = [
{ title: "Dedicated Box Truck Dispatch Experts", desc: "Our experienced dispatchers understand the box truck market and work hard to keep your truck loaded with profitable freight.", col: 0, row: 0 },
{ title: "Reduced Empty Miles", desc: "Strategic route planning helps minimize deadhead miles, lower fuel costs, and increase overall profitability.", col: 0, row: 1 },
{ title: "Higher-Paying Loads", desc: "We negotiate aggressively with brokers to secure the best possible rates and maximize your weekly revenue.", col: 1, row: 0 },
{ title: "Fast & Reliable Communication", desc: "We maintain constant communication with brokers, shippers, and drivers to prevent delays and keep every load on track.", col: 1, row: 1 },
{ title: "24/7 Dispatch Support", desc: "Questions, issues, or load updates? Our team is available around the clock to keep your operations running smoothly.", col: 2, row: 0 },
{ title: "Paperwork & Broker Follow-Up", desc: "From rate confirmations to proof of delivery submissions, we handle the administrative work so you can focus on driving.", col: 2, row: 1 },
{ title: "No Forced Dispatch", desc: "You remain in control. We present the opportunities, and you decide which loads fit your business goals.", col: 3, row: 0 },
{ title: "Nationwide Coverage", desc: "Whether you operate locally, regionally, or across the country, we help you find consistent freight opportunities throughout all 48 states.", col: 3, row: 1 }];


export default function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <div className="bb-blog-001">
        <div className="bb-why-choose-us-001">
          WHY CHOOSE US
        </div>

        {whyChooseCards.map((card, idx) => {
          const isHovered = hoveredCard === idx;

          return (
            <div
              key={card.title}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bb-why-choose-us-002 ${
              leftClassByColumn[card.col]} ${
              topClassByRow[card.row]} ${
              isHovered ?
              "bb-why-choose-us-003" :
              "bb-why-choose-us-004"}`
              }>
              
              <div className={`bb-why-choose-us-005 ${isHovered ? "bb-testimonials-015" : "bb-why-choose-us-006"}`} />
              <div className="bb-why-choose-us-007">
                {card.title}
              </div>
              <div className="bb-why-choose-us-008">
                {card.desc}
              </div>
            </div>);

        })}
      </div>

      <section
        data-responsive-section="why"
        className="bb-why-choose-us-009">
        
        <div className="bb-blog-021">
          <h2 className="bb-why-choose-us-010">
            WHY CHOOSE US
          </h2>

          <div className="bb-testimonials-024">
            {whyChooseCards.map((card) =>
            <article
              key={card.title}
              className="bb-why-choose-us-011">
              
                <div className="bb-why-choose-us-012" />
                <div className="bb-why-choose-us-013">
                  <h3 className="bb-why-choose-us-014">
                    {card.title}
                  </h3>
                  <p className="bb-why-choose-us-015">
                    {card.desc}
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </>);

}
