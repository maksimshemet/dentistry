import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const services = [
  {
    id: 1,
    title: "Діагностика",
    description: "Знімок, консультація, план лікування",
    price: "від 300 грн"
  },
  {
    id: 2,
    title: "Професійна гігієна",
    description: "Професійна гігієна зубів",
    price: "від 1200 грн"
  },
  {
    id: 3,
    title: "Лікування карієсу",
    description: "Лікування карієсу",
    price: "від 1060 грн"
  },
  {
    id: 4,
    title: "Відбілювання",  
    description: "Відбілювання від Beyond",
    price: "від 3500 грн"
  },
  {
    id: 5,
    title: "Ортодонтія",
    description: "Ортодонтична консультація",
    price: "від 400 грн"
  },
  {
    id: 6,
    title: "Ендодонтія",
    description: "Ендодонтичне лікування",
    price: "від 1500 грн"
  },
  {
    id: 7,
    title: "Ортопедія",
    description: "Ортопедичне лікування",
    price: "від 3200 грн"
  },
  {
    id: 8,
    title: "Хірургія",
    description: "Хірургічне лікування",
    price: "від 800 грн"
  },
  {
    id: 9,
    title: "Парадонтологія",
    description: "Лікування тканин пародонту",
    price: "від 1000 грн"
  },
  {
    id: 10,
    title: "Імплантологія",
    description: "Імплантація зубів",
    price: "від 11000 грн"
  },
  {
    id: 11,
    title: "Дитяча стоматологія",
    description: "Консультація дитячого терапевта",
    price: "від 250 грн"
  },
  {
    id: 12,
    title: "Седація",
    description: "Лікування під седацією",
    price: "від 3200 грн"
  },
  {
    id: 13,
    title: "Vector терапія",
    description: "Vector терапія пародонту",
    price: "від 8000 грн"
  }
 ];

const Services = () => {
  return (
    <section className="py-8 px-4 bg-[#f8fdff]">
      <h2 className="text-2xl font-bold text-center text-[#00bfff] mb-6">
        Наші послуги
      </h2>
      <div className="space-y-4">
        {services.map((service) => (
          <Card 
            key={service.id}
            className={`relative overflow-hidden ${
              service.popular ? 'border-[#00bfff]' : 'border-gray-200'
            }`}
          >
            {service.popular && (
              <div className="absolute top-2 right-2 bg-[#00bfff] text-white text-xs py-1 px-2 rounded-full">
                Популярна послуга
              </div>
            )}
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <span className="text-[#00bfff] font-semibold">{service.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <Button 
                className="w-full bg-[#00bfff] hover:bg-[#0099cc] text-white"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Записатись
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;