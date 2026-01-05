"use client";

import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/deisishop/productCard";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return <p className="text-gray-500">Carrinho vazio.</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">🛒 Carrinho</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {cart.map((product, idx) => (
          <ProductCard
            key={`cart-${idx}-${product.id}`}
            product={product}
            removeFromCart={removeFromCart}
            inCart
          />
        ))}
      </div>

      <div className="text-right text-2xl font-bold">
        Total: {total.toFixed(2)} €
      </div>
    </div>
  );
}
