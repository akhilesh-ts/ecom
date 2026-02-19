import ProductCard from "../../components/ProductCard";
import React from "react";
import { stripe } from "../../lib/stripe";

const page = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 20,
  });
  return (
    <div className="w-full h-lvh  top-18 flex  gap-5 p-5">
      <div className="w-1/5 bg-gray-200">filters</div>
      <div className="w-full  grid grid-cols-4 gap-5 overflow-auto">
        {products.data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            bg={item.images[0]}
            descrption={item.description}
            price={item.default_price.unit_amount / 100}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
