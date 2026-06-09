import Icon from "@/components/ui/icon";

const team = [
  { name: "Хироши Ямада", role: "Шеф-повар", exp: "12 лет опыта" },
  { name: "Алексей Морозов", role: "Су-шеф", exp: "8 лет опыта" },
  { name: "Мария Ли", role: "Кондитер", exp: "6 лет опыта" },
];

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/c7507030-7c23-4bf7-a4b6-be22e7b901d5/files/bb1b46b2-404a-4cf8-8eb8-603e17a7a1cd.jpg"
            alt="Ресторан Димбо"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <span className="text-neon text-sm font-semibold uppercase tracking-widest">Наша история</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6">О нас</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            ДИМБО — это место, где японская культура встречается с современным фастфудом.
            Мы создаём вкусы, которые запоминаются.
          </p>
        </div>
      </section>

      {/* Наша история */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Как всё <span className="text-neon">начиналось</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Димбо открылся в 2019 году с простой идеей: сделать японскую кухню доступной,
              быстрой и по-настоящему вкусной. Мы устали от суши-баров, где приходится ждать
              часами — и решили изменить это.
            </p>
            <p className="text-muted-foreground mb-4">
              Наш основатель, влюблённый в японскую культуру, объездил Токио, Осаку и Киото
              в поисках вдохновения. Лучшие рецепты, адаптированные под местные продукты —
              вот что стало основой ДИМБО.
            </p>
            <p className="text-muted-foreground">
              Сегодня мы обслуживаем более 500 заказов в день и продолжаем расти,
              не изменяя главному принципу — каждый ролл должен быть идеальным.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2019", label: "Год основания" },
              { value: "500+", label: "Заказов в день" },
              { value: "150+", label: "Позиций в меню" },
              { value: "4.9★", label: "Средний рейтинг" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="text-3xl font-display font-bold text-neon mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="bg-card border-y border-border py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-neon text-sm font-semibold uppercase tracking-widest">Принципы</span>
            <h2 className="text-3xl font-display font-bold mt-1">Наши ценности</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Leaf", title: "Свежесть", desc: "Ежедневные поставки от проверенных поставщиков" },
              { icon: "Heart", title: "Забота", desc: "Каждый ролл готовим с любовью и вниманием к деталям" },
              { icon: "Zap", title: "Скорость", desc: "Доставка до 30 минут, не теряя в качестве" },
              { icon: "Star", title: "Качество", desc: "Не компрометируем ни на одном из этапов" },
            ].map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={v.icon} size={26} className="text-neon" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-neon text-sm font-semibold uppercase tracking-widest">Люди</span>
          <h2 className="text-3xl font-display font-bold mt-1">Наша команда</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
              <div className="w-20 h-20 rounded-full bg-neon/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="ChefHat" size={32} className="text-neon" />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-neon mt-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.exp}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
