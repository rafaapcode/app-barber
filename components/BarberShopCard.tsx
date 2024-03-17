import Image from "next/image";
import Link from "next/link";
import FeedBackBadge from "./FeedBackBadge";

interface BarberShopCardProps {
    nome: string;
    avaliacao: number;
}

export default function BarberShopCard({ avaliacao, nome }: BarberShopCardProps) {
    return (
        <Link href={{
            pathname: "/barbershop/info",
            query: {
                name: nome
            }
        }} className="group w-fit mx-auto lg:mx-0">
            <div className="relative w-[280px] lg:w-[350px] h-[230px] rounded-md">
                <div className="absolute w-full h-full z-10 bg-black/55 group-hover:bg-black/40 transition-colors duration-300" />
                <Image fill src={"/barberimg.webp"} alt="baber image" className="object-cover rounded-sm" />
                <div className="relative w-full h-full z-20 bg-transparent">
                    <div className="absolute bottom-2 left-2 w-[260px] lg:w-[320px]">
                        <div className="w-full flex justify-between items-center px-5 py-3 rounded-lg bg-white/30 backdrop:blur-lg">
                            <h2 className="text-base text-white">Nome Barbearia</h2>
                            <FeedBackBadge avaliacao={avaliacao}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};