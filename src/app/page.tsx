import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@Sections/hero"));
const Collaboration = dynamic(() => import("@Sections/collaboration"), {
  ssr: false,
});
const CollaborationTwo = dynamic(() => import("@Sections/collaboration-two"), {
  ssr: false,
});
const StreamlinedText = dynamic(() => import("@Sections/streamlined-text"), {
  ssr: false,
});
const Features = dynamic(() => import("@Sections/features"), {
  ssr: false,
});
const MoreFeatures = dynamic(() => import("@Sections/more-features"), {
  ssr: false,
});
const NoLockIn = dynamic(() => import("@Sections/no-lockin"));
const Footer = dynamic(() => import("@Sections/footer"));

export default function Home() {
  return (
    <main className="hidden md:block">
      <Hero />
      <div className="relative z-10 w-full">
        <Collaboration />
        <CollaborationTwo />
        <StreamlinedText />
        <Features />
        <MoreFeatures />
        <NoLockIn />
        <Footer />
      </div>
    </main>
  );
}
