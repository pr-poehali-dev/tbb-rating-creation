import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Bookmaker {
  id: number;
  name: string;
  freebet: string;
  rating: number;
  features: string[];
  logo: string;
}

interface Review {
  id: number;
  name: string;
  bookmaker: string;
  rating: number;
  text: string;
  date: string;
}

const bookmakers: Bookmaker[] = [
  {
    id: 1,
    name: 'Winline',
    freebet: '10 000 ₽',
    rating: 9.5,
    features: ['Быстрый вывод', 'Высокие коэффициенты', 'Мобильное приложение'],
    logo: '🏆'
  },
  {
    id: 2,
    name: 'Fonbet',
    freebet: '15 000 ₽',
    rating: 9.3,
    features: ['Лучшая линия', 'Cashout', 'Live-ставки'],
    logo: '⚡'
  },
  {
    id: 3,
    name: 'Марафонбет',
    freebet: '12 000 ₽',
    rating: 9.1,
    features: ['Широкая роспись', 'Бонусы на экспрессы', 'Статистика'],
    logo: '🎯'
  },
  {
    id: 4,
    name: 'Pari',
    freebet: '8 000 ₽',
    rating: 8.8,
    features: ['Быстрая регистрация', 'Акции каждый день', 'Стримы матчей'],
    logo: '🔥'
  },
  {
    id: 5,
    name: 'Betcity',
    freebet: '7 500 ₽',
    rating: 8.5,
    features: ['Надежность', 'Программа лояльности', 'Киберспорт'],
    logo: '💎'
  },
  {
    id: 6,
    name: 'Leon',
    freebet: '6 000 ₽',
    rating: 8.3,
    features: ['Простой интерфейс', 'Быстрые выплаты', 'Поддержка 24/7'],
    logo: '⭐'
  },
  {
    id: 7,
    name: 'Betboom',
    freebet: '5 000 ₽',
    rating: 8.0,
    features: ['Промокоды', 'Бустеры коэффициентов', 'Кешбэк'],
    logo: '🚀'
  }
];

const reviews: Review[] = [
  {
    id: 1,
    name: 'Александр М.',
    bookmaker: 'Winline',
    rating: 5,
    text: 'Отличный фрибет! Отыграл за неделю, вывел без проблем. Коэффициенты реально высокие.',
    date: '2 дня назад'
  },
  {
    id: 2,
    name: 'Дмитрий К.',
    bookmaker: 'Fonbet',
    rating: 5,
    text: 'Лучшая контора для live-ставок. Фрибет пришел моментально после регистрации.',
    date: '5 дней назад'
  },
  {
    id: 3,
    name: 'Михаил П.',
    bookmaker: 'Марафонбет',
    rating: 4,
    text: 'Хорошие условия отыгрыша фрибета. Линия огромная, особенно по футболу.',
    date: '1 неделю назад'
  },
  {
    id: 4,
    name: 'Сергей Л.',
    bookmaker: 'Pari',
    rating: 5,
    text: 'Самая быстрая регистрация! Фрибет активировали за минуту. Рекомендую!',
    date: '3 дня назад'
  }
];

const comparisonData = [
  { param: 'Сумма фрибета', winline: '10 000 ₽', fonbet: '15 000 ₽', marathon: '12 000 ₽', pari: '8 000 ₽' },
  { param: 'Вейджер', winline: 'x5', fonbet: 'x7', marathon: 'x6', pari: 'x5' },
  { param: 'Срок отыгрыша', winline: '30 дней', fonbet: '60 дней', marathon: '45 дней', pari: '30 дней' },
  { param: 'Мин. коэффициент', winline: '1.50', fonbet: '1.75', marathon: '1.60', pari: '1.50' },
  { param: 'Вывод средств', winline: '24 часа', fonbet: '12 часов', marathon: '24 часа', pari: '48 часов' }
];

export default function Index() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ 
          backgroundImage: `url('https://cdn.poehali.dev/projects/7210fa64-44e1-4996-bd0b-503c82ec94d5/files/c0b91766-2f4d-4923-aa6f-cbee366fcd87.jpg')`
        }}
      />

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <h1 className="text-6xl md:text-7xl font-heading font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                TBB
              </span>{' '}
              <span className="text-white">RATING</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium">
              The Best Bet — рейтинг лучших фрибетов букмекеров
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 space-y-24">
          <section 
            id="rating-section"
            data-animate
            className={`transition-all duration-700 ${
              isVisible['rating-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Топ-7 букмекеров с фрибетами
              </h2>
              <p className="text-slate-400 text-lg">
                Актуальные предложения от лучших букмекерских контор России
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmakers.map((bk, index) => (
                <Card 
                  key={bk.id}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-5xl">{bk.logo}</div>
                      <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                        <Icon name="Star" size={14} className="mr-1" />
                        {bk.rating}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-heading text-white">{bk.name}</CardTitle>
                    <CardDescription className="text-emerald-400 text-xl font-semibold">
                      Фрибет {bk.freebet}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {bk.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-300 text-sm">
                          <Icon name="CheckCircle2" size={16} className="mr-2 text-emerald-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold text-lg py-6 shadow-lg shadow-emerald-500/30"
                    >
                      <Icon name="Gift" size={20} className="mr-2" />
                      ЗАБРАТЬ ФРИБЕТ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section 
            id="comparison-section"
            data-animate
            className={`transition-all duration-700 ${
              isVisible['comparison-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Сравнение условий
              </h2>
              <p className="text-slate-400 text-lg">
                Детальное сравнение топ-4 букмекеров по ключевым параметрам
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900/70">
                    <tr>
                      <th className="px-6 py-4 text-left text-slate-300 font-semibold">Параметр</th>
                      <th className="px-6 py-4 text-center text-slate-300 font-semibold">Winline</th>
                      <th className="px-6 py-4 text-center text-slate-300 font-semibold">Fonbet</th>
                      <th className="px-6 py-4 text-center text-slate-300 font-semibold">Марафонбет</th>
                      <th className="px-6 py-4 text-center text-slate-300 font-semibold">Pari</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr 
                        key={index} 
                        className={`${index % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-900/30'} hover:bg-slate-700/50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-medium text-white">{row.param}</td>
                        <td className="px-6 py-4 text-center text-slate-300">{row.winline}</td>
                        <td className="px-6 py-4 text-center text-slate-300">{row.fonbet}</td>
                        <td className="px-6 py-4 text-center text-slate-300">{row.marathon}</td>
                        <td className="px-6 py-4 text-center text-slate-300">{row.pari}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <Icon name="Info" size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-white">Важно:</span> Условия отыгрыша фрибетов могут меняться. 
                Актуальную информацию уточняйте на сайте букмекера.
              </p>
            </div>
          </section>

          <section 
            id="reviews-section"
            data-animate
            className={`transition-all duration-700 ${
              isVisible['reviews-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Отзывы игроков
              </h2>
              <p className="text-slate-400 text-lg">
                Реальные отзывы пользователей о фрибетах и букмекерах
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <Card 
                  key={review.id}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white">{review.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {review.bookmaker} • {review.date}
                        </CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="container mx-auto px-4 py-12 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl font-heading font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                TBB RATING
              </span>
            </div>
            <p className="text-slate-400">
              The Best Bet — ваш гид в мире ставок на спорт
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <span>© 2024 TBB Rating</span>
              <span>•</span>
              <span>18+</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
