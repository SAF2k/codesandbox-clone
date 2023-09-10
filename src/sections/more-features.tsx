"use client";


import { IFeature, content } from "@Utils/features-data";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function MoreFeatures() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto grid w-full max-w-[120rem] grid-cols-3 gap-40 py-96"
    >
      {content.map(({ icon: Icon, title, text }: IFeature) => (
        <div key={title}>
          <span className="padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515] hover:bg-[#222222]">
            <Icon className="h-12 w-12" />
          </span>
          <h3 className="mb-2 text-xl text-white">{title}</h3>
          <p className="text-md">{text}</p>
        </div>
      ))}
    </motion.section>
  );
}
