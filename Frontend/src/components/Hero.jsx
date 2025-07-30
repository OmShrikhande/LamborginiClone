import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const slides = [
    {
      title: "REVUELTO",
      subtitle: "THE FIRST SUPER SPORTS CAR",
      description: "The new Lamborghini Revuelto is the first super sports car powered by a new hybrid powertrain.",
      image: "/media/image/mainrevuelto.jpg",
      cta: "Discover Revuelto"
    },
    {
      title: "PURE PERFORMANCE",
      subtitle: "ENGINEERED FOR SPEED",
      description: "Experience the pinnacle of automotive engineering with our latest hybrid technology.",
      image: "/media/image/revuelto2.png",
      cta: "Explore Models"
    },
    {
      title: "ITALIAN EXCELLENCE",
      subtitle: "BORN IN SANT'AGATA",
      description: "Every Lamborghini is a masterpiece of Italian craftsmanship and cutting-edge innovation.",
      image: "/media/image/revuelto3.jpeg",
      cta: "Heritage Story"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url="/media/video/index/videoplayback1.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="object-cover"
          onReady={() => setIsVideoLoaded(true)}
          config={{
            file: {
              attributes: {
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }
            }
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h2 className="text-lamborghini-orange font-semibold text-lg tracking-widest uppercase">
                  {slides[currentSlide].subtitle}
                </h2>
                <h1 className="text-6xl lg:text-8xl font-bold gradient-text font-battlesbridge text-shadow">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105">
                  {slides[currentSlide].cta}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Watch Video
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-lamborghini-orange scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Car Image */}
            <div className="relative animate-zoom-in">
              <div className="relative">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-1000 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-lamborghini-orange/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-lamborghini-orange transition-colors duration-300 z-20"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-lamborghini-orange transition-colors duration-300 z-20"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm font-medium tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;