import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="px-4 py-8 text-center bg-gradient-to-b from-brand-bg to-white" >
      <div className="animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
        <h1 className="text-3xl font-bold text-brand-primary mb-2">
          СУЧАСНА
          <br />
          ЛЮКС-ДЕНТ
        </h1>
        <p className="text-lg text-brand-secondary mb-4">
          стоматологія
        </p>
        <Button 
          size="lg"
          className="w-full bg-brand-primary hover:bg-brand-dark text-white py-4 rounded-full text-lg shadow-brand animate-pulse"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Записатися на прийом →
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          * Кількість вільних місць обмежена
        </p>
      </div>
    </section>
  );
};

export default Hero;