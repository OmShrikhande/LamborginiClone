import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Flag, Car, Zap } from 'lucide-react';

const timeline = [
  {
    year: "1963",
    title: "THE LEGEND IS BORN",
    description: "Ferruccio Lamborghini founds Automobili Lamborghini, driven by a vision to create the perfect grand touring car.",
    image: "/media/image/mainrevuelto.jpg",
    icon: <Flag />
  },
  {
    year: "1966",
    title: "MIURA: THE FIRST SUPERCAR",
    description: "The Miura P400 stuns the world with its mid-engine V12 layout, defining the modern supercar.",
    image: "/media/image/revuelto2.png",
    icon: <Car />
  },
  {
    year: "1974",
    title: "THE COUNTACH ERA",
    description: "The Countach LP400's futuristic wedge shape and scissor doors become an enduring symbol of automotive rebellion.",
    image: "/media/image/revuelto3.jpeg",
    icon: <Milestone />
  },
  {
    year: "2023",
    title: "A NEW HYBRID DAWN",
    description: "The Revuelto, the first HPEV (High Performance Electrified Vehicle), propels Lamborghini into a new electrified era.",
    image: "/media/image/mainrevuelto-removebg.png",
    icon: <Zap />
  }
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const itemVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="relative flex items-center justify-between w-full"
      variants={itemVariants}
    >
      <div className={`w-5/12 ${isEven ? 'order-1' : 'order-3'}`}>
        <motion.div 
          className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/10"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 102, 0, 0.3)" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-lamborghini-orange">{item.icon}</div>
            <h3 className="text-2xl font-bold text-white font-battlesbridge">{item.title}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>

      <div className="w-2/12 flex justify-center order-2">
        <div className="relative">
          <div className="w-6 h-6 bg-lamborghini-orange rounded-full z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-8 ring-black"></div>
          <div className="text-2xl font-bold gradient-text font-battlesbridge">{item.year}</div>
        </div>
      </div>

      <div className={`w-5/12 ${isEven ? 'order-3' : 'order-1'}`}>
        <motion.img
          src={item.image}
          alt={item.title}
          className="rounded-2xl shadow-2xl w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>
    </motion.div>
  );
};

const Heritage = () => {
  return (
    <section id="heritage" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-heritage-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold gradient-text font-battlesbridge mb-6">
            A LEGACY OF INNOVATION
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From Ferruccio's audacious dream to the electrified future, our history is paved with icons.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-lamborghini-orange/0 via-lamborghini-orange/50 to-lamborghini-orange/0"></div>
          <motion.div
            className="space-y-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.4 }}
          >
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
