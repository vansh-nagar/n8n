import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "../navbar";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden relative">
        <div
          className="h-[200vh] w-20  absolute  bg-accent  -rotate-45 blur-3xl origin-top-left
         "
        ></div>

        <section>
          <div className="relative pt-24 md:pt-36">
            <div aria-hidden className="absolute inset-0 -z-10 size-full " />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <div className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  Modern Solutions for Customer Engagement
                </div>
                <div className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="https://ik.imagekit.io/ijuiklevk/image.png?updatedAt=1759890761545"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl "
                    src="https://ik.imagekit.io/ijuiklevk/image.png?updatedAt=1759890761545"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
