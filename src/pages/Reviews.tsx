import { useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  { id: 1, name: "Анна К.", rating: 5, date: "12 мая 2024", text: "Заказываю у Димбо уже полгода — каждый раз восторг! Ролл Дракон просто шедевр. Доставка всегда вовремя, упаковка отличная.", avatar: "А" },
  { id: 2, name: "Михаил Р.", rating: 5, date: "8 мая 2024", text: "Лучшие суши в городе, без преувеличения. Свежая рыба, щедрые порции. Сет на двоих — идеальный вариант для романтического вечера.", avatar: "М" },
  { id: 3, name: "Елена В.", rating: 5, date: "3 мая 2024", text: "Огненный Феникс — это просто бомба! Острый, ароматный, невозможно оторваться. Заказала уже третий раз за месяц.", avatar: "Е" },
  { id: 4, name: "Дмитрий С.", rating: 4, date: "28 апреля 2024", text: "Отличное кафе, вкусно и быстро. Единственное — хотелось бы больше веганских позиций в меню. В остальном — всё на высшем уровне.", avatar: "Д" },
  { id: 5, name: "Ксения Л.", rating: 5, date: "20 апреля 2024", text: "Матча латте + нигири с тунцом = идеальный обед. Мисо суп тоже отменный. Ребята знают своё дело!", avatar: "К" },
  { id: 6, name: "Артём Н.", rating: 5, date: "15 апреля 2024", text: "Заказывал сет Димбо Premium на день рождения — все гости были в восторге. Красиво оформили, всё свежее. Спасибо!", avatar: "А" },
];

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <span className="text-neon text-sm font-semibold uppercase tracking-widest">Мнения гостей</span>
          <h1 className="text-4xl font-display font-bold mt-1">Отзывы</h1>
          <div className="flex items-center gap-6 mt-4">
            <div>
              <span className="text-5xl font-display font-bold text-neon">{avg}</span>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} name="Star" size={16} className={s <= Math.round(Number(avg)) ? "text-neon-yellow" : "text-muted"} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{reviews.length} отзывов</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="ml-auto flex items-center gap-2 bg-neon text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
            >
              <Icon name="PenLine" size={16} />
              Написать отзыв
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {showForm && !submitted && (
          <div className="bg-card rounded-2xl border border-neon/30 p-6 mb-10 animate-fade-in-up">
            <h2 className="font-semibold text-lg mb-4">Ваш отзыв</h2>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setShowForm(false); }}>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground mb-2 block">Оценка</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onMouseEnter={() => setHovered(s)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setRating(s)}
                    >
                      <Icon
                        name="Star"
                        size={28}
                        className={s <= (hovered || rating) ? "text-neon-yellow" : "text-muted-foreground"}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  required
                  placeholder="Ваше имя"
                  className="px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors"
                />
                <input
                  placeholder="Ваш город (необязательно)"
                  className="px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors"
                />
              </div>
              <textarea
                required
                placeholder="Расскажите о вашем опыте..."
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors resize-none mb-4"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-neon text-white px-8 py-2.5 rounded-full font-semibold hover:bg-orange-500 transition-colors"
                >
                  Отправить
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-2.5 rounded-full border border-border hover:border-neon transition-colors text-sm"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        )}

        {submitted && (
          <div className="bg-neon/10 border border-neon/30 rounded-2xl p-6 mb-10 flex items-center gap-4 animate-fade-in-up">
            <Icon name="CheckCircle" size={24} className="text-neon" />
            <p className="font-medium">Спасибо за отзыв! Мы опубликуем его после проверки.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-card rounded-2xl p-6 border border-border card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon text-white font-bold flex items-center justify-center">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icon key={s} name="Star" size={12} className={s <= r.rating ? "text-neon-yellow" : "text-muted"} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
