import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { Search, X } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../../../public/logo.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container-custom">
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Parchii ERP" className="h-10 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-10 rounded-full bg-[#F7F7F7] px-12 py-5 shadow-sm">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative text-[15px] font-medium transition-all ${
                      isActive
                        ? "text-primary"
                        : "text-heading hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <button className="hidden transition hover:text-primary lg:block">
              <Search size={24} strokeWidth={1.8} />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full cursor-pointer p-2 transition hover:bg-gray-100"
            >
              {menuOpen ? (
                <X size={32} />
              ) : (
                <RiMenu3Line size={32} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Dropdown */}
      <div
        ref={menuRef}
        className={`fixed right-6 top-24 z-50 w-[320px] rounded-3xl border border-white/30 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300
        ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 pointer-events-none opacity-0"
        }`}
      >
        <div className="space-y-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center rounded px-5 py-4 text-lg font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-heading hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="my-6 border-t border-gray-200" />

        <button className="w-full rounded bg-heading py-4 font-medium text-white transition hover:bg-primary">
          Request A Demo
        </button>
      </div>
    </header>
  );
};

export default Navbar;