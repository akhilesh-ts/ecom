import ProductCard from "../components/ProductCard.jsx";

import { stripe } from "../lib/stripe.js";

const FeaturedProducts = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 4,
  });

  console.log(products);
  return (
    <>
      <div className="w-full   grid grid-cols-4 gap-10">
        {products.data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            bg={item.images[0]}
            descrption={item.description}
            price={item.default_price.unit_amount/100}
          />
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
