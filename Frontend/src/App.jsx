import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center space-y-8">
          {/* Loading Animation */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-800 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-lamborghini-orange rounded-full animate-spin"></div>
            </div>
          </div>
          
          {/* Loading Text */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-lamborghini-orange to-lamborghini-yellow rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold gradient-text font-battlesbridge">
                LAMBORGHINI
              </span>
            </div>
            <p className="text-gray-400 text-lg">Preparing your digital supercar experience...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Models />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;

