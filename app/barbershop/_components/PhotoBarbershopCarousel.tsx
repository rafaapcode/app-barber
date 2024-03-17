import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Layout } from "lucide-react";
import Image from "next/image";

interface PhotosBarbershopCarousel {
    photoUrlBarbershop: string[];
}

export default function PhotosBarbershopCarousel({ photoUrlBarbershop }: PhotosBarbershopCarousel) {
    return (
        <>
            <div className="flex gap-3 mb-12">
                <Layout className="w-8 h-8" />
                <h2 className="text-2xl">Estrutura</h2>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="space-x-5">
                    {photoUrlBarbershop.map((photoUrl, i) => (
                        <CarouselItem key={i} className="relative w-[200px] h-[100px] md:w-[250px] md:h-[250px] rounded-md basis-1/2 md:basis-1/3">
                            <Image fill alt="Image of barbershop" src={photoUrl} className="object-cover rounded-md" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
};