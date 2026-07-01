"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "State", href: "/state" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];
const serviceDropdownItems = [
  { label: "Load Booking", href: "/service/load-booking" },
  { label: "Dedicated Truck Dispatcher", href: "/service/dedicated-truck-dispatcher" },
  { label: "Factoring", href: "/service/factoring" },
  { label: "Lease On", href: "/service/lease-on" },
];
const stateDropdownItems = [
  { label: "Ohio", href: "/state/stateDetails" },
  { label: "Indiana", href: "/state/indiana" },
  { label: "Texas", href: "/state/texas" },
  { label: "Florida", href: "/state/florida" },
  { label: "New York", href: "/state/new-york" },
  { label: "California", href: "/state/california" },
  { label: "Kentucky", href: "/state/kentucky" },
  { label: "Illinois", href: "/state/illinois" },
];
function isNavItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_0.0625rem_0.1875rem_rgba(0,0,0,0.05)]">
      <div className="relative mx-auto hidden h-20 w-[calc(100%_-_40px)] max-w-[1520px] lg:block">
        <Link href="/" aria-label="Box Truck Dispatching Home">
          <Image
            src="/Images/Rectangle 6 (1).png"
            alt="Box Truck Dispatching Logo"
            width={85}
            height={50}
            priority
            className="absolute left-0 top-[0.9375rem] h-[3.125rem] w-[5.3125rem] object-contain"
          />
        </Link>

        <nav
  className="absolute inset-y-0 left-28 right-52 flex items-center justify-center gap-5 xl:gap-8 2xl:gap-[3.125rem]"
  aria-label="Primary navigation"
>
  {navItems.map(({ label, href }) => {
    const isActive = isNavItemActive(pathname, href);

    const dropdownItems =
      label === "Service"
        ? serviceDropdownItems
        : label === "State"
          ? stateDropdownItems
          : null;

    if (dropdownItems) {
      return (
        <div key={href} className="group relative flex h-full items-center">
          <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-bold leading-[1.5625rem] no-underline transition-colors duration-200 ${
              isActive
                ? "text-[#FE8F02]"
                : "text-[#111827] hover:text-[#FE8F02]"
            }`}
          >
            <span>{label}</span>

            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="pointer-events-none absolute left-1/2 top-full w-[280px] -translate-x-1/2 translate-y-3 rounded-[10px] border border-[#E5E7EB] bg-white p-3 opacity-0 shadow-[0_16px_36px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <div className="absolute -top-3 left-0 h-3 w-full" />

            {dropdownItems.map((item) => {
              const isDropdownActive = isNavItemActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-[7px] px-4 py-3 font-[family-name:var(--font-dm-sans)] text-[16px] font-semibold no-underline transition-all duration-200 ${
                    isDropdownActive
                      ? "bg-[#FFF4E5] text-[#FE8F02]"
                      : "text-[#111827] hover:bg-[#FFF4E5] hover:text-[#FE8F02]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={href}
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`font-[family-name:var(--font-dm-sans)] text-[1.125rem] font-bold leading-[1.5625rem] no-underline transition-colors duration-200 ${
          isActive
            ? "text-[#FE8F02]"
            : "text-[#111827] hover:text-[#FE8F02]"
        }`}
      >
        {label}
      </Link>
    );
  })}
</nav>

        <Link
          href="/contact"
          className="absolute right-0 top-[0.9375rem] inline-flex h-[3.125rem] w-[11.3125rem] items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] font-[family-name:var(--font-outfit)] text-[1.125rem] font-medium text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95"
        >
          Schedule a Call
        </Link>
      </div>

      <div className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:hidden">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Box Truck Dispatching Home"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/Images/Rectangle 6 (1).png"
            alt="Box Truck Dispatching Logo"
            width={85}
            height={50}
            priority
            className="h-[2.625rem] w-[4.5rem] object-contain"
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[0.3125rem] border border-[#E5E7EB] bg-white text-[#111827] transition-colors hover:border-[#FE8F02] hover:text-[#FE8F02]"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-[0.5625rem] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[0.5625rem] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-[1.125rem] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-[0.5625rem] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute left-0 top-16 w-screen overflow-hidden bg-white shadow-[0_0.75rem_1.5rem_rgba(15,23,42,0.08)] transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex w-full flex-col gap-1 px-5 py-4 sm:px-8">
          {navItems.map(({ label, href }) => {
            const isActive = isNavItemActive(pathname, href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-[0.3125rem] px-3 py-3 font-[family-name:var(--font-dm-sans)] text-[1rem] font-bold leading-6 no-underline transition-colors ${
                  isActive
                    ? "bg-[#FFF4E5] text-[#FE8F02]"
                    : "text-[#111827] hover:bg-[#F8FAFC] hover:text-[#FE8F02]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="mt-3 h-[3.125rem] w-full rounded-[0.3125rem] border-none bg-[#FE8F02] font-[family-name:var(--font-outfit)] text-[1.125rem] font-medium text-white no-underline transition-colors hover:bg-[#E07D02] active:bg-[#C96F02] sm:w-[11.3125rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-full w-full items-center justify-center">
              Schedule a Call
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
