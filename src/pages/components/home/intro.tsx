import Image from "next/image";

export default function Intro() {
  const imgUrl =
    "https://res.cloudinary.com/media-marketing-group/image/upload/v1680615130/wyllie/upload/clg2ausde0003knp79lzrcfik.png";
  return (
    <>
      <div className="md:flex items-center p-4 lg:p-8">
        {/* Text */}
        <div className="flex-1">
          <div className="font-bold text-2xl md:text-4xl lg:text-6xl">
            More than just tiles!
          </div>
          <div className="1">
            <div className="py-2">
              Wyllie Tiles is your go to place for all your kitchen tiles,
              bathroom tiles, floor tiles and even decorative wall tiles.
              However, we aren’t just about tiles. We’re your go to flooring,
              bathroom and plumbing supplies store in Tasmania!
            </div>
            <div className="py-2">
              We have one of the best ranges of flooring, including tiles,
              carpet, vinyl and timber flooring. We also stock a great range of
              bathroom renovation supplies including baths, showers and vanities
              through to toilets, tap ware and mirrors.
            </div>
            <div className="py-2">
              Are you a tradie looking for plumbing supplies? Order online or
              contact one of our local stores in Launceston, Devonport, Hobart
              and Burnie!
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 px-4 flex flex-row justify-center">
          <Image src={imgUrl} alt="Intro" width={500} height={0} />
        </div>
      </div>
    </>
  );
}
