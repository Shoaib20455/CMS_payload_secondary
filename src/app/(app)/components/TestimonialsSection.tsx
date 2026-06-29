"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

const testimonials: Testimonial[] = [
{
  name: "James Carter",
  role: "Owner Operator",
  avatar: "/Images/James Carter.png",
  text: "Consistent loads with better rates every week. I no longer waste time searching or negotiating."
},
{
  name: "Sophia Williams",
  role: "Fleet Owner",
  avatar: "/Images/Sophia Williams.png",
  text: "Dispatch runs smoothly without stress. My trucks stay loaded, and downtime has dropped significantly."
},
{
  name: "David Thompson",
  role: "Flatbed Driver",
  avatar: "/Images/David Thompson.png",
  text: "Strong rate negotiation and proper load planning. IÃ¢â‚¬â„¢m seeing higher RPM and fewer empty miles."
},
{
  name: "Emily Johnson",
  role: "New Authority",
  avatar: "/Images/Emily Johnson.png",
  text: "Got loads quickly after setup. Clear guidance and full support made the process simple."
}];


export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
    <div className="bb-blog-001">
      <div className="bb-testimonials-001">
        What Our Clients Say
      </div>

      <div
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          className="bb-testimonials-002">
          
        <Image className="bb-testimonials-003" src="/Images/Rectangle 41(right).png" alt="Prev" width={22} height={22} />
      </div>
      <div
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, 1))}
          className="bb-testimonials-004">
          
        <Image className="bb-testimonials-005" src="/Images/Rectangle 41(right).png" alt="Next" width={22} height={22} />
      </div>

      <div className="bb-testimonials-006">
        <div
            className={`bb-testimonials-007 ${
            currentSlide === 0 ? "bb-testimonials-008" : "bb-testimonials-009"}`
            }>
            
          {testimonials.map((client, idx) =>
            <div
              key={client.name}
              className={`bb-testimonials-010 ${
              idx === 0 ? "bb-testimonials-011" : "bb-testimonials-012"}`
              }>
              
              <Image className="bb-testimonials-013" src={client.avatar} alt={client.name} width={100} height={100} />
              <div className={`bb-testimonials-014 ${idx === 0 ? "bb-testimonials-015" : "bb-testimonials-016"}`} />

              <div className="bb-testimonials-017">
                {client.name}
              </div>
              <div className="bb-testimonials-018">
                {client.role}
              </div>

              <div className="bb-testimonials-019">
                {[...Array(5)].map((_, i) =>
                <Image key={i} className="bb-testimonials-020" src="/Images/Rectangle 278.png" alt="Star" width={14} height={14} />
                )}
              </div>

              <div className="bb-testimonials-021">
                &quot;{client.text}&quot;
              </div>
            </div>
            )}
        </div>
      </div>
    </div>

      <section
        data-responsive-section="testimonials"
        className="bb-testimonials-022">
        
        <div className="bb-blog-021">
          <h2 className="bb-testimonials-023">
            What Our Clients Say
          </h2>

          <div className="bb-testimonials-024">
            {testimonials.map((client, idx) =>
            <article
              key={client.name}
              className={`bb-testimonials-025 ${
              idx === 0 ? "bb-testimonials-011" : "bb-testimonials-012"}`
              }>
              
                <Image className="bb-testimonials-026" src={client.avatar} alt={client.name} width={100} height={100} />
                <div className={`bb-testimonials-027 ${idx === 0 ? "bb-testimonials-015" : "bb-testimonials-016"}`} />
                <h3 className="bb-testimonials-028">
                  {client.name}
                </h3>
                <div className="bb-testimonials-029">
                  {client.role}
                </div>
                <div className="bb-testimonials-030">
                  {[...Array(5)].map((_, i) =>
                <Image key={i} className="bb-testimonials-020" src="/Images/Rectangle 278.png" alt="Star" width={14} height={14} />
                )}
                </div>
                <p className="bb-testimonials-031">
                  &quot;{client.text}&quot;
                </p>
              </article>
            )}
          </div>
        </div>
      </section>
    </>);

}
