import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [saplings, setSaplings] = useState(10);
  const [selectedCity, setSelectedCity] = useState('');

  const pricePerSapling = 1000;
  const totalPrice = saplings * pricePerSapling;

  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Екатеринбург',
    'Новосибирск',
    'Краснодар',
    'Нижний Новгород'
  ];

  const companyLevels = [
    {
      hectares: 1,
      title: 'Шефство над гектаром',
      description: 'Идеально для малого бизнеса',
      features: ['Сертификат в офис', 'Упоминание на сайте', 'Годовой отчёт', 'Фото и видео посадки']
    },
    {
      hectares: 10,
      title: 'Шефство над 10 гектарами',
      description: 'Для компаний с большой командой',
      features: ['Всё из базового', 'Табличка в лесу', 'Корпоративный выезд', 'Ежеквартальные отчёты']
    },
    {
      hectares: 100,
      title: 'Шефство над 100 гектарами',
      description: 'Масштабный экологический проект',
      features: ['Всё из расширенного', 'Именная роща компании', 'PR-поддержка', 'Полное сопровождение']
    }
  ];

  const emotionalBlocks = [
    {
      icon: 'TreePine',
      title: 'Посади дерево. Стань мужчиной.',
      text: 'Мужчина — это не про «бороду отрастил». Это про ответственность. Один мальчик сажает одно дерево — и в этот момент у него появляется что-то своё: живое, растущее, зависимое от него.',
      subtext: 'Раз в год мы проводим ритуал посвящения в мужчины. Отец и сын выходят на землю, берут в руки лопаты и сажают дерево.',
      price: '5 000 ₽ — вклад в лес и в характер ребёнка',
      buttonText: 'Записаться на посвящение',
      bgColor: 'bg-primary/5'
    },
    {
      icon: 'Heart',
      title: 'Свадебное дерево: вместо очередного букета — корни в земле',
      text: 'Свадьба заканчивается, фото блекнут, торт съели и забыли. Но если в день росписи вы сажаете своё дерево — память становится живой.',
      subtext: 'Каждая семья после ЗАГСа может поехать не в ТЦ, а на свою первую совместную посадку. Дерево растёт вместе с вами: переживает ветра, морозы, засуху.',
      price: '5 000 ₽ — ваша традиция, ваш лес, ваш след',
      buttonText: 'Посадить семейное дерево',
      bgColor: 'bg-accent/5'
    },
    {
      icon: 'Shield',
      title: 'Роща славы. Дерево, которое держит память',
      text: 'Есть вещи, которые словами не лечатся. Когда отец на фронте. Когда его уже нет. Когда ребёнку нужно во что-то упереться, кроме пустоты.',
      subtext: 'Мы создаём Рощу славы — живой мемориал, где дети с мамами сажают деревья в честь своих защитников. У каждого дерева — имя. У каждой семьи — место, куда можно приходить.',
      price: 'Бесплатно для семей участников СВО',
      buttonText: 'Посадить дерево в Роще славы',
      bgColor: 'bg-secondary/5'
    }
  ];

  const stats = [
    { value: '1,2 млн га', label: 'Вырубается ежегодно в России', icon: 'TrendingDown' },
    { value: '18 млн га', label: 'Сгорает в лесных пожарах', icon: 'Flame' },
    { value: '900 тыс га', label: 'Восстанавливается человеком', icon: 'TrendingUp' },
    { value: '1:20', label: 'Один человек против вырубки', icon: 'Users' }
  ];

  const steps = [
    { icon: 'MapPin', title: 'Выбираете город и формат', description: 'Выберите удобное место и количество саженцев' },
    { icon: 'CreditCard', title: 'Оплачиваете участие', description: 'Безопасная оплата онлайн или при посадке' },
    { icon: 'Mail', title: 'Получаете приглашение', description: 'Координаты места, дата и время посадки' },
    { icon: 'TreeDeciduous', title: 'Приезжаете и сажаете', description: 'Инструкторы помогут, инструмент на месте' },
    { icon: 'Award', title: 'Получаете сертификат', description: 'Фото, видео и документ о вашем вкладе' }
  ];

  const stories = [
    {
      image: 'https://cdn.poehali.dev/projects/82e7ab39-23a3-45e0-b0e5-9469e9720ad2/files/9e27e22c-414a-419a-ad0b-ba372d27f222.jpg',
      title: 'Семья Петровых',
      description: '47 деревьев посадили вместе с детьми в мае 2024',
      location: 'Подмосковье'
    },
    {
      image: 'https://cdn.poehali.dev/projects/82e7ab39-23a3-45e0-b0e5-9469e9720ad2/files/992588a8-d0eb-4d69-af46-26c8bf0cf566.jpg',
      title: 'Компания "ЭкоТех"',
      description: 'Взяли шефство над 10 гектарами леса',
      location: 'Владимирская область'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/82e7ab39-23a3-45e0-b0e5-9469e9720ad2/files/2ae6cdcd-d820-41c3-aea4-6664701c15df.jpg')`
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            ДеревьЯ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Покупай саженцы — сажай лес.<br />Лес, в который можно вернуться.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              <Icon name="MapPin" className="mr-2" size={20} />
              Выбрать город и посадку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Icon name="Building2" className="mr-2" size={20} />
              Для компаний
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Icon name="Shield" className="mr-2" size={20} />
              Роща славы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Выберите формат участия</h2>
          
          <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Частное лицо</CardTitle>
              <CardDescription className="text-base">Посадите свои деревья и станьте частью живого леса</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-base">Выберите город</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="saplings" className="text-base">Количество саженцев</Label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSaplings(Math.max(1, saplings - 1))}
                  >
                    <Icon name="Minus" size={20} />
                  </Button>
                  <Input
                    id="saplings"
                    type="number"
                    value={saplings}
                    onChange={(e) => setSaplings(Math.max(1, parseInt(e.target.value) || 1))}
                    className="text-center text-lg font-semibold"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSaplings(saplings + 1)}
                  >
                    <Icon name="Plus" size={20} />
                  </Button>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">К оплате</p>
                  <p className="text-4xl font-bold text-primary mb-1">{totalPrice.toLocaleString('ru-RU')} ₽</p>
                  <p className="text-sm text-muted-foreground">
                    {saplings} {saplings === 1 ? 'саженец' : saplings < 5 ? 'саженца' : 'саженцев'} × {pricePerSapling.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
              </div>

              <Button className="w-full text-lg h-12" size="lg">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Оформить участие
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Три истории. Одна земля.</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Лес не лайкают. Его сажают руками.
          </p>

          <div className="space-y-12">
            {emotionalBlocks.map((block, index) => (
              <Card 
                key={index} 
                className={`${block.bgColor} border-none shadow-lg overflow-hidden animate-fade-in hover:shadow-xl transition-shadow`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full shrink-0">
                      <Icon name={block.icon as any} size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{block.title}</h3>
                      <p className="text-lg mb-4 leading-relaxed">{block.text}</p>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">{block.subtext}</p>
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <Button size="lg" className="text-base">
                          {block.buttonText}
                        </Button>
                        <span className="text-sm font-semibold text-primary">{block.price}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Для компаний</h2>
          <p className="text-xl text-center mb-16 opacity-90 max-w-3xl mx-auto">
            Шефство над лесом — это не просто посадка. Это ваша корпоративная культура, ваша репутация, ваш вклад.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {companyLevels.map((level, index) => (
              <Card 
                key={index} 
                className="bg-white text-foreground hover:scale-105 transition-transform animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{level.hectares} га</div>
                  <CardTitle className="text-xl">{level.title}</CardTitle>
                  <CardDescription className="text-base">{level.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {level.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цифры, которые молчать нельзя</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Пока мы лайкаем посты про экологию, лес исчезает. Вот реальная статистика по России.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon name={stat.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-center">
              Каждый год Россия теряет больше 19 миллионов гектаров леса. Восстанавливается — меньше миллиона. 
              <span className="font-bold text-primary"> Мы не можем остановить вырубку, но можем создать новый лес</span> — 
              дерево за деревом, гектар за гектаром.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Истории посадок</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                  <CardDescription className="text-base">{story.description}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    {story.location}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <Icon name="PlayCircle" className="mr-2" size={20} />
              Смотреть все истории и видео
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Как это работает</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            От идеи до дерева — 5 простых шагов
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={step.icon as any} className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Доверие и гарантии</h2>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
            Мы работаем с лесхозами, экологическими организациями и местными администрациями. 
            Каждое дерево учитывается, каждый участок — под контролем.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="pt-6 text-center">
                <Icon name="FileCheck" className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Документы</h3>
                <p className="text-sm opacity-80">Все разрешения и сертификаты</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Users" className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Партнёры</h3>
                <p className="text-sm opacity-80">Проверенные организации</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Camera" className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Отчётность</h3>
                <p className="text-sm opacity-80">Фото и видео каждой посадки</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
            <Icon name="Mail" className="mr-2" size={20} />
            Связаться с нами
          </Button>
        </div>
      </section>

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ДеревьЯ</h3>
              <p className="opacity-80">Покупай саженцы — сажай лес</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@derevya.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center opacity-60 text-sm">
            <p>© 2024 ДеревьЯ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
