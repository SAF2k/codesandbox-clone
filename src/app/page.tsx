import CollaborationTwo from "@Sections/collaboration-two";
import Collaboration from "@Sections/collaboration";
import Hero from "@Sections/hero";
import StreamlinedText from "@Sections/streamlined-text";
import MoreFeatures from "@Sections/more-features";

export default function Home() {
  return (
    <main className="hidden lg:block">
      <Hero />
      <div className="relative z-10 w-full">
        <Collaboration />
        <CollaborationTwo />
        <StreamlinedText />
        <MoreFeatures />
      </div>
    </main>
  );
}
