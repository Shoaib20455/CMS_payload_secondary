import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ContactInfoItem = {
  label: string;
  value: string;
  iconSrc?: string;
  iconAlt?: string;
  Icon?: SvgIcon;
};

type SocialLink = {
  label: string;
  href: string;
  iconSrc: string;
  bgSrc?: string;
};

type ContactInfoPanelProps = {
  title?: string;
  items: ContactInfoItem[];
  socialLinks?: SocialLink[];
  socialTitle?: string;
  benefits?: string[];
  benefitsTitle?: string;
  benefitsPosition?: "below" | "right";
  className?: string;
};

export function ContactInfoPanel({
  title = "Contact Information",
  items,
  socialLinks = [],
  socialTitle = "Connect with me",
  benefits = [],
  benefitsTitle = "Why Work With Us?",
  benefitsPosition = "below",
  className = "",
}: ContactInfoPanelProps) {
  const contactCard = (
    <div className="rounded-[10px] bg-[#012F42] px-5 pb-7 pt-8 sm:px-10 sm:pb-8 sm:pt-12 lg:px-[50px] lg:pb-[38px] lg:pt-[32px]">
      <h2 className="font-[family-name:var(--font-outfit)] text-[26px] font-semibold leading-9 text-white sm:text-[30px] sm:leading-10">
        {title}
      </h2>

      <div className="mt-8 grid gap-6 lg:mt-10">
        {items.map((item) => {
          const Icon = item.Icon;

          return (
            <div
              key={`${item.label}-${item.value}`}
              className="group flex min-h-24 cursor-default items-center gap-4 rounded-[10px] bg-white/20 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.24] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] sm:gap-5 sm:p-5"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center">
                {Icon ? (
                  <Icon
                    aria-hidden="true"
                    className="h-10 w-10 text-[#FE8F02]"
                  />
                ) : item.iconSrc ? (
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt || ""}
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain"
                  />
                ) : null}
              </span>

              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-outfit)] text-[18px] font-semibold leading-7 text-white sm:text-[20px] sm:leading-8">
                  {item.label}
                </h3>

                <p className="mt-1 break-words font-[family-name:var(--font-dm-sans)] text-[15px] leading-6 text-white sm:text-[18px] sm:leading-7">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {socialLinks.length > 0 && (
        <>
          <h2 className="mt-10 font-[family-name:var(--font-outfit)] text-[26px] font-semibold leading-9 text-white sm:mt-12 sm:text-[30px] sm:leading-10 lg:mt-[74px]">
            {socialTitle}
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-5 sm:gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex h-11 w-11 items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:opacity-85"
                aria-label={`Follow us on ${item.label}`}
              >
                {item.bgSrc ? (
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <Image
                      src={item.bgSrc}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-contain"
                      aria-hidden="true"
                    />

                    <Image
                      src={item.iconSrc}
                      alt=""
                      width={18}
                      height={18}
                      className="relative z-10 h-[18px] w-[18px] object-contain"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );

  const benefitsCard =
    benefits.length > 0 ? (
      <div
        className={
          benefitsPosition === "right"
            ? "rounded-[10px] border border-[#A3A3A3] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(1,47,66,0.14)] sm:p-8"
            : "mt-[30px] rounded-[10px] border border-[#A3A3A3] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(1,47,66,0.14)] sm:p-8"
        }
      >
        <h2 className="font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
          {benefitsTitle}
        </h2>

        <ul className="mt-6 grid gap-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 font-[family-name:var(--font-dm-sans)] text-[16px] leading-6 text-[#5B6472]"
            >
              <CheckIcon />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    ) : null;

  if (benefitsPosition === "right") {
    return (
      <div
        className={`grid gap-8 lg:grid-cols-[626px_1fr] lg:items-start lg:gap-[176px] ${className}`}
      >
        {contactCard}
        {benefitsCard}
      </div>
    );
  }

  return (
    <div className={className}>
      {contactCard}
      {benefitsCard}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#FE8F02]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
