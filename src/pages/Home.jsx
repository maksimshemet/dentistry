import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import Benefits from '../components/sections/Benefits';
import Services from '../components/sections/Services';
import Feedback from '../components/sections/Feedback';
import Contact from '../components/sections/Contact';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Button } from '../components/ui/button';
import { Phone, Calendar } from 'lucide-react';

const Home = () => {
  const showCallButton = useScrollPosition(100);

  return (
    <div className="min-h-screen bg-[#f2f3f4]">
      {/* Centered Content Container */}
      
      <div className="max-w-[1200px] mx-auto bg-[#f2f3f4]">
        {/* Fixed top info bar - full width */}
        {/* Main content */}
        <div className="px-4">
          <Header />
          <Hero />
          <TrustIndicators />
          <Benefits />
          <Services />
          <Feedback />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* Floating buttons - outside container */}
      {showCallButton && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          <Button 
            onClick={() => window.location.href = 'tel:+380XXXXXXXX'}
            className="bg-brand-primary hover:bg-brand-dark text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center"
          >
            <Phone className="h-8 w-8" />
          </Button>
          <Button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-primary hover:bg-brand-dark text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center"
          >
            <Calendar className="h-8 w-8" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;