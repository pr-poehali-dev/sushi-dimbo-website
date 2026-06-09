import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <span className="text-neon text-sm font-semibold uppercase tracking-widest">Мы рядом</span>
          <h1 className="text-4xl font-display font-bold mt-1">Контакты</h1>
          <p className="text-muted-foreground mt-2">Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-8">Как с нами связаться</h2>
            <div className="space-y-6">
              {[
                { icon: "MapPin", title: "Адрес", lines: ["ул. Японская, 42", "Москва, 115054"] },
                { icon: "Phone", title: "Телефон", lines: ["+7 (999) 123-45-67", "Ежедневно 10:00 – 23:00"] },
                { icon: "Mail", title: "Email", lines: ["hello@dimbo.ru", "Ответим в течение часа"] },
                { icon: "Clock", title: "Режим работы", lines: ["Пн – Пт: 10:00 – 23:00", "Сб – Вс: 11:00 – 23:30"] },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                    <Icon name={item.icon as "MapPin"} size={20} className="text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "MessageCircle", label: "Telegram" },
                  { icon: "Music", label: "TikTok" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm hover:text-neon hover:border-neon transition-colors"
                  >
                    <Icon name={s.icon as "Instagram"} size={16} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-8">Написать нам</h2>
            {sent ? (
              <div className="bg-neon/10 border border-neon/30 rounded-2xl p-8 text-center animate-fade-in-up">
                <Icon name="CheckCircle" size={48} className="text-neon mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Сообщение отправлено!</h3>
                <p className="text-muted-foreground">Мы ответим вам в течение часа.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-neon text-sm hover:underline"
                >
                  Написать ещё
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Имя *</label>
                    <input
                      required
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2.5 rounded-xl bg-card border border-border focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.ru"
                      className="w-full px-4 py-2.5 rounded-xl bg-card border border-border focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Тема</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-card border border-border focus:outline-none focus:border-neon transition-colors text-foreground">
                    <option>Вопрос о заказе</option>
                    <option>Обратная связь</option>
                    <option>Сотрудничество</option>
                    <option>Жалоба</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Сообщение *</label>
                  <textarea
                    required
                    placeholder="Ваше сообщение..."
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl bg-card border border-border focus:outline-none focus:border-neon transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon text-white py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors neon-glow"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Карта-заглушка */}
        <div className="mt-16 bg-card rounded-2xl border border-border overflow-hidden h-64 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Icon name="MapPin" size={40} className="text-neon mx-auto mb-3" />
            <p className="font-medium">ул. Японская, 42, Москва</p>
            <p className="text-sm mt-1">м. Павелецкая, 5 минут пешком</p>
          </div>
        </div>
      </div>
    </div>
  );
}
