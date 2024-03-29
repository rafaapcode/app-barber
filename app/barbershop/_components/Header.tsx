import Schedule from "@/app/barber/_components/Schedule";
import FeedBackBadge from "@/components/FeedBackBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
    bannerUrl: string;
    logoUrl: string;
    nome: string;
    descricao: string;
    avaliacao: number;
    status?: string;
    barber?: boolean;
    barbersName?: string;
}

export default function Header({ avaliacao, bannerUrl, descricao, logoUrl, nome, status, barber, barbersName}: HeaderProps) {
    return (
        <>
            <div className="absolute w-full h-full z-10 bg-black/45" />
            <Image fill src={bannerUrl} alt="Barbershop image" className="object-cover rounded-md z-0" />
            <div className="absolute w-full z-20 -bottom-16 flex justify-between items-center">
                <div className="relative w-full flex justify-between">
                    <div className="flex gap-6 ml-4">
                        <div className="hidden md:block relative w-24 h-24 rounded-full">
                            <Image fill alt="Logo of Barbershop" src={logoUrl} className="object-cover rounded-full" />
                        </div>
                        <div className="self-end flex md:gap-3">
                            <div className={cn("flex flex-col", barber && "flex-row items-center gap-5")}>
                                <h1 className="text-base md:text-2xl text-white font-semibold ">{nome}</h1>
                                {!barber && <p className="mt-3 md:mt-0 text-xs md:text-sm text-[#757575]">{descricao}</p>}
                                {barber && <FeedBackBadge style="w-[55px] h-[20px] rounded-full flex justify-center items-center" whiteMode avaliacao={avaliacao} />}
                            </div>
                            {!barber && <FeedBackBadge style="w-[55px] h-[20px] rounded-full flex justify-center items-center" whiteMode avaliacao={avaliacao} />}
                        </div>
                    </div>
                    {barber ? <Schedule barbersName={barbersName ? barbersName : ""}/> : <Badge variant={"secondary"} className="self-start md:self-center w-[45px] h-[20px] md:w-[70px] md:h-[25px] flex justify-center item text-[10px] md:text-xs md:mr-5">
                        {status}
                    </Badge>}
                </div>
            </div>
        </>
    )
};