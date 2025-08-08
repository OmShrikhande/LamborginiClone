import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Gauge, DollarSign } from 'lucide-react';

const models = [
  {
    name: "REVUELTO",
    category: "HPEV - High Performance Electrified Vehicle",
    power: "1015 CV",
    acceleration: "2.5s",
    topSpeed: ">350 km/h",
    price: "From $608,358",
    image: "/media/image/mainrevuelto-removebg.png",
    description: "The Revuelto is the beginning of a new era, the first super sports car with a V12 hybrid plug-in engine.",
    features: ["Hybrid V12 Engine", "8-speed dual-clutch", "Carbon Fiber Monocoque", "Active Aerodynamics"]
  },
  {
    name: "HURACÁN",
    category: "SUPER SPORTS CAR",
    power: "640 CV",
    acceleration: "2.9s",
    topSpeed: "325 km/h",
    price: "From $249,865",
    image: "/media/image/revuelto2.png",
    description: "The Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air.",
    features: ["V10 Engine", "Rear-Wheel Drive", "Dynamic Steering", "ANIMA Drive Modes"]
  },
  {
    name: "URUS",
    category: "SUPER SUV",
    power: "666 CV",
    acceleration: "3.3s",
    topSpeed: "305 km/h",
    price: "From $237,848",
    image: "/media/image/revuelto3.jpeg",
    description: "The Urus is the world's first Super Sport Utility Vehicle, combining the soul of a super sports car with SUV functionality.",
    features: ["Twin-Turbo V8", "All-Terrain Capability", "Adaptive Air Suspension", "Torque Vectoring"]
  }
];

const ModelCard = ({ model, isActive, onClick }) => (
  <motion.div
    className={`relative group cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden ${isActive ? 'ring-4 ring-lamborghini-orange' : 'ring-2 ring-transparent'}`}
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    layout
  >
    <img
      src={model.image}
      alt={model.name}
      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-4 left-4 right-4">
      <h4 className="text-2xl font-bold text-white font-battlesbridge">{model.name}</h4>
      <p className="text-lamborghini-yellow text-sm uppercase tracking-wider">{model.category}</p>
    </div>
  </motion.div>
);

const Models = () => {
  const [activeModel, setActiveModel] = useState(0);
  const activeModelData = models[activeModel];

  return (
    <section id="models" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold gradient-text font-battlesbridge mb-6">
            CHOOSE YOUR BULL
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each Lamborghini is a masterpiece of design and engineering, created to offer an unparalleled driving experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <ModelCard 
              key={index}
              model={model}
              isActive={activeModel === index}
              onClick={() => setActiveModel(index)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel}
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.img
                src={activeModelData.image}
                alt={activeModelData.name}
                className="w-full h-auto object-contain drop-shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-lamborghini-orange font-semibold text-lg tracking-widest uppercase">
                  {activeModelData.category}
                </span>
                <h3 className="text-6xl font-bold text-white font-battlesbridge mt-2 mb-4">
                  {activeModelData.name}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {activeModelData.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-center space-x-3">
                  <Zap className="text-lamborghini-orange" size={28} />
                  <div>
                    <span className="text-gray-400 text-sm">Power</span>
                    <p className="text-xl font-semibold">{activeModelData.power}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="text-lamborghini-orange" size={28} />
                  <div>
                    <span className="text-gray-400 text-sm">0-100 km/h</span>
                    <p className="text-xl font-semibold">{activeModelData.acceleration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="text-lamborghini-orange" size={28} />
                  <div>
                    <span className="text-gray-400 text-sm">Price</span>
                    <p className="text-xl font-semibold">{activeModelData.price}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {activeModelData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <ArrowRight className="text-lamborghini-orange w-4 h-4" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Configure <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Find a Dealer
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Models;
