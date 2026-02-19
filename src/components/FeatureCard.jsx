import { feature } from "../lib/data";
import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {feature.map((item) => (
        <div key={item.id} className="w-full ">
          <Image
            src={item.bg}
            alt={item.text}
            width={500}
            height={200}
            className="object-contain rounded-2xl "
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
