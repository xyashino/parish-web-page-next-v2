import Image from "next/image";

export interface ImageTextSectionProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string | null;
}

export const ImageTextSection = ({
  subtitle,
  title,
  src,
  alt,
}: ImageTextSectionProps) => (
  <section>
    <div className="relative w-full my-auto aspect-[1/1] sm:aspect-[2/1] lg:aspect-[3/1] brightness-50">
      <Image
        src={src}
        alt={alt}
        fill
        className="absolute object-cover lg:rounded-xl"
        draggable={false}
      />
    </div>
      {!!title &&
          <div className="lg:rounded-xl grid place-items-center  -translate-y-1/2 select-none w-full p-8 bg-foreground md:w-11/12 md:mx-auto text-center">
              <h2 className="text-background text-2xl font-bold lg:text-4xl capitalize italic">
                  {title}
              </h2>
              {!!subtitle && (
                  <h3 className="italic text-background text-md font-light lg:text-2xl">
                      {subtitle}
                  </h3>
              )}
          </div>}
  </section>
);
