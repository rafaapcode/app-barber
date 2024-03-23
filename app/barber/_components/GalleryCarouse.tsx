import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Image as Img } from "lucide-react";
import Image from "next/image";

interface GalleryCarouselProps {
    barberPhotosUrl: string[];
}

export default function GalleryCarousel({ barberPhotosUrl }: GalleryCarouselProps) {
    return (
        <>
            <div className="flex gap-3 mb-10">
                <Img className="w-8 h-8" />
                <h2 className="text-2xl">Galeria</h2>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="w-full space-x-2">
                    {barberPhotosUrl.map((photoUrl, i) => (
                        <CarouselItem key={i} className="relative ml-5 h-[350px] rounded-md basis-11/12 md:basis-1/3 lg:basis-1/4 bg-red-300">
                            <div className="w-full h-full absolute z-10 bg-black/45 left-0" />
                            <Image fill alt="Image of barber" src={photoUrl} className="object-cover rounded-md" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
};