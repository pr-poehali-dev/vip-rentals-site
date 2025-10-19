import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Car } from '@/types/car';

interface BookingDialogProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingDialog({ car, isOpen, onClose }: BookingDialogProps) {
  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card">
        <DialogHeader>
          <DialogTitle>Бронирование {car.brand} {car.model}</DialogTitle>
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
              <span className="font-semibold">{car.price.toLocaleString('ru-RU')} ₽</span>
            </div>
            <div className="flex justify-between">
              <span>Залог:</span>
              <span className="font-semibold">{car.deposit.toLocaleString('ru-RU')} ₽</span>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-yellow-400 hover:to-primary text-black font-bold shadow-lg shadow-primary/50 transition-all hover:shadow-primary/70">
            <Icon name="Send" size={18} className="mr-2" />
            ОТПРАВИТЬ ЗАЯВКУ
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
