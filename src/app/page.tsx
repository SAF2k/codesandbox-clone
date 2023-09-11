import CollaborationTwo from "@Sections/collaboration-two";
import Collaboration from "@Sections/collaboration";
import Features from "@Sections/features";
import Hero from "@Sections/hero";
import MoreFeatures from "@Sections/more-features";
import StreamlinedText from "@Sections/streamlined-text";
import NoLockIn from "@/sections/no-lockin";

export default function Home() {
  return (
    <main className="hidden lg:block">
      <Hero />
      <div className="relative z-10 w-full">
        <Collaboration />
        <CollaborationTwo />
        <StreamlinedText />
        <Features />
        <MoreFeatures />
        <NoLockIn />
      </div>
    </main>
  );
}
