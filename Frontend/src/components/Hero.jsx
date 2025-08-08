import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';
import ReactPlayer from 'react-player';

const slides = [
  {
    title: "REVUELTO",
    subtitle: "FROM FUTURE",
    description: "The Revuelto is the beginning of a new era for Lamborghini, a car that sets a new paradigm in terms of performance, sportiness, and driving pleasure.",
    image: "/media/image/mainrevuelto-removebg.png",
    cta: "Discover Revuelto"
  },
  {
    title: "HURACÁN",
    subtitle: "BEYOND THE CONCRETE",
    description: "The Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road.",
    image: "/media/image/revuelto2.png",
    cta: "Explore Huracán"
  },
  {
    title: "URUS",
    subtitle: "UNLOCK ANY ROAD",
    description: "The Urus is the world's first Super Sport Utility Vehicle, a car that is as much a luxury SUV as it is a supercar.",
    image: "/media/image/revuelto3.jpeg",
    cta: "Experience Urus"
  }
];

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('button, a, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('button, a, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <motion.div
        className="w-8 h-8 rounded-full border-2 border-lamborghini-orange flex items-center justify-center"
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0.8 : 1 }}
      >
        <MousePointer2 size={16} className="text-lamborghini-orange" />
      </motion.div>
    </motion.div>
  );
};

const Slide = ({ slide, isActive }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-4"
                >
                  <h2 className="text-lamborghini-orange font-semibold text-lg tracking-widest uppercase">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-6xl lg:text-8xl font-bold gradient-text font-battlesbridge text-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105">
                    {slide.cta}
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                    Watch Video
                  </button>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <CustomCursor />
      
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          ref={videoRef}
          url="/media/video/index/videoplayback1.mp4"
          playing
          loop
          muted
          width="120%"
          height="120%"
          className="absolute top-[-10%] left-[-10%]"
          onReady={() => setIsVideoLoaded(true)}
          config={{
            file: {
              attributes: {
                style: {
                  width: '120%',
                  height: '120%',
                  objectFit: 'cover'
                }
              }
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {slides.map((slide, index) => (
        <Slide key={index} slide={slide} isActive={index === currentSlide} />
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-lamborghini-orange scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-lamborghini-orange transition-colors duration-300 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-lamborghini-orange transition-colors duration-300 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
