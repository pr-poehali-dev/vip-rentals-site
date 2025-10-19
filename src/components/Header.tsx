import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'about', label: 'О компании' },
    { id: 'conditions', label: 'Условия' },
    { id: 'offers', label: 'Акции' },
    { id: 'contacts', label: 'Контакты' }
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-yellow-400 to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/50">
              <Icon name="Crown" className="text-black drop-shadow-lg" size={28} />
            </div>
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent tracking-tight">
              VIP ПРОКАТ
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70 hover:scale-105">
              <Icon name="Phone" size={18} className="mr-2" />
              ПОЗВОНИТЬ
            </Button>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border-2 border-primary/50 hover:border-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-[73px] left-0 right-0 bg-card/95 backdrop-blur-md border-b-2 border-primary/30 shadow-2xl shadow-primary/20">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all hover:bg-primary/20 ${
                    activeSection === item.id 
                      ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                      : 'text-foreground/80'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50">
                  <Icon name="Phone" size={18} className="mr-2" />
                  ПОЗВОНИТЬ
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
