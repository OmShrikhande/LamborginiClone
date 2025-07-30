import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "VIRTUAL SHOWROOM",
      description: "Explore every detail of our supercars in stunning 360° virtual reality",
      icon: "🥽",
      features: ["360° Interior View", "Exterior Customization", "Real-time Configuration", "AR Experience"],
      image: "/media/image/mainrevuelto.jpg"
    },
    {
      title: "TRACK EXPERIENCE",
      description: "Feel the adrenaline rush on world-famous racing circuits",
      icon: "🏁",
      features: ["Professional Instruction", "Multiple Circuits", "Performance Analytics", "Video Recording"],
      image: "/media/image/revuelto2.png"
    },
    {
      title: "FACTORY TOUR",
      description: "Witness the birth of automotive legends in Sant'Agata Bolognese",
      icon: "🏭",
      features: ["Guided Tours", "Craftsman Workshops", "Museum Access", "Exclusive Merchandise"],
      image: "/media/image/revuelto3.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveExperience((prev) => (prev + 1) % experiences.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isVisible, experiences.length]);

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6600' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold gradient-text font-battlesbridge mb-6">
            EXPERIENCE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in the world of Lamborghini through exclusive experiences that go beyond driving.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeExperience === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveExperience(index)}
            >
              <div className="bg-gradient-to-br from-lamborghini-gray to-black rounded-2xl p-8 glass-effect hover-glow">
                <div className="text-6xl mb-4">{experience.icon}</div>
                <h3 className="text-2xl font-bold text-white font-battlesbridge mb-4">
                  {experience.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {experience.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lamborghini-orange rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>

                {activeExperience === index && (
                  <div className="absolute inset-0 border-2 border-lamborghini-orange rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Experience */}
        <div className="bg-gradient-to-r from-lamborghini-gray to-black rounded-3xl overflow-hidden glass-effect">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={experiences[activeExperience].image}
                alt={experiences[activeExperience].title}
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-12 flex flex-col justify-center">
              <div className="text-6xl mb-6">{experiences[activeExperience].icon}</div>
              <h3 className="text-4xl font-bold gradient-text font-battlesbridge mb-6">
                {experiences[activeExperience].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {experiences[activeExperience].description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {experiences[activeExperience].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-lamborghini-orange rounded-full"></div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300">
                  Book Experience
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Years of Excellence" },
            { number: "15,000+", label: "Cars Delivered Annually" },
            { number: "100+", label: "Countries Worldwide" },
            { number: "1,000+", label: "Authorized Dealers" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold gradient-text font-battlesbridge">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;