import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  deposit: number;
  image: string;
  category: string;
  transmission: string;
  fuel: string;
}

const generateCars = (): Car[] => {
  const brands = [
    { name: 'Mercedes-Benz', models: ['S-Class', 'E-Class', 'GLE', 'GLS', 'AMG GT'] },
    { name: 'BMW', models: ['7 Series', '5 Series', 'X5', 'X7', 'M5'] },
    { name: 'Audi', models: ['A8', 'A6', 'Q7', 'Q8', 'RS6'] },
    { name: 'Porsche', models: ['Panamera', 'Cayenne', '911', 'Taycan', 'Macan'] },
    { name: 'Range Rover', models: ['Vogue', 'Sport', 'Velar', 'Evoque', 'Discovery'] },
    { name: 'Lamborghini', models: ['Urus', 'Huracan', 'Aventador'] },
    { name: 'Ferrari', models: ['Roma', 'F8', 'Portofino', '812'] },
    { name: 'Bentley', models: ['Continental', 'Flying Spur', 'Bentayga'] },
    { name: 'Rolls-Royce', models: ['Ghost', 'Wraith', 'Cullinan'] },
    { name: 'Tesla', models: ['Model S', 'Model X', 'Model 3'] },
    { name: 'Lexus', models: ['LS', 'LX', 'RX', 'ES'] },
    { name: 'Cadillac', models: ['Escalade', 'CT6', 'XT6'] },
    { name: 'Maserati', models: ['Ghibli', 'Levante', 'Quattroporte'] }
  ];

  const categories = ['Бизнес', 'Премиум', 'Люкс', 'Суперкар'];
  const transmissions = ['Автомат', 'Робот'];
  const fuels = ['Бензин', 'Дизель', 'Электро', 'Гибрид'];
  const images = [
    'https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/c18a1a72-e0a0-4cc4-a6b1-914e712cf7f5.jpg',
    'https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/d126c915-d74a-4911-87af-3c03651c626c.jpg',
    'https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/3c7e76c9-c6dc-4c93-b722-52ad9f444887.jpg'
  ];

  const cars: Car[] = [];
  let carId = 1;

  brands.forEach(brand => {
    brand.models.forEach(model => {
      if (carId <= 95) {
        const year = 2020 + Math.floor(Math.random() * 5);
        const basePrice = brand.name === 'Lamborghini' || brand.name === 'Ferrari' || brand.name === 'Rolls-Royce' 
          ? 35000 + Math.random() * 65000
          : brand.name === 'Bentley' || brand.name === 'Porsche'
          ? 25000 + Math.random() * 35000
          : 8000 + Math.random() * 20000;

        cars.push({
          id: carId++,
          brand: brand.name,
          model: model,
          year: year,
          price: Math.round(basePrice / 100) * 100,
          deposit: Math.round(basePrice * 0.3 / 100) * 100,
          image: images[Math.floor(Math.random() * images.length)],
          category: categories[Math.floor(Math.random() * categories.length)],
          transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
          fuel: fuels[Math.floor(Math.random() * fuels.length)]
        });
      }
    });
  });

  return cars;
};

