import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarberCarouselProps {
    photoUrlBarber: string;
    barbersName: string;
}

export default function BarberCarousel({ barbersName, photoUrlBarber }: BarberCarouselProps) {
    return (
        <>
            <div className="flex gap-3 mb-12">
                <UsersIcon className="w-8 h-8" />
                <h2 className="text-2xl">Especialistas</h2>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="w-full space-x-2">
                    <CarouselItem className="relative ml-5 h-[350px] rounded-md basis-11/12 md:basis-1/3 lg:basis-1/4 bg-red-300">
                        <div className="w-full h-full absolute z-10 bg-black/45 left-0" />
                        <Image fill alt="Image of barbershop" src={photoUrlBarber} className="object-cover rounded-md" />
                        <div className="w-[90%] flex justify-between items-center p-3 rounded-lg bottom-3 absolute z-20 bg-white/15  backdrop-blur-lg">
                            <p className="font-bold">{barbersName}</p>
                            <Link href={{
                                pathname: "/barber/info",
                                query: {
                                    name: barbersName
                                }
                            }} className="bg-black/55 px-2 py-1 hover:bg-black/45 transition-colors duration-100 rounded-md">Agendar</Link>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </>
    )
};