'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('pk-cart');
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const getCheckoutUrl = () => {
    const base = 'https://1ryy1e-at.myshopify.com/cart/';
    const items = cartItems.map(item => `${item.variantId}:${item.quantity}`).join(',');
    return base + items;
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/shop" className="underline">Go shopping</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, i) => (
              <li key={i} className="border rounded-xl p-4 flex gap-4 items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Qty: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={getCheckoutUrl()}
            target="_blank"
            className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
          >
            Proceed to Checkout
          </a>
        </>
      )}
    </main>
  );
}