export default function Index() {
  const [cars] = useState<Car[]>(generateCars());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <div className="min-h-screen bg-background">
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
            {[
              { id: 'home', label: 'Главная' },
              { id: 'catalog', label: 'Каталог' },
              { id: 'about', label: 'О компании' },
              { id: 'conditions', label: 'Условия' },
              { id: 'offers', label: 'Акции' },
              { id: 'contacts', label: 'Контакты' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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
                  onClick={() => scrollToSection('catalog')}
                >
                  <Icon name="Car" size={24} className="mr-3" />
                  ВЫБРАТЬ АВТО
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary/20 font-bold text-lg px-8 py-6 transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                  onClick={() => scrollToSection('contacts')}
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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
            {filteredCars.map((car, index) => (
              <Card 
                key={car.id} 
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70 hover:scale-105"
                        onClick={() => setSelectedCar(car)}
                      >
                        ЗАБРОНИРОВАТЬ
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card">
                      <DialogHeader>
                        <DialogTitle>Бронирование {selectedCar?.brand} {selectedCar?.model}</DialogTitle>
                        <DialogDescription>
                          Заполните форму, и мы свяжемся с вами в ближайшее время
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Ваше имя" className="bg-background" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" className="bg-background" />
                        </div>
                        <div>
                          <Label htmlFor="dates">Даты аренды</Label>
                          <Input id="dates" type="text" placeholder="01.01.2025 - 07.01.2025" className="bg-background" />
                        </div>
                        <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                          <div className="flex justify-between mb-2">
                            <span>Стоимость за сутки:</span>
                            <span className="font-semibold">{selectedCar?.price.toLocaleString('ru-RU')} ₽</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Залог:</span>
                            <span className="font-semibold">{selectedCar?.deposit.toLocaleString('ru-RU')} ₽</span>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70">
                          <Icon name="Send" size={18} className="mr-2" />
                          ОТПРАВИТЬ ЗАЯВКУ
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">О КОМПАНИИ</h2>
              <p className="text-foreground/80 text-xl mb-6 font-light leading-relaxed">
                Vip Прокат — это премиальный сервис аренды автомобилей класса люкс. 
                Мы предлагаем эксклюзивный автопарк из 95 автомобилей ведущих мировых брендов.
              </p>
              <p className="text-foreground/80 text-xl mb-10 font-light leading-relaxed">
                Наша миссия — сделать роскошь доступной. Каждый автомобиль проходит тщательную проверку 
                и подготовку перед выдачей клиенту.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-card to-primary/10 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/30">
                  <Icon name="Shield" className="text-primary mb-3 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" size={40} />
                  <h3 className="font-bold mb-2 text-lg">Полная страховка</h3>
                  <p className="text-sm text-foreground/70">КАСКО на все автомобили</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-primary/10 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/30">
                  <Icon name="Clock" className="text-primary mb-3 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" size={40} />
                  <h3 className="font-bold mb-2 text-lg">Круглосуточно</h3>
                  <p className="text-sm text-foreground/70">Поддержка 24/7</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-primary/10 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/30">
                  <Icon name="MapPin" className="text-primary mb-3 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" size={40} />
                  <h3 className="font-bold mb-2 text-lg">Доставка</h3>
                  <p className="text-sm text-foreground/70">В любую точку города</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-primary/10 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/30">
                  <Icon name="Star" className="text-primary mb-3 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" size={40} />
                  <h3 className="font-bold mb-2 text-lg">VIP-сервис</h3>
                  <p className="text-sm text-foreground/70">Персональный менеджер</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-secondary/40 rounded-3xl blur-[100px] animate-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/d126c915-d74a-4911-87af-3c03651c626c.jpg"
                alt="Luxury SUV"
                className="relative rounded-3xl shadow-2xl shadow-primary/20 w-full object-cover border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Условия аренды</h2>
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="FileText" className="text-primary" />
                  Документы для аренды
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Паспорт гражданина РФ</li>
                  <li>Водительское удостоверение (стаж от 2 лет)</li>
                  <li>Второй документ на выбор (загранпаспорт, СНИЛС, ИНН)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="CreditCard" className="text-primary" />
                  Оплата и залог
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Оплата наличными или картой</li>
                  <li>Залог возвращается после сдачи автомобиля</li>
                  <li>Возможна оплата в рассрочку при аренде от 7 дней</li>
                  <li>Скидка 10% при аренде от 30 дней</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Key" className="text-primary" />
                  Получение и возврат
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Бесплатная доставка авто в черте города</li>
                  <li>Возврат в любое удобное место</li>
                  <li>Подменный автомобиль в случае поломки</li>
                  <li>Детское кресло бесплатно</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 px-4 bg-gradient-to-b from-black via-primary/5 to-black">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/60 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/50">
                  <Icon name="Percent" className="text-black" size={32} />
                </div>
                <CardTitle className="text-2xl font-black">Первая аренда -15%</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/70 text-lg">
                Скидка 15% на первую аренду для новых клиентов. Промокод: <span className="font-bold text-primary">FIRST15</span>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/60 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/50">
                  <Icon name="Calendar" className="text-black" size={32} />
                </div>
                <CardTitle className="text-2xl font-black">Длительная аренда</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/70 text-lg">
                От 30 дней — скидка <span className="font-bold text-primary">10%</span>, от 90 дней — скидка <span className="font-bold text-primary">20%</span> на любой автомобиль
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/60 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/50">
                  <Icon name="Gift" className="text-black" size={32} />
                </div>
                <CardTitle className="text-2xl font-black">Программа лояльности</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/70 text-lg">
                Накопительные бонусы за каждую аренду. <span className="font-bold text-primary">1 бонус = 1 рубль</span> скидки
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-black via-primary/5 to-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-black mb-16 text-center bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+79999999999" className="text-primary hover:underline">
                      +7 (999) 999-99-99
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@vipprokat.ru" className="text-primary hover:underline">
                      info@vipprokat.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 1
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (999) 999-99-99" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Input id="contact-message" placeholder="Ваш вопрос" className="bg-background" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70">
                    <Icon name="Send" size={18} className="mr-2" />
                    ОТПРАВИТЬ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Vip Прокат. Все права защищены.</p>
          <p className="text-sm">Премиальная аренда автомобилей в Москве</p>
        </div>
      </footer>
    </div>
  );
}