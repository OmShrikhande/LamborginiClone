import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Models",
      links: ["Revuelto", "Huracán", "Urus", "Limited Series", "Concept Cars"]
    },
    {
      title: "Ownership",
      links: ["Find a Dealer", "Service & Maintenance", "Warranty", "Genuine Parts", "Accessories"]
    },
    {
      title: "Experience",
      links: ["Driving Courses", "Factory Tours", "Museum", "Motorsport", "Events"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "News", "Sustainability", "Investor Relations"]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-lamborghini-gray to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold gradient-text font-battlesbridge mb-4">
                STAY CONNECTED
              </h3>
              <p className="text-xl text-gray-300">
                Get the latest news, exclusive content, and special offers from Lamborghini.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/50 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-lamborghini-orange transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold gradient-text font-battlesbridge">
                LAMBORGHINI
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Automobili Lamborghini S.p.A. - A subsidiary of Audi AG. 
              Crafting automotive legends since 1963 in Sant'Agata Bolognese, Italy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-2xl hover:bg-lamborghini-orange hover:scale-110 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-lamborghini-orange font-battlesbridge">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h5 className="font-semibold text-lamborghini-orange">Headquarters</h5>
              <p className="text-gray-300">
                Via Modena, 12<br />
                40019 Sant'Agata Bolognese<br />
                Bologna, Italy
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-lamborghini-orange">Customer Service</h5>
              <p className="text-gray-300">
                Phone: +39 051 681 7611<br />
                Email: info@lamborghini.com<br />
                Hours: Mon-Fri 9:00-18:00 CET
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-lamborghini-orange">Press Office</h5>
              <p className="text-gray-300">
                Phone: +39 051 681 7716<br />
                Email: press@lamborghini.com<br />
                Media Kit Available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Legal Notice</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Automobili Lamborghini S.p.A. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black rounded-full flex items-center justify-center hover-glow transition-all duration-300 z-50"
        title="Back to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;