import { Vodafone } from "./sections/Vodafone";
import { Mavi } from "./sections/Mavi";
import { Hero } from "./sections/Hero";
import { Vakifbank } from "./sections/Vakifbank";

export default function Work() {
  return (
    <div className="min-h-screen font-light">
      <Hero />
      <Mavi />
      <Vakifbank />
      <Vodafone />
    </div>
  );
}
