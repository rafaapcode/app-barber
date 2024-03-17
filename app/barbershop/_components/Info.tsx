import FeedBackBadge from "@/components/FeedBackBadge";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Layout } from "lucide-react";
import Image from "next/image";

export default function InfoBarbershop() {
    return (
        <div className="mt-5">
            <div className="relative w-full h-[163px] rounded-md border-none">
                <div className="absolute w-full h-full z-10 bg-black/45" />
                <Image fill src={"/barbershopimage.jpg"} alt="Barbershop image" className="object-cover rounded-md z-0" />
                <div className="absolute w-full z-20 -bottom-16 flex justify-between items-center">
                    <div className="relative w-full flex justify-between">
                        <div className="flex gap-6 ml-4">
                            <div className="hidden md:block relative w-24 h-24 rounded-full">
                                <Image fill alt="Logo of Barbershop" src={"/logo.webp"} className="object-cover rounded-full" />
                            </div>
                            <div className="self-end flex md:gap-3">
                                <div className="flex flex-col">
                                    <h1 className="text-base md:text-2xl text-white font-semibold">Nome da barbearia</h1>
                                    <p className="mt-3 md:mt-0 text-xs md:text-sm text-[#757575]">Rua taltaltal, Bairro taltaltal, 9083</p>
                                </div>
                                <FeedBackBadge style="w-[55px] h-[20px] rounded-full flex justify-center items-center" whiteMode avaliacao={10} />
                            </div>
                        </div>
                        <Badge variant={"secondary"} className="self-start md:self-center w-[45px] h-[20px] md:w-[70px] md:h-[25px] flex justify-center item text-[10px] md:text-xs md:mr-5">
                            Aberta
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="mt-28 w-full flex flex-col">
                <div className="flex gap-3 mb-12">
                    <Layout className="w-8 h-8" />
                    <h2 className="text-2xl">Estrutura</h2>
                </div>
                <Carousel className="w-full">
                    <CarouselContent className="space-x-5">
                        <CarouselItem className="relative w-[200px] h-[100px] md:w-[250px] md:h-[250px] rounded-md basis-1/2 md:basis-1/3">
                            <Image fill alt="Image of barbershop" src={"/barbeariaematividdade.jpg"} className="object-cover rounded-md" />
                        </CarouselItem>
                        <CarouselItem className="relative w-[200px] h-[100px] md:w-[250px] md:h-[250px] rounded-md basis-1/2 md:basis-1/3">
                            <Image fill alt="Image of barbershop" src={"/barbeariaematividdade.jpg"} className="object-cover rounded-md" />
                        </CarouselItem>
                        <CarouselItem className="relative w-[200px] h-[100px] md:w-[250px] md:h-[250px] rounded-md basis-1/2 md:basis-1/3">
                            <Image fill alt="Image of barbershop" src={"/barbeariaematividdade.jpg"} className="object-cover rounded-md" />
                        </CarouselItem>
                        <CarouselItem className="relative w-[200px] h-[100px] md:w-[250px] md:h-[250px] rounded-md basis-1/2 md:basis-1/3">
                            <Image fill alt="Image of barbershop" src={"/barbeariaematividdade.jpg"} className="object-cover rounded-md" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}