import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-display font-bold text-neon neon-text tracking-widest uppercase">
              ДИМБО
            </span>
            <p className="mt-3 text-muted-foreground text-sm max-w-xs">
              Японская кухня нового поколения. Свежие ингредиенты, яркие вкусы,
              быстрая доставка.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-neon transition-colors"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-neon transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-neon transition-colors"
              >
                <Icon name="Phone" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Навигация</h4>
            <ul className="space-y-2">
              {[
                { to: "/menu", label: "Меню" },
                { to: "/delivery", label: "Доставка" },
                { to: "/about", label: "О нас" },
                { to: "/reviews", label: "Отзывы" },
                { to: "/contacts", label: "Контакты" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-neon mt-0.5 shrink-0" />
                <span>ул. Японская, 42, Москва</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-neon shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="text-neon shrink-0" />
                <span>Пн–Вс: 10:00 – 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © 2024 ДИМБО. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            Минимальная сумма заказа: 500 ₽
          </p>
        </div>
      </div>
    </footer>
  );
}
