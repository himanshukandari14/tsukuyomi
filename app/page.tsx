
import { DotBackgroundDemo } from "@/components/DotBackgroundDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { LampDemo } from "@/components/LampDemo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { SparklesPreview } from "@/components/SparklesPreview";
import { Spotlight } from "@/components/ui/Spotlight";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <HeroScrollDemo />
    <DotBackgroundDemo />
    <HeroParallaxDemo />
 
    <SparklesPreview />
    </>
   
  );
}
