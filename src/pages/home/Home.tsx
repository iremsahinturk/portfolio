import { Vodafone } from "./sections/Vodafone";
import { Mavi } from "./sections/Mavi";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vodafone />
      <Mavi />
      <footer className="bg-indigo-800 pb-10" />
    </div>
  );
}
