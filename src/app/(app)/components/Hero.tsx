import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="bb-hero-001">

        {/* Background Texture */}
        <Image
          className="bb-hero-002"
          src="/Images/Rectangle 1071.png"
          alt="Background Texture"
          width={1920}
          height={700} />
        

{/* Main thick orange strip */}
<div className="bb-hero-003" />

{/* Thin orange strip */}
<div className="bb-hero-004" />

        {/* Heading */}
        <div className="bb-hero-005">
          <span className="bb-hero-006">
            Box Truck{" "}
          </span>
          <span className="bb-hero-007">
            Dispatch Service
          </span>
        </div>

        {/* Paragraph 1 */}
        <div className="bb-hero-008">
          Sick and tired of struggling with paperwork and hunting for decent freight rates in between trips? Our box truck dispatch service will relieve you of all the common headaches truck drivers are forced to encounter daily.
        </div>

        {/* Paragraph 2 */}
        <div className="bb-hero-009">
          No more clashes with greedy brokers or deadhead trips! Resolute Logistics box truck dispatch service will ensure that your box truck is always loaded and keeps generating profit for you instead of burning money as well as time and gas. You drive, we care!
        </div>

        {/* Button */}
        <button className="bb-hero-010">
          Start Trucking Dispatch
        </button>

        {/* Truck Image */}
        <Image
          className="bb-hero-011"
          src="/Images/Truck_Original_Sourced.webp"
          alt="White Box Truck Dispatch"
          width={1066}
          height={625} />
        
      </div>

      <section
        className="bb-hero-012">
        
        <Image
          className="bb-hero-013"
          src="/Images/Rectangle 1071.png"
          alt="Background Texture"
          width={1920}
          height={700} />
        
        <div className="bb-hero-023" />
        <div className="bb-hero-024" />

        <Image
          className="bb-hero-025"
          src="/Images/Truck_Original_Sourced.webp"
          alt="White Box Truck Dispatch"
          width={1650}
          height={953} />

        <div className="bb-hero-014">
          <div className="bb-hero-015">
            <h1 className="bb-hero-016">
              <span className="bb-hero-017">Box Truck </span>
              Dispatch Service
            </h1>

            <p className="bb-hero-018">
              Sick and tired of struggling with paperwork and hunting for decent freight rates in between trips? Our box truck dispatch service will relieve you of all the common headaches truck drivers are forced to encounter daily.
            </p>

            <p className="bb-hero-019">
              No more clashes with greedy brokers or deadhead trips! Resolute Logistics&apos; box truck dispatch service will ensure that your box truck is always loaded and keeps generating profit for you instead of burning money as well as time and gas. You drive, we care!
            </p>

            <button className="bb-hero-020">
              Start Trucking Dispatch
            </button>
          </div>
        </div>
      </section>
    </>);

}
