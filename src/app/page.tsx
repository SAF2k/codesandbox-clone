import CollaborationTwo from "@Sections/collaborationTwo";
import Collaboration from "@Sections/collaboration";
import Hero from "@Sections/hero";
import StreamlinedText from "@Sections/streamlined-text";

export default function Home() {
  return (
    <main className="hidden lg:block">
      <Hero />
      <div className="relative z-10 w-full">
        <Collaboration />
        <CollaborationTwo />
        <StreamlinedText />
      </div>
    </main>
  );
}
