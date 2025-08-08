import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'MODELS', href: '#models' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'HERITAGE', href: '#heritage' },
  { name: 'DEALERSHIPS', href: '#dealerships' },
  { name: 'MUSEUM', href: '#museum' },
];

const NavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative text-white font-semibold tracking-wider text-sm uppercase group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lamborghini-orange transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <img src="/ico/favicon-96x96.png" alt="Lamborghini Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold gradient-text font-battlesbridge hidden sm:block">
                LAMBORGHINI
              </span>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavItem key={item.name} href={item.href}>
                  {item.name}
                </NavItem>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden lg:block bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-6 py-2 rounded-full font-semibold hover-glow transition-all duration-300 transform hover:scale-105">
                CONFIGURE
              </button>
              <button
                className="lg:hidden text-white p-2 z-50"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.href} onClick={toggleMobileMenu}>
              {item.name}
            </NavItem>
          ))}
          <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300 transform hover:scale-105">
            CONFIGURE YOURS
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
