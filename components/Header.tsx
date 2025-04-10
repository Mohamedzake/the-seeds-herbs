// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import logo from "@/public/logo.svg";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const currentPath = usePathname();

//   const menuItems = [
//     { href: "/", label: "Home" },
//     {
//       href: "#",
//       label: "Products",
//       dropdown: true,
//       subItems: [
//         { href: "/products/seeds", label: "Seeds" },
//         { href: "/products/herbs", label: "Herbs" },
//         // { href: "/products/onion-garlic", label: "Onion & Garlic" },
//       ],
//     },
//     {
//       href: "#",
//       label: "Quality & Certificates",
//       dropdown: true,
//       subItems: [
//         { href: "/quality", label: "Quality" },
//         { href: "/certificates", label: "Certificates" },
//       ],
//     },
//     { href: "/about", label: "About" },
//     { href: "/careers", label: "Careers" },
//     { href: "/contactus", label: "Contact Us", isButton: true },
//   ];

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   const toggleDropdown = (label: string) => {
//     setActiveDropdown((prev) => (prev === label ? null : label));
//   };

//   return (
//     <header
//       className={`bg-white shadow-lg fixed top-4 py-2 px-4 w-[100%] lg:w-[95%] 2xl:w-[80%] mx-auto z-50 left-0 right-0 border ${
//         isMenuOpen ? "rounded-lg top-0" : "rounded-l-full rounded-r-full"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="logo">
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Logo"
//               className="object-contain xxs:h-8 xs:h-10 sm:h-12 md:h-12 xxs:w-40"
//             />
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button onClick={toggleMenu} className="lg:hidden text-gray-700">
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={
//                 isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//               }
//             />
//           </svg>
//         </button>
//         {/* Desktop nav */}
//         <div className="links hidden lg:flex">
//           <nav className="hidden lg:flex items-center space-x-2">
//             {menuItems.map((item) => (
//               <div key={item.href} className="relative group">
//                 <Link
//                   href={item.href}
//                   className={`flex items-center px-4 py-2 text-nowrap ${
//                     currentPath === item.href
//                       ? "text-primary-green font-bold"
//                       : "text-gray-700"
//                   } hover:text-primary-green duration-200 transition-all ${
//                     item.isButton
//                       ? "bg-primary-green py-2 px-12 md:px-12 md:py-2 md:text-lg hover:text-green border-2 border-primary-green hover:bg-white text-white rounded-full"
//                       : ""
//                   }`}
//                 >
//                   {item.label}
//                   {item.dropdown && <span className="ml-1 text-sm">˅</span>}
//                 </Link>

//                 {item.dropdown && (
//                   <div className="absolute left-0 top-full mt-1 w-48 bg-gray-100 shadow-md rounded-lg py-2 z-20 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
//                     {item.subItems?.map((subItem) => (
//                       <Link
//                         key={subItem.href}
//                         href={subItem.href}
//                         className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Mobile nav */}
//       {isMenuOpen && (
//         <nav className="flex flex-col gap-y-4 py-4 text-start px-4 lg:hidden">
//           {menuItems.map((item) => (
//             <div key={item.href}>
//               <div
//                 onClick={() => {
//                   if (item.dropdown) {
//                     toggleDropdown(item.label);
//                   } else {
//                     setIsMenuOpen(false);
//                   }
//                 }}
//                 className={`flex  justify-center items-center cursor-pointer ${
//                   item.isButton
//                     ? "bg-primary-green hidden py-2 px-12 md:px-12 md:py-2 md:text-lg hover:text-green border-2 border-primary-green hover:bg-white text-white rounded-full"
//                     : ""
//                 }`}
//               >
//                 <Link
//                   href={item.href}
//                   className={`block w-full ${
//                     currentPath === item.href
//                       ? "text-primary-green font-bold"
//                       : item.isButton
//                       ? "text-white w-auto text-2xl hidden"
//                       : "text-gray-700"
//                   } hover:text-primary-green duration-200 transition-all py-2`}
//                   onClick={() => {
//                     if (!item.dropdown) {
//                       setIsMenuOpen(false);
//                     }
//                   }}
//                 >
//                   {item.label}
//                 </Link>

//                 {item.dropdown && (
//                   <span className="text-sm text-gray-600 flex justify-end">
//                     {activeDropdown === item.label ? "▲" : "▼"}
//                   </span>
//                 )}
//               </div>

//               {item.dropdown && activeDropdown === item.label && (
//                 <div className="bg-gray-100 rounded-lg shadow-md my-1 py-2 px-4">
//                   {item.subItems?.map((subItem) => (
//                     <Link
//                       key={subItem.href}
//                       href={subItem.href}
//                       className={`block py-2 text-gray-800 hover:bg-gray-200 rounded px-2 ${
//                         currentPath === subItem.href
//                           ? "text-primary-green font-bold"
//                           : ""
//                       }`}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {subItem.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           {/* Contact Us centered */}
//           <div className="flex justify-center items-center">
//             <div className="flex justify-center items-center w-52">
//               <Link
//                 href="/contactus"
//                 className="w-full bg-primary-green py-4  text-2xl hover:text-green border-2 border-primary-green hover:bg-white text-white rounded-full text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }
// ----------------
// ================
//
//

// =================
// =================
// ================
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo-1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
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

  const handleDropdownHover = (label: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 200);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          {/* <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link> */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Logo" className="h-20 w-20 " priority />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleDropdownHover(item.label)
                }
                onMouseLeave={handleDropdownLeave}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        currentPath === item.href
                          ? "text-emerald-600"
                          : "text-gray-700 hover:text-emerald-600"
                      }`}
                    >
                      {item.label}
                      <span className="text-xs transform transition-transform duration-200">
                        {activeDropdown === item.label ? "▲" : "▼"}
                      </span>
                    </Link>

                    {activeDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-1 w-48 origin-top-right rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block rounded-md px-4 py-2.5 text-sm ${
                              currentPath === subItem.href
                                ? "bg-emerald-50 text-emerald-600"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      currentPath === item.href
                        ? "text-emerald-600"
                        : `text-gray-700 ${
                            item.isButton ? "" : "hover:text-emerald-600"
                          }`
                    } ${
                      item.isButton &&
                      "bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 ml-4"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 rounded-lg hover:bg-gray-50"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex h-16 items-center justify-between px-4 bg-white border-b">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto"
                  onClick={() => setIsMenuOpen(false)}
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-emerald-600"
              >
                ✕
              </button>
            </div>

            <nav className="px-4 py-6 space-y-4 bg-white">
              {menuItems
                .filter((item) => !item.isButton)
                .map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div
                      onClick={() =>
                        item.dropdown &&
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                    >
                      <Link
                        href={item.href}
                        className={`flex-1 text-base ${
                          currentPath === item.href
                            ? "text-emerald-600 font-semibold"
                            : "text-gray-900"
                        }`}
                        onClick={(e) => {
                          if (!item.dropdown) {
                            setIsMenuOpen(false);
                          } else {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <span className="text-gray-500 text-sm">
                          {activeDropdown === item.label ? "▲" : "▼"}
                        </span>
                      )}
                    </div>

                    {item.dropdown && activeDropdown === item.label && (
                      <div className="ml-4 space-y-2 bg-gray-50 rounded-lg p-2">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block p-3 text-sm rounded-lg ${
                              currentPath === subItem.href
                                ? "bg-emerald-100 text-emerald-600"
                                : "text-gray-700 hover:bg-gray-100"
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

            <div className="px-4 py-6 border-t border-gray-100 bg-white">
              <Link
                href="/contactus"
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
