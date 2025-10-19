import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import CarCard from './CarCard';
import { Car } from '@/types/car';

interface CatalogSectionProps {
  cars: Car[];
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onCarSelect: (car: Car) => void;
}

export default function CatalogSection({ 
  cars, 
  searchQuery, 
  selectedCategory, 
  onSearchChange, 
  onCategoryChange,
  onCarSelect 
}: CatalogSectionProps) {
  return (
    <section id="catalog" className="py-20 px-4 bg-gradient-to-b from-black via-primary/5 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">КАТАЛОГ АВТОМОБИЛЕЙ</h2>
          <p className="text-foreground/70 text-xl font-light">95 премиальных автомобилей к вашим услугам</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск по марке или модели..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full md:w-48 bg-background">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="Бизнес">Бизнес</SelectItem>
              <SelectItem value="Премиум">Премиум</SelectItem>
              <SelectItem value="Люкс">Люкс</SelectItem>
              <SelectItem value="Суперкар">Суперкар</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} onSelect={onCarSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
