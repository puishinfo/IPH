import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562053650-cabb17e80ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Journey to <span className="text-amber-400">Enlightenment</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience authentic Buddhist pilgrimage tours in Bodhgaya with expert guidance from 
          Mr. Brajesh Kumar, your gateway to spiritual awakening.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Tours
          </a>
          <a
            href="#about"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
          >
            Meet Your Guide
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">UNESCO Heritage Site</h3>
            <p className="text-white/80">Mahabodhi Temple Complex</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Expert Guide</h3>
            <p className="text-white/80">6+ months monastic experience</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Korean Specialist</h3>
            <p className="text-white/80">Certified Korean interpreter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;