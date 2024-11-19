import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Calendar } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = {
    services: [
      'Діагностика',
      'Професійна чистка',
      'Лікування карієсу',
      'Відбілювання',
      'Протезування',
      'Імплантація'
    ],
    contacts: [
      { icon: Phone, text: '+380 50 250 04 38', href: 'tel:+380502500438' },
      { icon: Mail, text: 'semetm25@gmail.com', href: 'mailto:semetm25@gmail.com' },
      { icon: MapPin, text: 'вул. Пашутінська 36, м. Кропивницький', href: 'https://maps.app.goo.gl/qyaKL46XbuT36KRt5' },
      { icon: Clock, text: 'Пн-Сб: 8:00 - 19:00' }
    ],
    social: [
      { icon: Facebook, name: 'Facebook', href: 'https://www.instagram.com/luxdent.kr' },
      { icon: Instagram, name: 'Instagram', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#f8fdff] border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#00bfff] mb-4">ЛЮКС-ДЕНТ</h3>
            <p className="text-gray-600 mb-4">
              Сучасна стоматологічна клініка, де досвід та інновації створюють здорові усмішки.
            </p>
            <a href='viber://chat?number=%2B380502500438'>
            <Button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Записатись
            </Button>
            </a>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Послуги</h3>
            <ul className="space-y-2">
              {sections.services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-600 hover:text-[#00bfff] transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Контакти</h3>
            <ul className="space-y-3">
              {sections.contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="h-5 w-5 text-[#00bfff] mr-2 flex-shrink-0 mt-0.5" />
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-gray-600 hover:text-[#00bfff] transition-colors"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-gray-600">{contact.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links & License Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Слідкуйте за нами</h3>
            <div className="flex space-x-4 mb-6">
              {sections.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#00bfff] text-white hover:bg-[#0099cc] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-2">Розроблено:</p>
              <a href='http://takneprojde.smv.pp.ua/'>Балакучими Головами</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {currentYear} ЛЮКС-ДЕНТ. Всі права захищені.
            </p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <button className="text-sm text-gray-600 hover:text-[#00bfff] transition-colors">
                Політика конфіденційності
              </button>
              <button className="text-sm text-gray-600 hover:text-[#00bfff] transition-colors">
                Умови використання
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;