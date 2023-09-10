import Collaboration from "@/sections/collaboration";
import Hero from "@Sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 w-full">
        <Collaboration />
      </div> 
    </main>
  )
}
