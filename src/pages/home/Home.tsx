import { Vodafone } from "./components/Vodafone";
import { Mavi } from "./components/Mavi";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Vodafone />
      <Mavi />
      <footer className="bg-indigo-800 pb-10" />
    </div>
  );
}
