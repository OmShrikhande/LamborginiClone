import React from 'react';
import { motion } from 'framer-motion';
import { VR, Track, Factory, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "VIRTUAL DRIVE",
    description: "Get behind the wheel of your dream Lamborghini from anywhere in the world with our hyper-realistic VR experience.",
    icon: <VR size={40} className="text-lamborghini-orange" />,
    image: "/media/image/mainrevuelto.jpg",
    cta: "Start VR Experience"
  },
  {
    title: "AD PERSONAM",
    description: "Customize every detail of your new Lamborghini to make it uniquely yours with our personalization program.",
    icon: <Track size={40} className="text-lamborghini-orange" />,
    image: "/media/image/revuelto2.png",
    cta: "Design Your Own"
  },
  {
    title: "FACTORY TOUR",
    description: "Witness the passion and precision that goes into creating every Lamborghini at our historic factory in Italy.",
    icon: <Factory size={40} className="text-lamborghini-orange" />,
    image: "/media/image/revuelto3.jpeg",
    cta: "Book a Tour"
  }
];

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl shadow-lg h-full flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="mb-6">{experience.icon}</div>
    <h3 className="text-2xl font-bold text-white font-battlesbridge mb-4">{experience.title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{experience.description}</p>
    <button className="mt-auto text-lamborghini-orange font-semibold flex items-center gap-2 hover:text-lamborghini-yellow transition-colors">
      {experience.cta} <ArrowRight size={20} />
    </button>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold gradient-text font-battlesbridge mb-6">
            BEYOND DRIVING
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The Lamborghini experience is a journey into a world of exclusivity, performance, and Italian craftsmanship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
