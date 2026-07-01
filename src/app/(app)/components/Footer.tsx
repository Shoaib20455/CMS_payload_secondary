import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <FlowFooter />;
}
const serviceLinks = [
  { label: "Load Booking", href: "/service/load-booking" },
  {
    label: "Dedicated Truck Dispatcher",
    href: "/service/dedicated-truck-dispatcher",
  },
  { label: "Factoring", href: "/service/factoring" },
  { label: "Lease On", href: "/service/lease-on" },
];
function FlowFooter() {
  return (
    <>
      <footer className="relative z-[30] mt-5 hidden h-[31.3125rem] w-full overflow-hidden bg-[#012F42] text-white min-[120rem]:block">
        <div className="relative mx-auto h-[31.3125rem] w-[120rem]">
          <Image
            className="absolute left-[15rem] top-[3.125rem] h-[5rem] w-[6.8125rem]"
            src="/Images/Rectangle 6.png"
            alt="Box Truck Dispatching Logo"
            width={109}
            height={80}
          />

          <div className="absolute left-[15rem] top-[9.375rem] h-[9rem] w-[21.0625rem] font-[family-name:var(--font-poppins)] text-[0.875rem] font-medium leading-[1.5rem] text-white">
            Box Truck Dispatching offers reliable and profit driven truck
            dispatching services across the United States. We help owner
            operators and fleets secure high-paying loads, reduce deadhead
            miles, and streamline operations for maximum efficiency.
          </div>

          {[
            <svg
              key="facebook"
              className="h-[1.125rem] w-[1.125rem]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>,
            <svg
              key="twitter"
              className="h-[1.125rem] w-[1.125rem]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>,
            <svg
              key="linkedin"
              className="h-[1.125rem] w-[1.125rem]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>,
            <svg
              key="instagram"
              className="h-[1.125rem] w-[1.125rem]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>,
          ].map((icon, idx) => {
            const leftClasses = [
              "left-[15rem]",
              "left-[18.1875rem]",
              "left-[21.375rem]",
              "left-[24.5625rem]",
            ];

            return (
              <div
                key={idx}
                className={`absolute top-[19.75rem] flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-[0.3125rem] bg-[#003951] text-white transition-all duration-300 hover:bg-[#FE8F02]/10 hover:text-[#FE8F02] ${leftClasses[idx]}`}
              >
                {icon}
              </div>
            );
          })}

          <div className="absolute left-[46.5rem] top-[3.125rem] font-[family-name:var(--font-outfit)] text-[1.375rem] font-semibold leading-[1.875rem] text-[#FE8F02]">
            Quick Links
          </div>

          <div className="absolute left-[46.5rem] top-[6.25rem] flex flex-col gap-[0.9375rem]">
            {[
              "Home",
              "About",
              "Service",
              "State",
              "Pricing",
              "Contact",
              "Blog",
            ].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="cursor-pointer font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-medium leading-[1.25rem] text-white no-underline transition-colors duration-200 hover:text-[#FE8F02]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="absolute left-[65.0625rem] top-[3.125rem] font-[family-name:var(--font-outfit)] text-[1.375rem] font-semibold leading-[1.875rem] text-[#FE8F02]">
            Our Services
          </div>

          <div className="absolute left-[65.0625rem] top-[6.25rem] flex flex-col gap-[0.9375rem]">
            {serviceLinks
              .filter((item) =>
                [
                  "Load Booking",
                  "Dedicated Truck Dispatcher",
                  "Factoring",
                  "Lease On",
                ].includes(item.label),
              )
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="cursor-pointer font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-medium leading-[1.25rem] text-white no-underline transition-colors duration-200 hover:text-[#FE8F02]"
                >
                  {item.label}
                </Link>
              ))}
          </div>

          <div className="absolute left-[92.6875rem] top-[3.125rem] font-[family-name:var(--font-outfit)] text-[1.375rem] font-semibold leading-[1.875rem] text-[#FE8F02]">
            Get In Touch
          </div>

          <svg
            className="absolute left-[92.6875rem] top-[6.25rem] h-[1.125rem] w-[1.125rem] text-[#FE8F02]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div className="absolute left-[94.25rem] top-[6.375rem] font-[family-name:var(--font-dm-sans)] text-[0.875rem] font-semibold leading-[0.875rem] text-white">
            Phone
          </div>
          <div className="absolute left-[92.6875rem] top-[8rem] font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-medium leading-[1.25rem] text-white">
            (555) 123-4567
          </div>

          <svg
            className="absolute left-[92.6875rem] top-[10.625rem] h-[1.125rem] w-[1.125rem] text-[#FE8F02]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <div className="absolute left-[94.25rem] top-[10.75rem] font-[family-name:var(--font-dm-sans)] text-[0.875rem] font-semibold leading-[0.875rem] text-white">
            Email
          </div>
          <div className="absolute left-[92.6875rem] top-[12.375rem] font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-medium leading-[1.25rem] text-white">
            info@avenuemh.com
          </div>

          <svg
            className="absolute left-[92.6875rem] top-[15rem] h-[1.125rem] w-[1.125rem] text-[#FE8F02]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className="absolute left-[94.25rem] top-[15.125rem] font-[family-name:var(--font-dm-sans)] text-[0.875rem] font-semibold leading-[0.875rem] text-white">
            Location
          </div>
          <div className="absolute left-[92.6875rem] top-[16.75rem] font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-medium leading-[1.25rem] text-white">
            Serving All 48 States
          </div>

          <div className="absolute left-0 top-[25.9375rem] h-[0.0625rem] w-[120rem] bg-[#003951]" />

          <div className="absolute left-[15rem] top-[27.875rem]">
            <span className="font-[family-name:var(--font-dm-sans)] text-[0.875rem] font-normal leading-[1.5625rem] text-white">
              © 2026, Box Truck Dispatching, Design &amp; Developed By{" "}
            </span>
            <span className="font-[family-name:var(--font-dm-sans)] text-[0.875rem] font-bold leading-[1.5625rem] text-white">
              BitBlazeTec
            </span>
          </div>

          <div className="absolute left-[87.625rem] top-[27.875rem] flex gap-[1.875rem]">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (policy) => (
                <Link
                  key={policy}
                  href="#policy"
                  className="cursor-pointer font-[family-name:var(--font-dm-sans)] text-[0.875rem] font-normal leading-[1.5625rem] text-white no-underline transition-colors duration-200 hover:text-[#FE8F02]"
                >
                  {policy}
                </Link>
              ),
            )}
          </div>
        </div>
      </footer>

      <footer data-responsive-section="footer" className="bb-footer-021">
        <div className="bb-footer-022">
          <div>
            <Image
              className="bb-footer-023"
              src="/Images/Rectangle 6.png"
              alt="Box Truck Dispatching Logo"
              width={109}
              height={80}
            />

            <p className="bb-footer-024">
              Box Truck Dispatching offers reliable and profit driven truck
              dispatching services across the United States.
            </p>

            <div className="bb-footer-025">
              {["f", "t", "in", "ig"].map((item) => (
                <div key={item} className="bb-footer-026">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="bb-footer-027">Quick Links</h3>

            <div className="bb-footer-028">
              {["Home", "About", "Service", "States", "Blog", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="bb-footer-029"
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="bb-footer-027">Our Services</h3>

            <div className="bb-footer-028">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bb-footer-029"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="bb-footer-027">Get In Touch</h3>

            <div className="bb-footer-030">
              <div>
                <div className="bb-footer-031">Phone</div>
                <div className="bb-footer-032">(555) 123-4567</div>
              </div>

              <div>
                <div className="bb-footer-031">Email</div>
                <div className="bb-footer-032">info@avenuemh.com</div>
              </div>

              <div>
                <div className="bb-footer-031">Location</div>
                <div className="bb-footer-032">Serving All 48 States</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bb-footer-033">
          <div>
            © 2026, Box Truck Dispatching, Design &amp; Developed By{" "}
            <span className="bb-footer-034">BitBlazeTec</span>
          </div>

          <div className="bb-footer-035">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (policy) => (
                <Link key={policy} href="#policy" className="bb-footer-036">
                  {policy}
                </Link>
              ),
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
