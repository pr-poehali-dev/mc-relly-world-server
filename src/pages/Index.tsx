import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const emojiCategories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'blocks', name: 'Блоки', icon: 'Box' },
    { id: 'mobs', name: 'Мобы', icon: 'Ghost' },
    { id: 'items', name: 'Предметы', icon: 'Sword' },
    { id: 'tools', name: 'Инструменты', icon: 'Wrench' },
  ];

  const minecraftEmojis = [
    { emoji: '⛏️', name: 'Кирка', category: 'tools', keywords: 'кирка инструмент копать' },
    { emoji: '🗡️', name: 'Меч', category: 'tools', keywords: 'меч оружие сражаться' },
    { emoji: '🛡️', name: 'Щит', category: 'tools', keywords: 'щит защита броня' },
    { emoji: '🪓', name: 'Топор', category: 'tools', keywords: 'топор дерево рубить' },
    { emoji: '🏹', name: 'Лук', category: 'tools', keywords: 'лук стрела стрелять' },
    { emoji: '💎', name: 'Алмаз', category: 'items', keywords: 'алмаз драгоценность редкий' },
    { emoji: '💰', name: 'Золото', category: 'items', keywords: 'золото деньги богатство' },
    { emoji: '🔥', name: 'Огонь', category: 'items', keywords: 'огонь лава пламя' },
    { emoji: '⚡', name: 'Молния', category: 'items', keywords: 'молния энергия удар' },
    { emoji: '🌟', name: 'Звезда', category: 'items', keywords: 'звезда магия сияние' },
    { emoji: '🧱', name: 'Кирпич', category: 'blocks', keywords: 'кирпич блок строить' },
    { emoji: '🪨', name: 'Камень', category: 'blocks', keywords: 'камень булыжник ресурс' },
    { emoji: '🪵', name: 'Дерево', category: 'blocks', keywords: 'дерево древесина доска' },
    { emoji: '🧊', name: 'Лёд', category: 'blocks', keywords: 'лёд холод замёрз' },
    { emoji: '🌋', name: 'Лава', category: 'blocks', keywords: 'лава огонь опасность' },
    { emoji: '🧟', name: 'Зомби', category: 'mobs', keywords: 'зомби монстр враг' },
    { emoji: '💀', name: 'Скелет', category: 'mobs', keywords: 'скелет кости стрелок' },
    { emoji: '🕷️', name: 'Паук', category: 'mobs', keywords: 'паук враг пещера' },
    { emoji: '🐉', name: 'Дракон', category: 'mobs', keywords: 'дракон босс край' },
    { emoji: '👻', name: 'Призрак', category: 'mobs', keywords: 'призрак гаст летать' },
    { emoji: '🐷', name: 'Свинья', category: 'mobs', keywords: 'свинья животное ферма' },
    { emoji: '🐄', name: 'Корова', category: 'mobs', keywords: 'корова молоко ферма' },
    { emoji: '🐑', name: 'Овца', category: 'mobs', keywords: 'овца шерсть животное' },
    { emoji: '🐺', name: 'Волк', category: 'mobs', keywords: 'волк собака питомец' },
    { emoji: '🐱', name: 'Кот', category: 'mobs', keywords: 'кот кошка питомец' },
    { emoji: '🐴', name: 'Лошадь', category: 'mobs', keywords: 'лошадь транспорт скакать' },
    { emoji: '🦙', name: 'Лама', category: 'mobs', keywords: 'лама караван перевозка' },
    { emoji: '🐸', name: 'Лягушка', category: 'mobs', keywords: 'лягушка болото квакать' },
    { emoji: '🐝', name: 'Пчела', category: 'mobs', keywords: 'пчела мёд жалить' },
    { emoji: '🦇', name: 'Летучая мышь', category: 'mobs', keywords: 'летучая мышь пещера' },
    { emoji: '🍖', name: 'Мясо', category: 'items', keywords: 'мясо еда голод' },
    { emoji: '🍞', name: 'Хлеб', category: 'items', keywords: 'хлеб еда пшеница' },
    { emoji: '🍎', name: 'Яблоко', category: 'items', keywords: 'яблоко еда здоровье' },
    { emoji: '🥕', name: 'Морковь', category: 'items', keywords: 'морковь еда огород' },
    { emoji: '🥔', name: 'Картофель', category: 'items', keywords: 'картофель еда ферма' },
    { emoji: '🍉', name: 'Арбуз', category: 'items', keywords: 'арбуз еда сладкий' },
    { emoji: '🎣', name: 'Удочка', category: 'tools', keywords: 'удочка рыбалка вода' },
    { emoji: '🧭', name: 'Компас', category: 'items', keywords: 'компас навигация точка спавна' },
    { emoji: '🗺️', name: 'Карта', category: 'items', keywords: 'карта исследование мир' },
    { emoji: '📦', name: 'Сундук', category: 'blocks', keywords: 'сундук хранилище предметы' },
    { emoji: '🪣', name: 'Ведро', category: 'tools', keywords: 'ведро вода лава' },
    { emoji: '⚗️', name: 'Зелья', category: 'items', keywords: 'зелье алхимия эффект' },
    { emoji: '📚', name: 'Книга', category: 'items', keywords: 'книга зачарование знание' },
    { emoji: '✨', name: 'Зачарование', category: 'items', keywords: 'зачарование магия улучшение' },
    { emoji: '🏠', name: 'Дом', category: 'blocks', keywords: 'дом строительство база' },
    { emoji: '🏰', name: 'Замок', category: 'blocks', keywords: 'замок крепость защита' },
    { emoji: '⚙️', name: 'Редстоун', category: 'items', keywords: 'редстоун механизм схема' },
    { emoji: '💣', name: 'Динамит', category: 'items', keywords: 'динамит тнт взрыв' },
  ];

  const filteredEmojis = minecraftEmojis.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyEmoji = (emoji: string, name: string) => {
    navigator.clipboard.writeText(emoji);
    toast({
      title: 'Скопировано!',
      description: `${emoji} ${name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-950 dark:to-emerald-950">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl">⛏️</span>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              Minecraft Emoji
            </h1>
            <span className="text-6xl">💎</span>
          </div>
          <p className="text-xl text-muted-foreground mb-2">
            Бесплатная коллекция крутых эмоджи для Майнкрафта
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-1">
            {minecraftEmojis.length} эмоджи доступно
          </Badge>
        </div>

        <div className="mb-8 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск эмоджи... (кирка, алмаз, зомби)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {emojiCategories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <Icon name={category.icon as any} size={18} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {filteredEmojis.length === 0 ? (
          <Card className="py-16">
            <CardContent className="text-center">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-2xl font-bold text-muted-foreground">
                Ничего не найдено
              </h3>
              <p className="text-muted-foreground mt-2">
                Попробуй другой запрос или выбери другую категорию
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredEmojis.map((item, idx) => (
              <Card
                key={idx}
                className="cursor-pointer hover:scale-105 hover:shadow-lg transition-all border-2 hover:border-primary/50"
                onClick={() => copyEmoji(item.emoji, item.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <p className="font-medium text-sm text-foreground truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Нажми для копирования
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 border-2">
            <CardContent className="p-8">
              <Icon name="Info" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-2xl font-bold mb-3">Как использовать?</h3>
              <p className="text-muted-foreground text-lg">
                Просто нажми на любой эмоджи, и он скопируется в буфер обмена! 
                Используй их в Discord, Telegram, VK или где угодно 🎮
              </p>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 text-center text-muted-foreground">
          <p className="text-sm">
            Все эмоджи бесплатны для использования • Minecraft Emoji Collection 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
