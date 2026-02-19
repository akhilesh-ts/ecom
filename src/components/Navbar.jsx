import Link from "next/link";
import { Button } from "../components/ui/button";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between p-5  sticky top-0 bg-white text-black shadow-2xl">
        <div>
          <Link href="/" className="text-xl font-bold cursor-pointer">
            Basel&co.
          </Link>
        </div>

        <div>
          <div className="flex items-center justify-between gap-10 cursor-pointer  text-md">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5">
          <button className="relative">
            <Link href="/checkout">
              <ShoppingCart size={24} />
            </Link>

            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
              3
            </span>
          </button>

          <Button className="px-4 py-2 bg-black rounded-lg cursor-pointer text-white">
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
