import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    //{ name: 'Контакти', href: '#contact' },
  ];

  const handleMenuItemClick = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Header */}
      <header 
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="w-full bg-brand-primary text-white px-4 py-2">
            <div className="container max-w-[1200px] mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
                <div className="flex items-center">
                <Clock className="h-4 w-4 mr-3" />
                <span>Пн-Пт: 8:00 - 19:00<br />Сб: 8:00 - 14:00</span>
                </div>
                <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>вул. Пашутінська 36, м. Кропивницький</span>
                </div>
            </div>
            <a href="tel:+380502500438" className="hover:underline">
                +380 50 250 0438
            </a>
            </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-[#00bfff] hover-lift cursor-pointer">
                ЛЮКС-ДЕНТ
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuItemClick(item.href)}
                  className="text-gray-600 hover:text-[#00bfff] transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+380502500438"
                className="text-[#00bfff] hover:text-[#0099cc] transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <Button
                onClick={() => handleMenuItemClick('#contact')}
                size="lg"
              >
                Записатись на прийом
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bg-white shadow-lg transition-all duration-300 ease-in-out transform",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuItemClick(item.href)}
                  className="flex items-center justify-between p-2 text-gray-600 hover:text-[#00bfff] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </nav>

            {/* Mobile Contact Buttons */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+380502500438"
                className="flex items-center justify-center space-x-2 p-3 bg-[#e6f9ff] text-[#00bfff] rounded-lg hover:bg-[#d1f3ff] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Подзвонити</span>
              </a>
              <Button
                onClick={() => handleMenuItemClick('#contact')}
                className="w-full"
                size="lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Записатись на прийом
              </Button>
            </div>

            {/* Mobile Info */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-col space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-[#00bfff]" />
                  <span>Пн-Сб: 9:00 - 20:00</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[#00bfff]" />
                  <span>вул. Прикладна, 123, Київ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;