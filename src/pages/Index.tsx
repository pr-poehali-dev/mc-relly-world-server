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
    { id: 'all', name: 'Все руды', icon: 'Grid3x3' },
    { id: 'common', name: 'Обычные', icon: 'Box' },
    { id: 'rare', name: 'Редкие', icon: 'Gem' },
    { id: 'precious', name: 'Драгоценные', icon: 'Diamond' },
  ];

  const minecraftOres = [
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/9705ac3d-708b-4b6e-8a72-db88778a9be3.jpg',
      name: 'Угольная руда',
      category: 'common',
      keywords: 'уголь coal черный топливо',
      description: 'Самая распространенная руда'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/a250abe8-7711-4b9c-822e-8a2a7623906e.jpg',
      name: 'Железная руда',
      category: 'common',
      keywords: 'железо iron оранжевый инструменты',
      description: 'Основа для инструментов'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/5cf34ad5-d1ad-47c6-baf1-3aea62ec9517.jpg',
      name: 'Медная руда',
      category: 'common',
      keywords: 'медь copper зеленый бирюзовый',
      description: 'Для электрики и декора'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/ab5ad037-96bd-4259-9923-c0b267ad48ba.jpg',
      name: 'Красная руда',
      category: 'rare',
      keywords: 'редстоун redstone красный механизмы',
      description: 'Для механизмов и схем'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/c84f875f-e2fb-4bed-a61e-6aac9240b4f9.jpg',
      name: 'Лазуритовая руда',
      category: 'rare',
      keywords: 'лазурит lapis синий краситель',
      description: 'Для зачарований и красителей'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/200cc901-0c56-4e08-8021-c259c543e7ae.jpg',
      name: 'Золотая руда',
      category: 'rare',
      keywords: 'золото gold желтый драгоценный',
      description: 'Быстрые, но хрупкие инструменты'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/f84db9e0-d0a7-43ea-ae20-1c72a99fc885.jpg',
      name: 'Алмазная руда',
      category: 'precious',
      keywords: 'алмаз diamond голубой редкий',
      description: 'Лучшие инструменты и броня'
    },
    { 
      image: 'https://cdn.poehali.dev/projects/7a906b4d-ee26-4d3b-ac69-d26afa039750/files/e98c9c17-3d19-4fba-9815-c220825ed42c.jpg',
      name: 'Изумрудная руда',
      category: 'precious',
      keywords: 'изумруд emerald зеленый торговля',
      description: 'Валюта для торговли'
    },
  ];

  const filteredOres = minecraftOres.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const downloadImage = (imageUrl: string, name: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${name}.jpg`;
    link.click();
    
    toast({
      title: 'Скачивание начато!',
      description: name,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-slate-100 to-gray-100 dark:from-stone-950 dark:via-slate-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="https://cdn.poehali.dev/files/af72339c-328c-465a-aaf4-7b525e500b0a.jpg" 
              alt="Minecraft Ores"
              className="h-16 rounded-lg shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
              Minecraft Ores
            </h1>
            <img 
              src="https://cdn.poehali.dev/files/af72339c-328c-465a-aaf4-7b525e500b0a.jpg" 
              alt="Minecraft Ores"
              className="h-16 rounded-lg shadow-lg"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Бесплатная коллекция иконок руд из Майнкрафт
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge variant="secondary" className="text-base px-5 py-2">
              <Icon name="Image" size={16} className="mr-2" />
              {minecraftOres.length} руд
            </Badge>
            <Badge variant="secondary" className="text-base px-5 py-2">
              <Icon name="Download" size={16} className="mr-2" />
              Бесплатно
            </Badge>
            <Badge variant="secondary" className="text-base px-5 py-2">
              <Icon name="Sparkles" size={16} className="mr-2" />
              HD качество
            </Badge>
          </div>
        </div>

        <div className="mb-10 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Icon name="Search" className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={22} />
            <Input
              type="text"
              placeholder="Поиск руды... (алмаз, железо, редстоун)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 pr-5 py-7 text-lg border-2 focus:border-primary rounded-xl shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {emojiCategories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2 px-6 py-6 text-base"
                size="lg"
              >
                <Icon name={category.icon as any} size={20} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {filteredOres.length === 0 ? (
          <Card className="py-20 border-2">
            <CardContent className="text-center">
              <span className="text-7xl mb-6 block">⛏️</span>
              <h3 className="text-3xl font-bold text-muted-foreground mb-2">
                Руда не найдена
              </h3>
              <p className="text-muted-foreground text-lg">
                Попробуй другой запрос или категорию
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredOres.map((item, idx) => (
              <Card
                key={idx}
                className="group hover:scale-105 transition-all border-2 hover:border-primary/60 hover:shadow-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    <Button 
                      onClick={() => downloadImage(item.image, item.name)}
                      className="w-full gap-2 bg-primary hover:bg-primary/90 font-semibold"
                      size="lg"
                    >
                      <Icon name="Download" size={18} />
                      Скачать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-2">
            <CardContent className="p-8 text-center">
              <Icon name="Download" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-3">Как скачать?</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Просто нажми на кнопку "Скачать" под нужной рудой. 
                Изображение сохранится на твоё устройство в высоком качестве!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-2">
            <CardContent className="p-8 text-center">
              <Icon name="Sparkles" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-3">Где использовать?</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Для аватарок, Discord серверов, YouTube превью, 
                стримов или просто для коллекции! Все бесплатно 🎮
              </p>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-20 text-center">
          <div className="bg-card/50 backdrop-blur rounded-2xl p-8 border-2 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-3 text-foreground">
              ⛏️ Minecraft Ores Collection
            </h4>
            <p className="text-muted-foreground mb-2">
              Все изображения бесплатны для личного использования
            </p>
            <p className="text-sm text-muted-foreground">
              Minecraft © Mojang Studios • 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
