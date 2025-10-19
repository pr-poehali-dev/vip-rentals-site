import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}
