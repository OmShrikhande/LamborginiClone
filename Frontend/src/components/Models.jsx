import React, { useState } from 'react';

const Models = () => {
  const [activeModel, setActiveModel] = useState(0);

  const models = [
    {
      name: "REVUELTO",
      category: "Super Sports Car",
      power: "1015 HP",
      acceleration: "2.5s 0-100 km/h",
      topSpeed: "350+ km/h",
      price: "From €500,000",
      image: "/media/image/mainrevuelto.jpg",
      description: "The first super sports car powered by a new hybrid powertrain, combining a naturally aspirated V12 engine with three electric motors.",
      features: ["Hybrid V12 Engine", "All-Wheel Drive", "Carbon Fiber Monocoque", "Active Aerodynamics"]
    },
    {
      name: "HURACÁN",
      category: "Sports Car",
      power: "640 HP",
      acceleration: "3.2s 0-100 km/h",
      topSpeed: "325 km/h",
      price: "From €200,000",
      image: "/media/image/revuelto2.png",
      description: "The perfect balance of performance and everyday usability, featuring a naturally aspirated V10 engine.",
      features: ["V10 Engine", "Rear-Wheel Drive", "Dynamic Steering", "ANIMA Drive Modes"]
    },
    {
      name: "URUS",
      category: "Super SUV",
      power: "650 HP",
      acceleration: "3.6s 0-100 km/h",
      topSpeed: "305 km/h",
      price: "From €220,000",
      image: "/media/image/revuelto3.jpeg",
      description: "The world's first Super Sport Utility Vehicle, combining the soul of a super sports car with SUV functionality.",
      features: ["Twin-Turbo V8", "All-Terrain Capability", "Adaptive Air Suspension", "Torque Vectoring"]
    }
  ];

  return (
    <section id="models" className="py-20 bg-gradient-to-b from-black to-lamborghini-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold gradient-text font-battlesbridge mb-6">
            OUR MODELS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the complete range of Lamborghini super sports cars, each engineered to deliver uncompromising performance and unmistakable Italian style.
          </p>
        </div>

        {/* Model Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-black/50 rounded-full p-2 glass-effect">
            {models.map((model, index) => (
              <button
                key={index}
                onClick={() => setActiveModel(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeModel === index
                    ? 'bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black'
                    : 'text-white hover:text-lamborghini-orange'
                }`}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Model Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Model Image */}
          <div className="relative animate-zoom-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={models[activeModel].image}
                alt={models[activeModel].name}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-md rounded-xl p-6 glass-effect">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">{models[activeModel].power}</div>
                  <div className="text-sm text-gray-400">Power</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">{models[activeModel].acceleration}</div>
                  <div className="text-sm text-gray-400">0-100 km/h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Details */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="text-lamborghini-orange font-semibold text-lg tracking-widest uppercase">
                {models[activeModel].category}
              </span>
              <h3 className="text-5xl font-bold text-white font-battlesbridge mt-2 mb-4">
                {models[activeModel].name}
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                {models[activeModel].description}
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Top Speed</span>
                  <div className="text-xl font-semibold text-white">{models[activeModel].topSpeed}</div>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Starting Price</span>
                  <div className="text-xl font-semibold gradient-text">{models[activeModel].price}</div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-gray-400 text-sm">Key Features</span>
                {models[activeModel].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lamborghini-orange rounded-full"></div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold hover-glow transition-all duration-300">
                Configure & Price
              </button>
              <button className="border-2 border-lamborghini-orange text-lamborghini-orange px-8 py-4 rounded-full font-semibold hover:bg-lamborghini-orange hover:text-black transition-all duration-300">
                Request Test Drive
              </button>
            </div>
          </div>
        </div>

        {/* Model Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeModel === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveModel(index)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-xl font-bold text-white font-battlesbridge">{model.name}</h4>
                  <p className="text-lamborghini-orange text-sm">{model.category}</p>
                </div>
                {activeModel === index && (
                  <div className="absolute inset-0 border-2 border-lamborghini-orange rounded-xl"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;