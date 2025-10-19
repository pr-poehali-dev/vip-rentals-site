import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import BookingDialog from '@/components/BookingDialog';
import AboutSection from '@/components/AboutSection';
import ConditionsSection from '@/components/ConditionsSection';
import OffersSection from '@/components/OffersSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import { Car, generateCars } from '@/types/car';

export default function Index() {
  const [cars] = useState<Car[]>(generateCars());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredCars = cars.filter(car => {
    const matchesSearch = 
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <CatalogSection 
        cars={filteredCars}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onCarSelect={handleCarSelect}
      />
      <AboutSection />
      <ConditionsSection />
      <OffersSection />
      <ContactsSection />
      <Footer />
      <BookingDialog 
        car={selectedCar} 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
}
