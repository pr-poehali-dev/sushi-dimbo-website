import { useState } from "react";
import { menuItems, categories } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

export default function Menu() {
  const { addItem, items } = useCart();
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((item) => {
    const matchCat = activeCategory === "Все" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const getQty = (id: number) => items.find((i) => i.id === id)?.quantity ?? 0;

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-10">
          <span className="text-neon text-sm font-semibold uppercase tracking-widest">Наше</span>
          <h1 className="text-4xl font-display font-bold mt-1">Меню</h1>
          <p className="text-muted-foreground mt-2">Свежие суши и фастфуд каждый день</p>

          <div className="mt-6 relative max-w-md">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск по меню..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-background border border-border text-sm focus:outline-none focus:border-neon transition-colors"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 pb-0 overflow-x-auto">
          <div className="flex gap-2 pb-0 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-t-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-neon text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-30" />
            <p>Ничего не найдено</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => {
              const qty = getQty(item.id);
              return (
                <div key={item.id} className="bg-card rounded-2xl overflow-hidden card-hover border border-border group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.isHit && (
                        <span className="bg-neon text-white text-xs px-2.5 py-1 rounded-full font-semibold">Хит</span>
                      )}
                      {item.isNew && (
                        <span className="bg-neon-pink text-white text-xs px-2.5 py-1 rounded-full font-semibold">Новинка</span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.weight}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-neon">{item.price} ₽</span>
                      {qty === 0 ? (
                        <button
                          onClick={() => addItem(item)}
                          className="flex items-center gap-1.5 bg-neon text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors"
                        >
                          <Icon name="Plus" size={14} />
                          В корзину
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-neon">{qty} шт</span>
                          <button
                            onClick={() => addItem(item)}
                            className="w-8 h-8 rounded-full bg-neon text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                          >
                            <Icon name="Plus" size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
