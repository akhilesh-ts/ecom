import ProductDetails from "../../../components/ProductDetails.jsx";
import { stripe } from "../../../lib/stripe.js";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });



  return (
    <div className="p-10 w-full  ">
      <ProductDetails id={product.id} image={product.images[0]} name={product.name} description={product.description} price={product.default_price.unit_amount/100} />
    </div>
  );
};

export default page;
