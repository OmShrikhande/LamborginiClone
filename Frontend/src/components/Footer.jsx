import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

const footerSections = [
  {
    title: "MODELS",
    links: ["Revuelto", "Huracán", "Urus", "Limited Series", "Concept"]
  },
  {
    title: "BRAND",
    links: ["Museum", "Motorsport", "Ad Personam", "News", "Careers"]
  },
  {
    title: "OWNERSHIP",
    links: ["Financial Services", "Service", "Warranty", "Accessories", "Find a Dealer"]
  }
];

const socialLinks = [
  { icon: <Facebook size={20} />, url: "#" },
  { icon: <Twitter size={20} />, url: "#" },
  { icon: <Instagram size={20} />, url: "#" },
  { icon: <Youtube size={20} />, url: "#" },
  { icon: <Linkedin size={20} />, url: "#" }
];

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-lamborghini-orange text-black rounded-full flex items-center justify-center hover-glow z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp size={28} />
    </motion.button>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 relative">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center space-x-3">
              <img src="/ico/favicon-96x96.png" alt="Lamborghini Logo" className="w-14 h-14" />
              <span className="text-3xl font-bold gradient-text font-battlesbridge">
                LAMBORGHINI
              </span>
            </a>
            <p className="leading-relaxed">
              Automobili Lamborghini S.p.A., a subsidiary of the Audi Group, crafts the world's most coveted super sports cars in Sant'Agata Bolognese, Italy.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-white hover:bg-lamborghini-orange hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-lamborghini-orange transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Automobili Lamborghini S.p.A. All rights reserved. VAT no. IT 00591801204
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Legal</a>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
