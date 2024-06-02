"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import taapman from '@/assets/Taapmaan downloaded from SpotiSongDownloader.com_.jpg';
import delhiflow from '@/assets/Dilli Flow downloaded from SpotiSongDownloader.com_.jpg';
import was from '@/assets/Was 2004 downloaded from SpotiSongDownloader.com_.jpg';
import beach from '@/assets/Beach Side downloaded from SpotiSongDownloader.com_.jpg';
import naashta from '@/assets/Naashta downloaded from SpotiSongDownloader.com_.jpg';
import chase from '@/assets/chase.jpg';
import lastday from '@/assets/lastday.jpg';
import fourday from '@/assets/4din.jpg';

export const products = [
  {
    title: "Taapman",
    link: "https://open.spotify.com/track/6hU1Yxf70eRLIEWSHgE0c0?si=5506ee60e3e146a7",
    thumbnail: taapman
  },
  {
    title: "Delhi Flow",
    link: "https://open.spotify.com/track/6j4LIKiKz9vUzCTjQsI14E?si=eb855266256d4ddb",
    thumbnail: delhiflow,
  },
  {
    title: "Beach Side",
    link: "https://open.spotify.com/track/5oTus5KG6jTBxkHWBnzt3Q?si=67b556858ba44825",
    thumbnail: beach,
  },
  {
    title: "Was 2004",
    link: "https://open.spotify.com/track/1F18gpHlFWdYpdQEDpdiIj?si=eca0413866e04cd6",
    thumbnail: was,
  },
  {
    title: "Naasta (mixtape)",
    link: "https://editrix.ai",
    thumbnail: naashta,
  },
  {
    title: "Chase",
    link: "https://youtu.be/QmTIdQ6uX9I?si=lCTtEp9oFxTiQhq8",
    thumbnail: chase,
  },
  {
    title: "Last Day",
    link: "https://algochurn.com",
    thumbnail: lastday,
  },
  {
    title: "4 Din",
    link: "https://ui.aceternity.com",
    thumbnail: fourday,
  },
  {
    title: "Beach",
    link: "https://youtu.be/QmTIdQ6uX9I?si=lCTtEp9oFxTiQhq8",
    thumbnail: beach,
  },
  {
    title: "Delhi Flow",
    link: "https://open.spotify.com/track/6j4LIKiKz9vUzCTjQsI14E?si=eb855266256d4ddb",
    thumbnail: delhiflow,
  },
  {
    title: "4 Din",
    link: "https://renderwork.studio",
    thumbnail: fourday,
  },
  {
    title: "Taapman",
    link: "https://open.spotify.com/track/6hU1Yxf70eRLIEWSHgE0c0?si=5506ee60e3e146a7",
    thumbnail: taapman,
  },
  {
    title: "Delhi Flow",
    link: "https://open.spotify.com/track/6j4LIKiKz9vUzCTjQsI14E?si=eb855266256d4ddb",
    thumbnail: delhiflow,
  },
  {
    title: "Chase",
    link: "https://youtu.be/i0-Fyp8KQI4?si=6jFVKhARCPNmIwB_",
    thumbnail: chase,
  },
  {
    title: "Beach Side",
    link: "https://youtu.be/QmTIdQ6uX9I?si=lCTtEp9oFxTiQhq8",
    thumbnail: beach,
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
