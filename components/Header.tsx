"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const currentPath = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    {
      href: "#",
      label: "Products",
      dropdown: true,
      subItems: [
        { href: "/products/seeds", label: "Seeds" },
        { href: "/products/herbs", label: "Herbs" },
        { href: "/products/onion-garlic", label: "Onion & Garlic" },
      ],
    },
    {
      href: "#",
      label: "Quality & Certificates",
      dropdown: true,
      subItems: [
        { href: "/quality", label: "Quality" },
        { href: "/certificates", label: "Certificates" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contactus", label: "Contact Us", isButton: true },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`bg-white shadow-lg fixed top-4 py-2 px-4 w-[80%] lg:w-[95%] 2xl:w-[80%] mx-auto z-50 left-0 right-0 border ${
        isMenuOpen ? "rounded-lg" : "rounded-l-full rounded-r-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="object-contain xxs:h-8 xs:h-10 sm:h-12 md:h-12 xxs:w-40"
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="block lg:hidden ps-6" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="5 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Desktop nav */}
        <div className="links hidden lg:flex">
          <nav className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-nowrap ${
                    currentPath === item.href
                      ? "text-primary-green font-bold"
                      : "text-gray-700"
                  } hover:text-primary-green duration-200 transition-all ${
                    item.isButton
                      ? "bg-primary-green text-white rounded-full px-6 py-2 ms-4"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.dropdown && <span className="ml-1 text-sm">˅</span>}
                </Link>

                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-1 w-48 bg-gray-100 shadow-md rounded-lg py-2 z-20 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-y-4 py-4 text-start px-4 lg:hidden">
          {menuItems.map((item) => (
            <div key={item.href}>
              <div
                onClick={() => {
                  if (item.dropdown) {
                    toggleDropdown(item.label);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className={`flex justify-between items-center cursor-pointer ${
                  item.isButton
                    ? "bg-primary-green text-white rounded-full px-6 py-2 mt-2"
                    : ""
                }`}
              >
                <Link
                  href={item.href}
                  className={`block w-full ${
                    currentPath === item.href
                      ? "text-primary-green font-bold"
                      : "text-gray-700"
                  } hover:text-primary-green duration-200 transition-all py-2`}
                  onClick={() => {
                    if (!item.dropdown) {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <span className="text-sm text-gray-600 ml-2">˅</span>
                )}
              </div>

              {item.dropdown && activeDropdown === item.label && (
                <div className="bg-gray-100 rounded-lg shadow-md my-1 py-2 px-4">
                  {item.subItems?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block py-2 text-gray-800 hover:bg-gray-200 rounded px-2 ${
                        currentPath === subItem.href
                          ? "text-primary-green font-bold"
                          : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
