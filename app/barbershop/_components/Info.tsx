import FeedBackBadge from "@/components/FeedBackBadge";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Layout } from "lucide-react";
import Image from "next/image";
import HeaderBarbershopInfo from "./Header";
import PhotosBarbershopCarousel from "./PhotoBarbershopCarousel";


interface InfoBarbershopProps {
    nome: string;
    descricao: string;
    avaliacao: number;
    status: string;
    photoUrlBarbershop: string[];
    photoUrlBarbers: string[];
    logoUrl: string;
    bannerUrl: string;
}


export default function InfoBarbershop({ avaliacao, descricao, nome, photoUrlBarbers, photoUrlBarbershop, status, bannerUrl, logoUrl }: InfoBarbershopProps) {
    return (
        <div className="mt-5">
            <div className="relative w-full h-[163px] rounded-md border-none">
               <HeaderBarbershopInfo status={status} avaliacao={avaliacao} bannerUrl={bannerUrl} descricao={descricao} logoUrl={logoUrl} nome={nome}/>
            </div>
            <div className="mt-28 w-full flex flex-col">
               <PhotosBarbershopCarousel photoUrlBarbershop={photoUrlBarbershop}/>
            </div>
        </div>
    )
}