import { Link } from "react-router-dom";
import { menuItems } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const hits = menuItems.filter((i) => i.isHit).slice(0, 4);

export default function Home() {
  const { addItem } = useCart();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/c7507030-7c23-4bf7-a4b6-be22e7b901d5/files/a2961218-7877-4c19-b7ea-4ba24156bec4.jpg"
            alt="Суши Димбо"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-sm text-neon font-medium">Доставка за 30 минут</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in-up delay-100">
              СУШИ & <br />
              <span className="text-neon neon-text">ФАСТФУД</span>
              <br />
              <span className="text-neon-pink">ДИМБО</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-in-up delay-200">
              Японская кухня нового поколения. Свежие ингредиенты, яркие вкусы
              и быстрая доставка прямо к вашей двери.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 bg-neon text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all neon-glow animate-pulse-glow"
              >
                <Icon name="UtensilsCrossed" size={20} />
                Смотреть меню
              </Link>
              <Link
                to="/delivery"
                className="inline-flex items-center justify-center gap-2 glass border border-neon/30 text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:border-neon transition-all"
              >
                <Icon name="Bike" size={20} />
                Условия доставки
              </Link>
            </div>

            <div className="flex gap-8 mt-12 animate-fade-in-up delay-400">
              {[
                { value: "30 мин", label: "Доставка" },
                { value: "150+", label: "Позиций" },
                { value: "4.9★", label: "Рейтинг" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-bold text-neon">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={32} className="text-neon opacity-60" />
        </div>
      </section>

      {/* Хиты продаж */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">Популярное</span>
            <h2 className="text-4xl font-display font-bold mt-1">Хиты продаж</h2>
          </div>
          <Link
            to="/menu"
            className="hidden md:flex items-center gap-2 text-neon hover:underline text-sm font-medium"
          >
            Всё меню <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hits.map((item) => (
            <div key={item.id} className="bg-card rounded-2xl overflow-hidden card-hover border border-border group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.isHit && (
                  <span className="absolute top-3 left-3 bg-neon text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Хит
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-neon">{item.price} ₽</span>
                    <span className="text-xs text-muted-foreground ml-2">{item.weight}</span>
                  </div>
                  <button
                    onClick={() => addItem(item)}
                    className="w-9 h-9 rounded-full bg-neon text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                  >
                    <Icon name="Plus" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-neon hover:underline font-medium"
          >
            Всё меню <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-card border-y border-border py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">Почему Димбо</span>
            <h2 className="text-4xl font-display font-bold mt-1">Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрая доставка",
                desc: "Доставляем в течение 30 минут по всему городу. Отслеживайте заказ в реальном времени.",
              },
              {
                icon: "Leaf",
                title: "Свежие ингредиенты",
                desc: "Только свежая рыба и морепродукты. Поставки ежедневно от проверенных поставщиков.",
              },
              {
                icon: "ChefHat",
                title: "Мастера своего дела",
                desc: "Наши шеф-повара с опытом более 10 лет готовят каждый ролл с душой.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center p-6 glass rounded-2xl card-hover">
                <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Icon name={f.icon} size={28} className="text-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-muted-foreground mb-8">
            Первый заказ — скидка 10% по промокоду{" "}
            <span className="text-neon font-bold">ДИМБО10</span>
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-neon text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all neon-glow"
          >
            Заказать сейчас
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}