import { Link, UserPlus } from "lucide-react";
import webConfig from "../webConfig";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Cypher Bot Logo"
                className="h-10 w-10"
              />
              <span className="ml-2 text-xl font-bold">Cypher</span>
            </div>
            <p className="mt-4 text-gray-400">
              Enhance your Discord server with powerful moderation tools and
              engaging features.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={webConfig.botInvite}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Invite Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href={webConfig.discordServer}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <Link className="h-6 w-6" />
              </a>
              <a
                href={webConfig.botInvite}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Invite Me"
              >
                <UserPlus className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Glaxin Dev. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.glaxindev.xyz"
                className="text-gray-400 hover:text-white text-sm transition-colors hidden md:block"
              >
                Know More About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
