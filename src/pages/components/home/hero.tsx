import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hero() {
  const images: string[] = [
    "https://res.cloudinary.com/media-marketing-group/image/upload/v1680615110/wyllie/upload/clg2audd10002knp7bhz29vo7.jpg",
    "https://res.cloudinary.com/media-marketing-group/image/upload/v1680615130/wyllie/upload/clg2ausde0003knp79lzrcfik.png",
  ];
  return (
    <>
      <div className="relative">
        <Swiper
          className="w-full h-full"
          pagination={{
            type: "bullets",
            clickable: true,
            bulletClass:
              "w-8 h-1 bg-c10 dark:bg-white rounded-full mx-1 inline-block cursor-col-resize",
            bulletActiveClass: "!bg-c1",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {images.map((image: string, i: number) => (
            <SwiperSlide
              key={i}
              className="text-center flex justify-center items-center"
            >
              <Image
                src={image}
                alt="Hero"
                width={500}
                height={0}
                className="block w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
