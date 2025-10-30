import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const copyServerIP = () => {
    navigator.clipboard.writeText('McRellyWorld.aternos.me');
    toast({
      title: 'IP скопирован!',
      description: 'McRellyWorld.aternos.me скопирован в буфер обмена',
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1a4d2e]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a4d2e]/95 backdrop-blur-sm border-b border-[#4ade80]/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#4ade80] flex items-center justify-center font-bold text-xl text-[#1a4d2e]">
                MC
              </div>
              <span className="text-2xl font-bold text-[#4ade80]">McRellyWorld</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              {['home', 'news', 'team', 'donate'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === section
                      ? 'text-[#4ade80]'
                      : 'text-white/80 hover:text-[#4ade80]'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'news' && 'Новости'}
                  {section === 'team' && 'Команда'}
                  {section === 'donate' && 'Донат'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-lg opacity-20 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/43b9143e-c347-428e-8c0e-a0eefcc5421e.jpg)',
              }}
            />
            <div className="relative bg-[#166534]/80 backdrop-blur-sm rounded-lg p-12 border-4 border-[#4ade80]/50">
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-6 text-[#fbbf24] drop-shadow-[0_4px_8px_rgba(251,191,36,0.5)]">
                  McRellyWorld
                </h1>
                <p className="text-2xl text-white/90 mb-8">
                  Самый лучший Minecraft сервер!
                </p>
                
                <div className="bg-[#1a4d2e] rounded-lg p-6 mb-8 border-2 border-[#4ade80]">
                  <p className="text-white/70 mb-2 text-sm">IP СЕРВЕРА:</p>
                  <div className="flex items-center justify-center gap-4">
                    <code className="text-2xl font-bold text-[#4ade80] bg-black/30 px-6 py-3 rounded">
                      McRellyWorld.aternos.me
                    </code>
                    <Button
                      onClick={copyServerIP}
                      size="lg"
                      className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a4d2e] font-bold border-2 border-[#22c55e]"
                    >
                      <Icon name="Copy" className="mr-2" size={20} />
                      Копировать
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-black/30 rounded-lg p-6 border-2 border-[#4ade80]/30">
                    <Icon name="Users" className="mx-auto mb-3 text-[#4ade80]" size={40} />
                    <p className="text-3xl font-bold text-[#fbbf24] mb-2">200+</p>
                    <p className="text-white/80">Игроков онлайн</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6 border-2 border-[#4ade80]/30">
                    <Icon name="Gamepad2" className="mx-auto mb-3 text-[#4ade80]" size={40} />
                    <p className="text-3xl font-bold text-[#fbbf24] mb-2">24/7</p>
                    <p className="text-white/80">Работа сервера</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6 border-2 border-[#4ade80]/30">
                    <Icon name="Sword" className="mx-auto mb-3 text-[#4ade80]" size={40} />
                    <p className="text-3xl font-bold text-[#fbbf24] mb-2">10+</p>
                    <p className="text-white/80">Игровых режимов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-[#166534]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#fbbf24]">
            Новости сервера
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Обновление 1.20',
                date: '25 октября 2024',
                content: 'Добавлены новые мобы, биомы и предметы! Исследуй обновленный мир.',
                icon: 'Sparkles'
              },
              {
                title: 'Новый режим PvP',
                date: '20 октября 2024',
                content: 'Запущена арена для сражений. Докажи, что ты лучший боец!',
                icon: 'Swords'
              },
              {
                title: 'Конкурс построек',
                date: '15 октября 2024',
                content: 'Создай самую креативную постройку и получи награды!',
                icon: 'Trophy'
              }
            ].map((news, idx) => (
              <Card key={idx} className="bg-[#1a4d2e] border-2 border-[#4ade80]/50 hover:border-[#4ade80] transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded bg-[#4ade80] flex items-center justify-center">
                      <Icon name={news.icon as any} size={24} className="text-[#1a4d2e]" />
                    </div>
                    <Badge className="bg-[#fbbf24] text-black hover:bg-[#fbbf24]/90">
                      {news.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-[#4ade80]">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-base">
                    {news.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-[#1a4d2e]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#fbbf24]">
            Наша команда
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'McRelly', role: 'Владелец', color: '#ef4444' },
              { name: 'Admin_Pro', role: 'Главный админ', color: '#f59e0b' },
              { name: 'Moderator_X', role: 'Модератор', color: '#3b82f6' },
              { name: 'Helper_123', role: 'Хелпер', color: '#10b981' }
            ].map((member, idx) => (
              <Card key={idx} className="bg-[#166534] border-2 border-[#4ade80]/50 hover:border-[#4ade80] transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center">
                    <Icon name="User" size={48} className="text-[#1a4d2e]" />
                  </div>
                  <CardTitle className="text-2xl text-center text-white">{member.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge style={{ backgroundColor: member.color }} className="text-white">
                      {member.role}
                    </Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 bg-[#166534]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#fbbf24]">
            Привилегии
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'VIP',
                price: '99₽',
                features: ['Цветной ник', 'Доступ к /fly', '3 дома', 'Приватные чаты'],
                color: '#10b981',
                icon: 'Star'
              },
              {
                name: 'PREMIUM',
                price: '299₽',
                features: ['Все из VIP', 'Кит предметов', '10 домов', 'Свой префикс', 'Креатив на своем участке'],
                color: '#fbbf24',
                icon: 'Crown',
                popular: true
              },
              {
                name: 'LEGEND',
                price: '599₽',
                features: ['Все из PREMIUM', 'Админ панель', 'Неограниченно домов', 'Свои команды', 'WorldEdit'],
                color: '#ef4444',
                icon: 'Gem'
              }
            ].map((tier, idx) => (
              <Card 
                key={idx} 
                className={`bg-[#1a4d2e] border-4 transition-all hover:scale-105 relative ${
                  tier.popular ? 'border-[#fbbf24] shadow-[0_0_30px_rgba(251,191,36,0.5)]' : 'border-[#4ade80]/50 hover:border-[#4ade80]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#fbbf24] text-black text-sm font-bold px-6 py-1">
                      ПОПУЛЯРНОЕ
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: tier.color }}>
                    <Icon name={tier.icon as any} size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl text-center text-white">{tier.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-5xl font-bold" style={{ color: tier.color }}>
                      {tier.price}
                    </span>
                    <span className="text-white/60 text-lg">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-white/90">
                        <Icon name="Check" size={20} className="text-[#4ade80] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full font-bold text-lg py-6 border-2"
                    style={{ 
                      backgroundColor: tier.color,
                      borderColor: tier.color,
                      color: 'white'
                    }}
                  >
                    Купить {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1a4d2e] border-t border-[#4ade80]/30 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-[#4ade80] flex items-center justify-center font-bold text-2xl text-[#1a4d2e]">
              MC
            </div>
            <span className="text-3xl font-bold text-[#4ade80]">McRellyWorld</span>
          </div>
          <p className="text-white/60 mb-6">
            Лучший Minecraft сервер для твоих приключений
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-[#4ade80]">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-[#4ade80]">
              <Icon name="Youtube" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-[#4ade80]">
              <Icon name="Globe" size={24} />
            </Button>
          </div>
          <p className="text-white/40 text-sm mt-8">
            © 2024 McRellyWorld. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
