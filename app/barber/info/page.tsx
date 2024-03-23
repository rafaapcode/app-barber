import Header from "@/app/barbershop/_components/Header";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Image as Img, Info } from "lucide-react";
import Image from "next/image";

interface BarberInfoProps {
    searchParams: {
        name: string;
    };
}

export default function BarberInfo({ searchParams }: BarberInfoProps) {


    return (
        <main className="w-full">
            <div className="container mx-auto">
                <div className="relative mt-5 w-full h-[163px] rounded-md border-none">
                    <Header barber logoUrl="/logo.webp" bannerUrl="/barbershopimage.jpg" avaliacao={10} descricao="Rua taltaltal, Bairro taltaltal, 9083" nome="Nome" />
                </div>
                <div className="mt-28 mb-5">
                    <div className="flex gap-3 mb-10">
                        <Info className="w-8 h-8" />
                        <h2 className="text-2xl">Descrição</h2>
                    </div>
                    <div className="w-[90%] h-[150px] md:h-[180px] border border-l-slate-800 border-b-slate-800 border-t-transparent border-r-transparent overflow-auto py-2">
                        <div className="max-w-[85%] mx-auto">
                            Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className="mt-10 mb-5">
                    <div className="flex gap-3 mb-10">
                        <Img className="w-8 h-8" />
                        <h2 className="text-2xl">Galeria</h2>
                    </div>
                    <Carousel className="w-full">
                        <CarouselContent className="w-full space-x-2">
                            <CarouselItem className="relative ml-5 h-[350px] rounded-md basis-11/12 md:basis-1/3 lg:basis-1/4 bg-red-300">
                                <div className="w-full h-full absolute z-10 bg-black/45 left-0" />
                                <Image fill alt="Image of barbershop" src="/childBarber.webp" className="object-cover rounded-md" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </main>
    )
}; 