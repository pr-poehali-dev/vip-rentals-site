import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ConditionsSection() {
  return (
    <section id="conditions" className="py-20 px-4 bg-gradient-to-b from-black via-primary/5 to-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-6xl font-black mb-16 text-center bg-gradient-to-r from-primary via-yellow-300 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">УСЛОВИЯ АРЕНДЫ</h2>
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
  );
}
