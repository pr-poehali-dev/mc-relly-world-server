import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const { toast } = useToast();

  const copyServerIP = () => {
    navigator.clipboard.writeText('McRellyWorld.aternos.me');
    toast({
      title: 'IP скопирован!',
      description: 'McRellyWorld.aternos.me',
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black text-primary">BLAZEWORLD</div>
            </div>
            
            <div className="hidden md:flex gap-8 items-center">
              {[
                { id: 'main', label: 'Главная' },
                { id: 'donate', label: 'Магазин' },
                { id: 'news', label: 'Новости' },
                { id: 'about', label: 'О сервере' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-black mb-6 text-foreground">
              BLAZE<span className="text-primary">WORLD</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-10 font-medium">
              Магазин Сервера ⤵️⤵️⤵️
            </p>
            
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border shadow-2xl">
              <p className="text-muted-foreground mb-3 text-sm uppercase tracking-wider">IP Адрес сервера</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <code className="text-3xl font-bold text-primary bg-secondary px-8 py-4 rounded-lg">
                  McRellyWorld.aternos.me
                </code>
                <Button
                  onClick={copyServerIP}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  <Icon name="Copy" className="mr-2" size={20} />
                  Копировать
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all">
                <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
                <p className="text-4xl font-bold text-foreground mb-2">500+</p>
                <p className="text-muted-foreground font-medium">Игроков</p>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all">
                <Icon name="Clock" className="mx-auto mb-4 text-primary" size={48} />
                <p className="text-4xl font-bold text-foreground mb-2">24/7</p>
                <p className="text-muted-foreground font-medium">Онлайн</p>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all">
                <Icon name="Zap" className="mx-auto mb-4 text-primary" size={48} />
                <p className="text-4xl font-bold text-foreground mb-2">v1.20</p>
                <p className="text-muted-foreground font-medium">Версия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-foreground">
            Магазин
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Купите привилегии и получите преимущества на сервере
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: 'VIP',
                price: '99',
                features: [
                  'Цветной ник в чате',
                  'Доступ к команде /fly',
                  'Установка до 3 точек дома',
                  'Приватный чат для VIP',
                  'Набор ресурсов каждый день'
                ],
                icon: 'Star',
                badge: false
              },
              {
                name: 'PREMIUM',
                price: '299',
                features: [
                  'Все привилегии VIP',
                  'Доступ к эксклюзивным китам',
                  'Установка до 10 точек дома',
                  'Уникальный префикс',
                  'Креативный режим на участке',
                  'Приоритет в очереди'
                ],
                icon: 'Crown',
                badge: true
              },
              {
                name: 'LEGEND',
                price: '599',
                features: [
                  'Все привилегии PREMIUM',
                  'Расширенная админ панель',
                  'Неограниченные точки дома',
                  'Создание своих команд',
                  'Доступ к WorldEdit',
                  'Персональная поддержка'
                ],
                icon: 'Gem',
                badge: false
              },
              {
                name: 'TITAN',
                price: '999',
                features: [
                  'Все привилегии LEGEND',
                  'Команда /feed',
                  'Команда /heal',
                  'Приоритетная поддержка 24/7',
                  'Эксклюзивные эффекты',
                  'Особый статус в чате'
                ],
                icon: 'Zap',
                badge: false
              }
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className={`bg-card border-2 transition-all hover:scale-105 hover:border-primary/50 relative ${
                  item.badge ? 'border-primary shadow-[0_0_40px_rgba(245,183,89,0.2)]' : 'border-border'
                }`}
              >
                {item.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1">
                      ПОПУЛЯРНОЕ
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon as any} size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-black text-foreground">{item.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-black text-primary">{item.price}₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-foreground/90">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg">
                    Купить {item.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 text-foreground">
            Последние новости
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Обновление сервера до версии 1.20',
                date: '28 октября 2024',
                content: 'Мы обновили сервер до последней версии Minecraft! Теперь доступны все новые блоки, мобы и механики.',
                category: 'Обновление'
              },
              {
                title: 'Новый игровой режим: SkyBlock',
                date: '25 октября 2024',
                content: 'Запущен новый режим SkyBlock! Начни выживание на острове в небе и стань легендой.',
                category: 'Режим'
              },
              {
                title: 'Конкурс на лучшую постройку',
                date: '20 октября 2024',
                content: 'Участвуй в конкурсе построек и выигрывай ценные призы и привилегии!',
                category: 'Конкурс'
              },
              {
                title: 'Скидки на все привилегии -30%',
                date: '15 октября 2024',
                content: 'Только эту неделю - скидка 30% на все донат-привилегии. Не упусти шанс!',
                category: 'Акция'
              }
            ].map((news, idx) => (
              <Card key={idx} className="bg-card border border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-0">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {news.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-black mb-6 text-foreground">
            О сервере
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            BlazeWorld — это уникальный Minecraft сервер с множеством игровых режимов, 
            дружелюбным комьюнити и постоянными обновлениями. Мы работаем 24/7 и всегда 
            рады новым игрокам. Присоединяйся к нам и начни своё приключение!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', label: 'Защита от гриферов' },
              { icon: 'Sword', label: 'PvP арены' },
              { icon: 'Home', label: 'Приват территорий' },
              { icon: 'Coins', label: 'Игровая экономика' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
                <Icon name={feature.icon as any} className="mx-auto mb-3 text-primary" size={40} />
                <p className="text-foreground font-semibold">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-black mb-4">
            BLAZE<span className="text-primary">WORLD</span>
          </div>
          <p className="text-muted-foreground mb-8">
            Лучший Minecraft сервер для незабываемых приключений
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
              <Icon name="Globe" size={20} />
            </Button>
          </div>
          <p className="text-muted-foreground/60 text-sm">
            © 2024 BlazeWorld. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;