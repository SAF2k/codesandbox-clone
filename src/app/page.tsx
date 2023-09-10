import Collaboration from "@Sections/collaboration";
import Hero from "@Sections/hero";

export default function Home() {
  return (
    <main className="hidden md:block">
      <Hero />
      <div className="relative z-10 w-full">
        <Collaboration />
      </div>
    </main>
  );
}
