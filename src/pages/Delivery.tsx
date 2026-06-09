import Icon from "@/components/ui/icon";

const zones = [
  { zone: "Зона 1", area: "Центр города", time: "25–35 мин", price: "Бесплатно от 800 ₽" },
  { zone: "Зона 2", area: "Спальные районы", time: "35–50 мин", price: "Бесплатно от 1200 ₽" },
  { zone: "Зона 3", area: "Пригород", time: "50–70 мин", price: "Бесплатно от 2000 ₽" },
];

const steps = [
  { icon: "ShoppingCart", title: "Оформите заказ", desc: "Выберите блюда из меню и добавьте в корзину" },
  { icon: "Phone", title: "Подтверждение", desc: "Менеджер перезвонит в течение 5 минут" },
  { icon: "ChefHat", title: "Готовим", desc: "Свежо приготовим ваш заказ" },
  { icon: "Bike", title: "Доставка", desc: "Курьер привезёт прямо к двери" },
];

export default function Delivery() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <span className="text-neon text-sm font-semibold uppercase tracking-widest">Быстро и удобно</span>
          <h1 className="text-4xl font-display font-bold mt-1">Доставка</h1>
          <p className="text-muted-foreground mt-2">Доставляем свежие суши прямо к вашей двери</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Как это работает */}
        <section>
          <div className="text-center mb-10">
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">Просто</span>
            <h2 className="text-3xl font-display font-bold mt-1">Как сделать заказ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-neon/10 border-2 border-neon/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Icon name={step.icon as "ShoppingCart"} size={26} className="text-neon" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px border-t border-dashed border-neon/30" />
                )}
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Зоны доставки */}
        <section>
          <div className="text-center mb-10">
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">Охват</span>
            <h2 className="text-3xl font-display font-bold mt-1">Зоны доставки</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zones.map((z, idx) => (
              <div key={z.zone} className={`rounded-2xl p-6 border card-hover ${idx === 0 ? "border-neon bg-neon/5" : "border-border bg-card"}`}>
                <div className={`text-sm font-bold uppercase tracking-widest mb-3 ${idx === 0 ? "text-neon" : "text-muted-foreground"}`}>
                  {z.zone}
                </div>
                <h3 className="text-xl font-semibold mb-4">{z.area}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-neon" />
                    <span className="text-muted-foreground">{z.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Package" size={16} className="text-neon" />
                    <span className="text-muted-foreground">{z.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Условия */}
        <section className="bg-card rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-display font-bold mb-6">Условия доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "Clock", title: "Время работы", desc: "Ежедневно с 10:00 до 23:00. Последний заказ принимаем в 22:30." },
              { icon: "Banknote", title: "Минимальный заказ", desc: "Минимальная сумма заказа — 500 ₽. При заказе от 1500 ₽ доставка бесплатна." },
              { icon: "Thermometer", title: "Температурный режим", desc: "Доставляем в специальных термо-сумках для сохранения свежести и температуры." },
              { icon: "RotateCcw", title: "Возврат и замена", desc: "Если что-то не так — позвоните нам. Заменим или вернём деньги в течение часа." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon as "Clock"} size={18} className="text-neon" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
