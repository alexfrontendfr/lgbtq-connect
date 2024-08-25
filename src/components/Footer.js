import React from "react";
import { motion } from "framer-motion";
import { Heart, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`relative ${
        darkMode ? "bg-gray-900" : "bg-indigo-900"
      } text-white overflow-hidden pt-20`}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={darkMode ? "#111827" : "#F3F4F6"}
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">LGBTQ+ Connect</h3>
            <p className="text-indigo-200 mb-6">
              Building a more inclusive and connected community.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          {[
            {
              title: "Quick Links",
              links: ["About Us", "Events", "Resources", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Accessibility"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-indigo-200 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-indigo-800 text-center">
          <p className="text-indigo-200">
            © {new Date().getFullYear()} LGBTQ+ Connect. All rights reserved.
          </p>
          <div className="mt-2 flex items-center justify-center text-indigo-200">
            Made with <Heart className="w-4 h-4 mx-1 text-pink-500" /> for our
            community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
