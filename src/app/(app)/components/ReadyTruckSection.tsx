import Image from "next/image";

type ReadyTruckSectionProps = {
  variant?: "absolute" | "flow";
};

export default function ReadyTruckSection({
  variant = "absolute",
}: ReadyTruckSectionProps) {
  if (variant === "flow") {
    return (
      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[10px] bg-[#012F42]">
        <div className="grid min-h-[585px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-[50px]">
            <h2 className="font-[family-name:var(--font-outfit)] text-[34px] font-bold leading-[44px] text-[#FE8F02] sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[60px]">
              Your Truck Is Ready.
            </h2>

            <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-[24px] font-bold leading-[34px] text-white sm:text-[28px] sm:leading-[38px] lg:text-[30px] lg:leading-10">
              Are You Maximizing Every Mile?
            </h3>

            <p className="mt-5 max-w-[636px] font-[family-name:var(--font-dm-sans)] text-[16px] font-normal leading-[26px] text-white sm:text-[18px] sm:leading-7">
              Every empty mile costs money. Let our dispatch experts find
              better loads, negotiate higher rates, and keep your box truck
              moving profitably across all 48 states.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#E07D02] active:scale-95">
                Start Dispatching Today
              </button>

              <button className="h-12 rounded-[5px] border border-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium text-[#FE8F02] transition-all duration-300 hover:scale-[1.03] hover:bg-[#FE8F02] hover:text-white active:scale-95">
                Talk to a Dispatcher
              </button>
            </div>
          </div>

          <Image
            src="/Images/Rectangle 1117.webp"
            alt="Ready Truck Black"
            width={760}
            height={585}
            className="h-full min-h-[360px] w-full object-cover lg:h-[585px]"
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="bb-blog-001">
        <div className="bb-ready-truck-001" />

        <div className="bb-ready-truck-002">Your Truck Is Ready.</div>

        <div className="bb-ready-truck-003">
          Are You Maximizing Every Mile?
        </div>

        <div className="bb-ready-truck-004">
          Every empty mile costs money. Let our dispatch experts find better
          loads, negotiate higher rates, and keep your box truck moving
          profitably across all 48 states.
        </div>

        <button className="bb-ready-truck-005">
          Start Dispatching Today
        </button>

        <button className="bb-ready-truck-006">
          Talk to a Dispatcher
        </button>

        <Image
          className="bb-ready-truck-007"
          src="/Images/Rectangle 1117.webp"
          alt="Ready Truck Black"
          width={760}
          height={585}
        />
      </div>

      <section data-responsive-section="ready-truck" className="bb-ready-truck-008">
        <div className="bb-ready-truck-009">
          <div className="bb-ready-truck-010">
            <h2 className="bb-ready-truck-011">Your Truck Is Ready.</h2>

            <h3 className="bb-ready-truck-012">
              Are You Maximizing Every Mile?
            </h3>

            <p className="bb-ready-truck-013">
              Every empty mile costs money. Let our dispatch experts find better
              loads, negotiate higher rates, and keep your box truck moving
              profitably across all 48 states.
            </p>

            <div className="bb-ready-truck-014">
              <button className="bb-ready-truck-015">
                Start Dispatching Today
              </button>

              <button className="bb-ready-truck-016">
                Talk to a Dispatcher
              </button>
            </div>
          </div>

          <Image
            className="bb-ready-truck-017"
            src="/Images/Rectangle 1117.webp"
            alt="Ready Truck Black"
            width={760}
            height={585}
          />
        </div>
      </section>
    </>
  );
}
