import Image from "next/image";
import AnimatedTitle from "../../_components/shared/AnimatedTitle";

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <Image
        src="/images/about/hero.jpg"
        alt="Fresh Finds Market Farm"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <div className="max-w-3xl">
          <AnimatedTitle
            title="Our Story"
            subtitle="PURE ORGANIX STORE"
            accent="emerald"
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
