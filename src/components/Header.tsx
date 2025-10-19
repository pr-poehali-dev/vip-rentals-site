import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'about', label: 'О компании' },
    { id: 'conditions', label: 'Условия' },
    { id: 'offers', label: 'Акции' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary via-yellow-400 to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/50">
            <Icon name="Crown" className="text-black drop-shadow-lg" size={28} />
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent tracking-tight">
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
        <Button className="bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70 hover:scale-105">
          <Icon name="Phone" size={18} className="mr-2" />
          ПОЗВОНИТЬ
        </Button>
      </div>
    </header>
  );
}
