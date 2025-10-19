import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
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
  );
}
