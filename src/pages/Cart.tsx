import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const paymentMethods = [
  { id: "card", label: "Банковская карта", icon: "CreditCard" },
  { id: "cash", label: "Наличные", icon: "Banknote" },
  { id: "sbp", label: "СБП", icon: "Smartphone" },
];

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });

  const deliveryFee = totalPrice >= 1500 ? 0 : 199;
  const total = totalPrice + deliveryFee;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 rounded-full bg-neon/10 flex items-center justify-center mx-auto mb-6 neon-glow animate-pulse-glow">
            <Icon name="CheckCircle" size={48} className="text-neon" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-3">Заказ принят!</h1>
          <p className="text-muted-foreground mb-2">
            Наш менеджер свяжется с вами в течение 5 минут для подтверждения.
          </p>
          <p className="text-muted-foreground mb-8">
            Ожидайте доставку через <span className="text-neon font-semibold">30–45 минут</span>.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-neon text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
          >
            <Icon name="UtensilsCrossed" size={18} />
            Заказать ещё
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0 && step === "cart") {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center mx-auto mb-6">
            <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-3">Корзина пуста</h1>
          <p className="text-muted-foreground mb-8">Добавьте позиции из меню</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-neon text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
          >
            Перейти в меню
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          {step === "checkout" && (
            <button onClick={() => setStep("cart")} className="text-muted-foreground hover:text-foreground">
              <Icon name="ArrowLeft" size={20} />
            </button>
          )}
          <h1 className="text-4xl font-display font-bold">
            {step === "cart" ? `Корзина (${totalItems})` : "Оформление заказа"}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === "cart" ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-card rounded-2xl p-4 flex gap-4 border border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-semibold truncate">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                        >
                          <Icon name="Trash2" size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.weight}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-neon hover:text-neon transition-colors"
                          >
                            <Icon name="Minus" size={14} />
                          </button>
                          <span className="w-6 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-neon text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                          >
                            <Icon name="Plus" size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-neon">{item.price * item.quantity} ₽</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleOrder} className="space-y-6" id="checkout-form">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="font-semibold text-lg mb-4">Данные доставки</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Имя *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Телефон *</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-muted-foreground mb-1.5 block">Адрес доставки *</label>
                      <input
                        required
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="Улица, дом, квартира"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-muted-foreground mb-1.5 block">Комментарий</label>
                      <textarea
                        value={form.comment}
                        onChange={(e) => setForm({ ...form, comment: e.target.value })}
                        placeholder="Код домофона, пожелания..."
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-neon transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="font-semibold text-lg mb-4">Способ оплаты</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {paymentMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPayment(m.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                          payment === m.id
                            ? "border-neon bg-neon/10 text-neon"
                            : "border-border hover:border-neon/50"
                        }`}
                      >
                        <Icon name={m.icon as "CreditCard"} size={20} />
                        <span className="text-sm font-medium">{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Ваш заказ</h2>
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground truncate pr-2">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="shrink-0">{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Сумма заказа</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Доставка</span>
                  <span className={deliveryFee === 0 ? "text-neon" : ""}>
                    {deliveryFee === 0 ? "Бесплатно" : `${deliveryFee} ₽`}
                  </span>
                </div>
                {totalPrice < 1500 && (
                  <p className="text-xs text-muted-foreground">
                    До бесплатной доставки: {1500 - totalPrice} ₽
                  </p>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Итого</span>
                  <span className="text-neon">{total} ₽</span>
                </div>
              </div>

              {step === "cart" ? (
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full mt-6 bg-neon text-white py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors neon-glow"
                >
                  Оформить заказ
                </button>
              ) : (
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full mt-6 bg-neon text-white py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors neon-glow"
                >
                  Подтвердить заказ
                </button>
              )}

              <Link
                to="/menu"
                className="block text-center text-sm text-muted-foreground hover:text-neon mt-3 transition-colors"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
