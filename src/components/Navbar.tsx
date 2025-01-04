import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";
import webConfig from "../webConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "Discord", href: webConfig.discordServer },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <img
              src="/logo.png"
              alt="Cypher Logo"
              className="h-10 w-10 text-white"
            />
            <span className="ml-2 text-xl font-bold text-white">
              Cypher Bot
            </span> */}
            <img
              src="/banner.png"
              alt="Cypher Banner"
              className="h-20 w-30 text-white"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={webConfig.botInvite}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Invite Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#121212]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={webConfig.botInvite}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Invite Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
