import React, { useState, useEffect } from 'react';

const Heritage = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timeline = [
    {
      year: "1963",
      title: "THE BEGINNING",
      description: "Ferruccio Lamborghini founded Automobili Lamborghini in Sant'Agata Bolognese",
      image: "/media/image/mainrevuelto.jpg",
      milestone: "Company Founded"
    },
    {
      year: "1966",
      title: "MIURA REVOLUTION",
      description: "The Miura P400 changed the supercar world forever with its mid-engine layout",
      image: "/media/image/revuelto2.png",
      milestone: "First Supercar"
    },
    {
      year: "1974",
      title: "COUNTACH ICON",
      description: "The Countach LP400 introduced the iconic wedge design language",
      image: "/media/image/revuelto3.jpeg",
      milestone: "Design Revolution"
    },
    {
      year: "2024",
      title: "HYBRID FUTURE",
      description: "The Revuelto marks a new era with hybrid V12 technology",
      image: "/media/image/mainrevuelto-removebg.png",
      milestone: "Electrification"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % timeline.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [timeline.length]);

  return (
    <section id="heritage" className="py-20 bg-gradient-to-b from-black via-lamborghini-gray to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-lamborghini-orange rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-lamborghini-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-lamborghini-orange/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold gradient-text font-battlesbridge mb-6">
            HERITAGE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over 60 years of automotive excellence, innovation, and Italian passion. 
            Discover the legendary moments that shaped the Lamborghini legacy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lamborghini-orange via-lamborghini-yellow to-lamborghini-orange"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 glass-effect hover-glow">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl font-bold gradient-text font-battlesbridge">
                          {item.year}
                        </span>
                        <span className="bg-lamborghini-orange text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {item.milestone}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-battlesbridge">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow rounded-full border-4 border-black z-10"></div>

                {/* Image */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "60+", label: "Years of Excellence", icon: "🏆" },
            { number: "200+", label: "Models Created", icon: "🚗" },
            { number: "50+", label: "Racing Victories", icon: "🏁" },
            { number: "1M+", label: "Dreams Fulfilled", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="bg-black/50 rounded-2xl p-8 glass-effect hover-glow">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold gradient-text font-battlesbridge mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-lamborghini-gray to-black rounded-3xl p-12 glass-effect">
            <h3 className="text-4xl font-bold gradient-text font-battlesbridge mb-6">
              BE PART OF THE LEGACY
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the exclusive community of Lamborghini owners and experience the heritage firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300">
                Explore Models
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Visit Museum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;