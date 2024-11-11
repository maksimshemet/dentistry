import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const benefits = [
  {
    title: 'Без болю',
    description: 'Сучасні методи знеболення'
  },
  {
    title: 'Новітнє обладнання',
    description: 'Цифрова діагностика'
  },
  {
    title: 'Гарантія',
    description: 'Письмова гарантія на роботи'
  }
];

const Benefits = () => {
  return (
    <section className="py-8 px-4">
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <Card 
            key={index}
            className="border-l-4 border-l-[#00bfff] bg-[#f8fdff] transform transition-all duration-300 hover:translate-x-1"
          >
            <CardContent className="p-4">
              <CheckCircle className="h-8 w-8 text-[#00bfff] mb-2" />
              <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Benefits;