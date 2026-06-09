import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const links = [
  { to: "/", label: "Главная" },
  { to: "/menu", label: "Меню" },
  { to: "/delivery", label: "Доставка" },
  { to: "/about", label: "О нас" },
  { to: "/reviews", label: "Отзывы" },
  { to: "/contacts", label: "Контакты" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-neon neon-text tracking-widest uppercase">
            ДИМБО
          </span>
          <span className="text-xs text-muted-foreground font-medium hidden sm:block">
            Sushi & Fast Food
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-neon ${
                location.pathname === l.to
                  ? "text-neon"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-neon text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors"
          >
            <Icon name="ShoppingCart" size={16} />
            <span className="hidden sm:inline">Корзина</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-neon-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-dark border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-neon ${
                  location.pathname === l.to
                    ? "text-neon"
                    : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
