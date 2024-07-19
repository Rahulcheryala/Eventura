import Image from "next/image";
import "./hero.css";

const HeroImage = () => {
  const Images = [
    { src: "img-1.png" },
    { src: "img-2.png" },
    { src: "img-3.png" },
    { src: "img-4.png" },
    { src: "img-5.png" },
    { src: "img-6.png" },
    { src: "img-7.png" },
    { src: "img-8.png" },
  ];

  return (
    <section
      className="grid gap-1 grid-cols-responsive h-fit w-fit md:my-8 max-md:mx-auto max-md:py-10
    transition-all duration-500"
    >
      {Images.map((image, index) => (
        <div
          className="relative col-span-2 aspect-square clip-effect rounded-md"
          key={index}
        >
          <Image
            src={`/assets/images/hero/${image.src}`}
            alt={`Image-${index + 1}`}
            fill
            // title={`Image-${index + 1}`}
            sizes="100%"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default HeroImage;
