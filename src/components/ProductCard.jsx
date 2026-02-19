/* eslint-disable @next/next/no-img-element */
import { Button } from "../components/ui/button";
import Link from "next/link";

const ProductCard = ({ name, bg, price, descrption, id }) => {
  return (
    <>
      <div className=" shadow-2xl rounded-xl p-5">
        <div>
          <img
            src={bg}
            alt="image"
            width={300}
            height={100}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm font-mono text-gray-500 truncate">
            {descrption}
          </p>
          <h2 className="text-black font-mono">₹ {price}</h2>
          <Link href={`/products/${id}`}>
            <Button className="bg-black text-white w-full cursor-ponter">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
