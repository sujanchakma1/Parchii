import { Menu, Search } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="container-custom">
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-primary">
              PARCHI
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-10 rounded-full bg-[#F5F5F5] px-12 py-5 shadow-sm">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[15px] font-medium text-heading transition hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-6 lg:flex">
            <button className="transition hover:text-primary">
              <Search size={26} className="cursor-pointer" strokeWidth={1.8} />
            </button>

            <button className="transition hover:text-primary">
              <RiMenu3Line size={36} className="cursor-pointer" />
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden">
            <RiMenu3Line size={30} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;