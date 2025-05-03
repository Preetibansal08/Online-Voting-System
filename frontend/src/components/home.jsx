// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat font-[Poppins] relative overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/secure.jpg')" }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Section */}
      <section id="home" className="relative z-20 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
              A <span className="text-[#FF6B00]">Secure</span>,<br />
              Real-Time<br />
              <span className="relative inline-block">
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF6B00]/40 transform -skew-x-12"></span>
                Voting Platform
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium max-w-xl animate-fade-in-up delay-100">
              Efficient, transparent, and secure – experience a new era of digital democracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200">
              <a href="/login" className="group relative">
                <button className="bg-[#FF6B00] text-white font-semibold px-8 py-4 rounded-lg 
                  hover:bg-orange-600 transform transition-all duration-300 hover:scale-105
                  shadow-lg hover:shadow-orange-500/30">
                  Start Voting Now
                  <span className="absolute -inset-1 rounded-lg bg-[#FF6B00]/20 group-hover:opacity-0 
                    transition-opacity duration-300"></span>
                </button>
              </a>
              
              <a href="#features" className="px-8 py-4 border-2 border-white/20 rounded-lg
                text-white font-semibold hover:border-[#FF6B00] hover:text-[#FF6B00]
                transform transition-all duration-300 hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Circles Decorations */}
      <div className="absolute top-1/4 left-[55%] w-48 h-48 rounded-full bg-[#FF6B00]/10 
        animate-pulse delay-300 -translate-y-1/2 hidden md:block"></div>
      <div className="absolute top-3/4 right-[10%] w-32 h-32 rounded-full bg-[#FF6B00]/10 
        animate-pulse delay-500 -translate-y-1/2 hidden md:block"></div>
    </div>
  );
};

export default Home;