import {
  Flow,
  Intellisense,
  Keyboard,
  MagicBranch,
  Prebuilds,
  Preview,
} from "@/icons";
import React from "react";

export interface IFeature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

export const content:IFeature[] = [
  {
    icon: Prebuilds,
    title: "Prebuilds",
    text: "CodeSandbox continuously prebuilds your branches. This means no more waiting for dependencies to be downloaded and builds to finish.",
  },
  {
    icon: Intellisense,
    title: "IntelliSense",
    text: "Go beyond syntax highlighting and autocomplete. With smart completions based on variable types, function definitions, and imported modules.",
  },
  {
    icon: Flow,
    title: "Built for flow",
    text: "A completely redesigned experience to keep you in flow.",
  },
  {
    icon: MagicBranch,
    title: "Magic Branch Management",
    text: "Organize your development workflow and help your team move work forward",
  },
  {
    icon: Keyboard,
    title: "Keyboard first design",
    text: "Quick access makes for an efficient workflow. Navigate quickly with our extensive keyboard shortcuts.",
  },
  {
    icon: Preview,
    title: "Live preview",
    text: "See changes as you make them. With Hot reload Previews see your changes instantly. ",
  },
];
