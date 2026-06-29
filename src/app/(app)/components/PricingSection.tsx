import Image from "next/image";

const includedItems = [
"Dedicated Dispatcher",
"Load Search & Booking",
"Rate Negotiation",
"Broker Communication",
"Route Planning Support",
"Rate Confirmations",
"Setup Packet Assistance",
"Detention & TONU Support",
"Paperwork Management",
"24/7 Dispatch Support"];


const statItems = [
{ label: "Average Weekly Gross", value: "$5,500 - $7,500+" },
{ label: "Average Rate Per Mile", value: "$1.50 - $2.20+" }];


export default function PricingSection() {
  return (
    <>
      <div className="bb-blog-001">
        {/* Section: Affordable Pricing for Box Truck Owners */}

        <div className="bb-pricing-001" />

        <Image className="bb-pricing-002" src="/Images/Rectangle 1120.webp" alt="6% Pricing Plan" width={617} height={731} />
        <div className="bb-pricing-003" />

        <div className="bb-pricing-004">
          Box Truck Dispatching
        </div>

        <div className="bb-pricing-005">
          6%
        </div>

        <div className="bb-pricing-006">
          Per Load Revenue
        </div>

        <div className="bb-pricing-007">
          For owner-operators and fleet owners who want consistent freight, higher-paying loads, and a dedicated dispatch team.
        </div>

        {/* Pricing Info Right Column */}

        <div className="bb-pricing-008">
          Affordable Pricing for Box Truck Owners
        </div>

        <div className="bb-pricing-009">
          Simple. Transparent. Results-Driven.
        </div>

        <div className="bb-pricing-010">
          No setup fees. No monthly subscriptions. No long-term contract
        </div>

        <div className="bb-pricing-011">
          WHAT&apos;S INCLUDED
        </div>

        {/* Pricing Checklists Grid */}

        <div className="bb-pricing-012">
          <div className="bb-pricing-013">
            {includedItems.slice(0, 5).map((incl) =>
            <div key={incl} className="bb-pricing-014">
                <Image className="bb-pricing-015" src="/Images/Rectangle 1122.png" alt="Checked" width={18} height={18} />
                <span className="bb-pricing-016">{incl}</span>
              </div>
            )}
          </div>

          <div className="bb-pricing-013">
            {includedItems.slice(5).map((incl) =>
            <div key={incl} className="bb-pricing-014">
                <Image className="bb-pricing-015" src="/Images/Rectangle 1122.png" alt="Checked" width={18} height={18} />
                <span className="bb-pricing-016">{incl}</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Revenue Stats */}

        <div className="bb-pricing-017">
          Average Weekly Gross
        </div>

        <div className="bb-pricing-018">
          $5,500 - $7,500+
        </div>

        <div className="bb-pricing-019">
          Average Rate Per Mile
        </div>

        <div className="bb-pricing-020">
          $1.50 - $2.20+
        </div>

        <button
          className="bb-pricing-021">
          
          Start Dispatching Today
        </button>
      </div>

      <section
        data-responsive-section="pricing"
        className="bb-pricing-022">
        
        <div className="bb-pricing-023">
          <div className="bb-pricing-024">
            <Image
              className="bb-intro-sections-031"
              src="/Images/Rectangle 1120.webp"
              alt="6% Pricing Plan"
              width={617}
              height={731} />
            
            <div className="bb-pricing-025" />
            <div className="bb-pricing-026">
              <h2 className="bb-pricing-027">
                Box Truck Dispatching
              </h2>
              <div className="bb-pricing-028">
                6%
              </div>
              <div className="bb-pricing-029">
                Per Load Revenue
              </div>
              <p className="bb-pricing-030">
                For owner-operators and fleet owners who want consistent freight, higher-paying loads, and a dedicated dispatch team.
              </p>
            </div>
          </div>

          <div className="bb-pricing-031">
            <h2 className="bb-pricing-032">
              Affordable Pricing for Box Truck Owners
            </h2>

            <h3 className="bb-pricing-033">
              Simple. Transparent. Results-Driven.
            </h3>
            <p className="bb-pricing-034">
              No setup fees. No monthly subscriptions. No long-term contract
            </p>

            <h3 className="bb-pricing-035">
              WHAT&apos;S INCLUDED
            </h3>

            <div className="bb-pricing-036">
              {includedItems.map((incl) =>
              <div key={incl} className="bb-pricing-037">
                  <Image className="bb-pricing-038" src="/Images/Rectangle 1122.png" alt="Checked" width={18} height={18} />
                  <span className="bb-pricing-039">
                    {incl}
                  </span>
                </div>
              )}
            </div>

            <div className="bb-pricing-040">
              {statItems.map((stat) =>
              <div key={stat.label} className="bb-pricing-041">
                  <div className="bb-pricing-042">
                    {stat.label}
                  </div>
                  <div className="bb-pricing-043">
                    {stat.value}
                  </div>
                </div>
              )}
            </div>

            <button className="bb-pricing-044">
              Start Dispatching Today
            </button>
          </div>
        </div>
      </section>
    </>);

}
