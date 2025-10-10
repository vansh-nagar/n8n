import HeroSection from "@/components/global/landing-page/hero-section";
import { InfiniteMovingCards } from "@/components/global/landing-page/infinite-moving-cards";

import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Youtube,
  Dribbble,
  Slack,
} from "lucide-react";
import Pricing from "@/components/global/landing-page/pricing";

const items: {
  logo: React.ReactNode;
  name: string;
}[] = [
  {
    logo: <Instagram size={50} />,
    name: "Alice Johnson",
  },
  {
    logo: <Twitter size={50} />,
    name: "Bob Smith",
  },
  {
    logo: <Facebook size={50} />,
    name: "Charlie Brown",
  },
  {
    logo: <Linkedin size={50} />,
    name: "Diana Prince",
  },
  {
    logo: <Github size={50} />,
    name: "Eve Adams",
  },
  {
    logo: <Youtube size={50} />,
    name: "Frank Miller",
  },
  {
    logo: <Dribbble size={50} />,
    name: "Grace Lee",
  },
  {
    logo: <Slack size={50} />,
    name: "Henry Ford",
  },
];

const page = () => {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="normal"
        className="mt-20"
      />
      <Pricing />
    </>
  );
};

export default page;
