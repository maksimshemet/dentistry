import React from 'react';
import { Shield, Trophy, Award } from 'lucide-react';

const indicators = [
  {
    icon: Shield,
    text: 'Сертифікована клініка'
  },
  {
    icon: Trophy,
    text: '15+ років досвіду'
  },
  {
    icon: Award,
    text: '1000+ задоволених клієнтів'
  }
];

const TrustIndicators = () => {
  return (
    <div className="bg-[#f0faff] py-6 px-4">
      <div className="flex justify-between items-center overflow-x-auto whitespace-nowrap gap-4 pb-2 hide-scrollbar">
        {indicators.map((indicator, index) => {
          const Icon = indicator.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col items-center min-w-[100px] hover-lift"
            >
              <Icon className="h-8 w-8 text-[#00bfff] mb-1" />
              <span className="text-xs text-center">{indicator.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustIndicators;