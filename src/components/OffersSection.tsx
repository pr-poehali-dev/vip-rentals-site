import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function OffersSection() {
  return (
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
  );
}
