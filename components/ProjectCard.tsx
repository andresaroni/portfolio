import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  domain: string;
  image: StaticImageData;
  imageAlt: string;
  descriptions: string[];
  url?: string;
  isPrivate?: boolean;
};

export default function ProjectCard({
  title,
  domain,
  image,
  imageAlt,
  descriptions,
  url,
  isPrivate = false,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
      <div className="w-full lg:basis-[70%]">
        <div className="relative bg-black text-white flex items-center justify-center h-10 rounded-t-2xl">
          <div className="absolute left-4 flex gap-1.5">
            <span className="block w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="block w-3 h-3 bg-orange-500 rounded-full"></span>
            <span className="block w-3 h-3 bg-[#0eb31b] rounded-full"></span>
          </div>

          <p className="font-medium text-sm sm:text-base">{domain}</p>
        </div>

        <Image
          src={image}
          alt={imageAlt}
          className="rounded-b-2xl border border-[#0000002c] w-full h-auto"
          priority
        />
      </div>

      <div className="w-full lg:basis-[30%] grid gap-2 py-3 px-4 rounded-xl text-black">
        <h3 className="text-2xl font-extrabold">{title}</h3>

        {descriptions.map((description, index) => (
          <p key={index} className="text-sm font-medium tracking-wider">
            {description}
          </p>
        ))}

        {isPrivate ? (
          <span className="bg-gray-800 text-white text-center font-bold py-2 px-4 mt-4 rounded cursor-not-allowed opacity-70">
            Sistema Privado
          </span>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-[#202020] text-white text-center font-bold py-2 px-4 mt-4 rounded cursor-pointer"
          >
            Visitar Web
          </a>
        )}
      </div>
    </div>
  );
}