import React from 'react';
import { Phone, Clock, MapPin, Calendar } from 'lucide-react';
import { Button } from '../ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-4 bg-[#f0faff]">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-[#00bfff]">
          Записатися на прийом
        </h2>
        <p className="text-sm text-red-500 mb-6">
          Залишилось 3 місця на цьому тижні
        </p>
        <div className="space-y-6 mb-6">
          <a 
            href="tel:+380XXXXXXXX"
            className="flex items-center justify-center space-x-2 bg-[#00bfff] hover:bg-[#0099cc] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg">Подзвонити зараз</span>
          </a>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-[#00bfff]" />
            <span>Пн-Сб: 9:00 - 20:00</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-[#00bfff]" />
            <span>вул. Прикладна, 123, Київ</span>
          </div>
          <Button 
            size="lg"
            className="w-full bg-[#00bfff] hover:bg-[#0099cc] text-white py-4 rounded-full text-lg flex items-center justify-center space-x-2 transform transition-all duration-300 hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            <span>Записатися онлайн</span>
          </Button>
        </div>
        <p className="text-xs text-gray-500">
          * При записі через сайт - консультація безкоштовно
        </p>
      </div>
    </section>
  );
};

export default Contact;