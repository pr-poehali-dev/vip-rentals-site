import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Car } from '@/types/car';

interface CarCardProps {
  car: Car;
  index: number;
  onSelect: (car: Car) => void;
}

export default function CarCard({ car, index, onSelect }: CarCardProps) {
  return (
    <Card 
      className="group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-2 bg-card border-2 border-primary/20 hover:border-primary/60 overflow-hidden backdrop-blur-sm"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg shadow-primary/50 border border-yellow-300/50">
          {car.category}
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{car.brand}</span>
          <span className="text-sm font-normal text-muted-foreground">{car.year} г.</span>
        </CardTitle>
        <CardDescription className="text-lg font-semibold text-foreground">
          {car.model}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Settings" size={16} />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Fuel" size={16} />
            <span>{car.fuel}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {car.price.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-xs text-foreground/60 uppercase tracking-wider">за сутки</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">Залог</div>
            <div className="text-sm text-muted-foreground">
              {car.deposit.toLocaleString('ru-RU')} ₽
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70 hover:scale-105"
          onClick={() => onSelect(car)}
        >
          ЗАБРОНИРОВАТЬ
        </Button>
      </CardFooter>
    </Card>
  );
}
