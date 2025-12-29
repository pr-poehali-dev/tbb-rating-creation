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
    name: 'Fonbet',
    freebet: 'до 15 000 ₽',
    rating: 9.5,
    features: ['Фрибет без депозита', 'Live-ставки', 'Лучшая линия'],
    logo: '⚡'
  },
  {
    id: 2,
    name: 'Марафонбет',
    freebet: 'до 25 000 ₽',
    rating: 9.2,
    features: ['100% к первому депозиту', 'Широкая роспись', 'Статистика матчей'],
    logo: '🎯'
  },
  {
    id: 3,
    name: 'Betboom',
    freebet: 'до 10 000 ₽',
    rating: 9.0,
    features: ['5 фрибетов новичкам', 'Кешбэк до 20%', 'Бонусы за киберспорт'],
    logo: '🚀'
  },
  {
    id: 4,
    name: 'Winline',
    freebet: '3 000 ₽',
    rating: 8.8,
    features: ['Фрибет за регистрацию', 'Программа лояльности', 'Быстрый вывод'],
    logo: '🏆'
  },
  {
    id: 5,
    name: 'Betcity',
    freebet: 'до 3 000 ₽',
    rating: 8.6,
    features: ['Страховка первой ставки', 'Надежность', 'Промокоды'],
    logo: '💎'
  },
  {
    id: 6,
    name: 'Leon',
    freebet: 'до 20 000 ₽',
    rating: 8.5,
    features: ['Бонус на первый депозит', 'Простой интерфейс', 'Поддержка 24/7'],
    logo: '⭐'
  }
];

const reviews: Review[] = [
  {
    id: 1,
    name: 'Александр М.',
    bookmaker: 'Fonbet',
    rating: 5,
    text: 'Лучшая контора! Фрибет 15000 без депозита пришел сразу после регистрации. Live-ставки работают отлично!',
    date: '2 дня назад'
  },
  {
    id: 2,
    name: 'Дмитрий К.',
    bookmaker: 'Марафонбет',
    rating: 5,
    text: 'Получил 25000 на первый депозит, отыграл легко. Линия огромная, коэффициенты высокие.',
    date: '5 дней назад'
  },
  {
    id: 3,
    name: 'Михаил П.',
    bookmaker: 'Betboom',
    rating: 5,
    text: 'Программа для новичков супер — 5 фрибетов по очереди. Кешбэк 20% радует каждую неделю!',
    date: '1 неделю назад'
  },
  {
    id: 4,
    name: 'Сергей Л.',
    bookmaker: 'Winline',
    rating: 4,
    text: 'Фрибет 3000 за регистрацию без проблем. Вывод быстрый, программа лояльности работает.',
    date: '3 дня назад'
  }
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
                Топ-6 букмекеров с фрибетами
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