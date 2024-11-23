import Benefits from "@/app/_components/Benefits";
import Categories from "@/app/_components/Categories";
import FeaturedProducts from "@/app/_components/FeaturedProducts";
import Hero from "@/app/_components/Hero";
import Newsletter from "@/app/_components/Newsletter";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Categories />
      <Newsletter />
    </section>
  );
}
