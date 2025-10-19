import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border-2 border-primary/70 px-4 py-1.5 text-sm font-semibold tracking-wider shadow-lg shadow-primary/30">
              ✦ ПРЕМИУМ СЕРВИС АРЕНДЫ ✦
            </Badge>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-none">
              РОСКОШЬ <br/>В КАЖДОЙ <span className="bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">ДЕТАЛИ</span>
            </h2>
            <p className="text-2xl text-foreground/80 mb-10 font-light leading-relaxed">
              95 автомобилей премиум-класса для вашего комфорта.<br/>От бизнес-седанов до суперкаров.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold text-lg px-8 py-6 shadow-2xl shadow-primary/50 transition-all hover:shadow-primary/70 hover:scale-105"
                onClick={() => onNavigate('catalog')}
              >
                <Icon name="Car" size={24} className="mr-3" />
                ВЫБРАТЬ АВТО
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/20 font-bold text-lg px-8 py-6 transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                onClick={() => onNavigate('contacts')}
              >
                СВЯЗАТЬСЯ С НАМИ
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">95</div>
                <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Автомобилей</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">24/7</div>
                <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">5★</div>
                <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Рейтинг</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-3xl blur-[100px] animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/c18a1a72-e0a0-4cc4-a6b1-914e712cf7f5.jpg"
              alt="Luxury Car"
              className="relative rounded-3xl shadow-2xl shadow-primary/20 w-full object-cover border-2 border-primary/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
