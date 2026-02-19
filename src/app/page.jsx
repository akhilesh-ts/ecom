import FeatureCard from "../components/FeatureCard";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import Header from "../components/Header";

export default async function Home() {
  return (
    <>
      <div className="w-full h-lvh  px-4 py-10 ">
        <Header />
        <FeatureCard />
        <h1 className="text-5xl font-bold text-gray-500 text-center mt-18 mb-18">
          LATEST <span className="underline">ARRIVALS</span>
        </h1>

        <FeaturedProducts />
      </div>
    </>
  );
}
