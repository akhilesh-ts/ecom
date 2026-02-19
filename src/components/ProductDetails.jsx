"use client";
/* eslint-disable @next/next/no-img-element */
import { useCart } from "../lib/store";
import { useState } from "react";

const ProductDetails = ({ id, image, name, description, price }) => {
  const { cartItems, addItem } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handelCart = () => {
    const productDetails = {
      id,
      name,
      image,
      description,
      price,
      quantity,
    };
    addItem(productDetails);
  };

  return (
    <>
      <div className="w-full grid grid-cols-[1.5fr_3fr] gap-10">
        <div className=" p-3 shadow-2xl rounded-xl">
          <img
            src={image}
            alt="image"
            width={500}
            height={200}
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-extrabold">{name}</h1>
          <p className="text-xl font-mono text-gray-500">{description}</p>
          <h1 className="text-2xl ">₹{price}</h1>
          <div className="w-1/3 flex items-center justify-around">
            <button
              disabled={quantity === 0}
              onClick={() => setQuantity((prev) => prev - 1)}
              className="px-8 py-2 border-2 border-black  text-black text-lg font-bold rounded-2xl cursor-pointer"
            >
              
            </button>
            <span className="px-8 py-2 border-2 border-black  text-black rounded-2xl">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-8 py-2 border-2 border-black  text-black text-lg font-bold rounded-2xl cursor-pointer"
            >
              +
            </button>
          </div>
          <button
            onClick={handelCart}
            className="px-8 py-2 w-1/2 bg-black text-white text-lg font-mono rounded-2xl cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
