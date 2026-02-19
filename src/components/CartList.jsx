/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useCart } from "../lib/store";

const CartList = () => {
  const { cartItems } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-gray-500">
            Add some products to continue shopping
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <h1 className="px-6 py-6 text-2xl font-bold">Shopping Cart</h1>

      {/* Layout */}
      <div className="px-6 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Cart Items ({cartItems.length})
          </h2>

          <div className="max-h-[70vh] overflow-y-scroll no-scrollbar pr-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border rounded-lg mb-4"
              >
                {/* Image */}
                <div className="w-24 h-24 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm font-semibold line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <p className="font-bold">₹{item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 border rounded">−</button>

                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button className="w-8 h-8 border rounded">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHECKOUT */}
        <div className="bg-white rounded-xl p-6 shadow-sm h-fit sticky top-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
