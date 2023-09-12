import { VideoSection } from "@/components/client-home/VideoSection";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <VideoSection />
      <Separator className="my-4 mx-auto w-5/6" />
      <section className="mb-32 text-center lg:text-left">
        <div className="py-12 md:px-6">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] md:px-12 lg:-mr-14">
                  <h2 className="text-2xl font-black text-foreground uppercase italic">
                    św. Maksymilian Maria Kolbe
                  </h2>
                  <p className="mb-4 font-light italic">
                    Patron Naszej Parafii
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Więc nasamprzód i potem, i na końcu zawsze dochodzimy do
                    tego jednego: starajmy się co dzień, co chwila bardziej
                    stawać się Jej, coraz doskonalej, coraz spokojnie z coraz
                    większą ufnością i zaufaniem pozwolić się Jej prowadzić
                    przez to wszystko, co Ona i w nas samych, i dokoła nas
                    względem nas dopuszcza, by tak stawać się coraz doskonalszym
                    narzędziem w Jej niepokalanych rękach.
                  </p>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0 relative w-full aspect-square">
                <Image
                  src="/main/kolbe.webp"
                  className="lg:rotate-[6deg] w-full rounded-lg shadow-lg absolute"
                  alt="image"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
