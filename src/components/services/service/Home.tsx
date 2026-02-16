import Image from "next/image";

const Hero = ({
  content,
  imgSrc,
  imgAlt,
}: {
  content: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}) => {
  return (
    <div className="relative">
      <Image
        alt={imgAlt}
        fill
        src={imgSrc}
        className="object-cover object-[25%_40%]"
      />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[10%] bg-black/35 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl ml-auto">
            <div className="space-y-4 border-l-6 border-brand-primary  text-white p-6">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
