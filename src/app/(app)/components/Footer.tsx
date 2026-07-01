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

const locationAddress =
  "7901 4th St N # 21464, Saint Petersburg, Florida 33702, US";

const locationMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  locationAddress,
)}`;

const locationEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  locationAddress,
)}&output=embed`;

function FlowFooter() {
  return (
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

          <div className="bb-footer-025" aria-label="Social media links">
            <Link href="#facebook" className="bb-footer-026" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8.5V6.8c0-.8.5-1 1-1h2.5V2.1L14.1 2C10.7 2 9 4 9 6.7v1.8H6v4h3V22h5v-9.5h3.2l.5-4H14Z" />
              </svg>
            </Link>

            <Link href="#twitter" className="bb-footer-026" aria-label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.5 11.5 0 0 1 3.7 4.7a4 4 0 0 0 1.2 5.4c-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.7 3.3 4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1a4 4 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.2 11.5 11.5 0 0 0 19.7 8.1v-.5c.8-.5 1.6-1.1 2.3-1.7Z" />
              </svg>
            </Link>

            <Link href="#linkedin" className="bb-footer-026" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.2H2.7V21h3.8V8.2ZM4.6 2A2.3 2.3 0 1 0 4.6 6.6 2.3 2.3 0 0 0 4.6 2ZM21.3 13.7c0-3.9-2.1-5.8-4.9-5.8a4.3 4.3 0 0 0-3.9 2.1V8.2H8.7V21h3.8v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.8l.5-7.3Z" />
              </svg>
            </Link>

            <Link href="#instagram" className="bb-footer-026" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.3-2.3a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

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
              <div className="bb-footer-032">{locationAddress}</div>
            </div>
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
              <Link key={item.href} href={item.href} className="bb-footer-029">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="bb-footer-027">Location</h3>

          <div className="mt-4 w-full max-w-[32rem] overflow-hidden rounded-[0.75rem] border border-[#FE8F02]/40 bg-[#003951] lg:max-w-none">
                <iframe
                  title="Box Truck Dispatching Location"
                  src={locationEmbedUrl}
                  width="100%"
              height="210"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-0"
                />

                <Link
                  href={locationMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-[0.875rem] font-semibold leading-[1.25rem] text-white no-underline transition-colors duration-300 hover:text-[#FE8F02]"
                >
                  Open in Google Maps ↗
                </Link>
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
  );
}
