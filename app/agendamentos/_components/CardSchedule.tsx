import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Image from "next/image";

interface CardScheduleProps {
    photoBarber: string;
    barberName: string;
    barbershopName: string;
    hour: string;
    date: Date;
};


export default function CardSchedule({ barberName, barbershopName, date, hour, photoBarber }: CardScheduleProps) {
    return (
        <div className="w-full md:w-[80%] lg:w-1/2 mx-auto bg-white/10 p-5 rounded-md">
            <p className="text-xl md:text-4xl font-bold mb-2">{barbershopName}</p>
            <hr />
            <div className="mt-3 w-full flex flex-col items-center gap-3 md:gap-0 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-4">
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl shadow-lg">
                        <Image fill src={photoBarber} alt="Barber photo" className="object-cover rounded-xl" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg md:text-xl text-white/70 mb-2">{barberName}</p>
                        <p className="text-white/50 text-sm md:text-base">{format(date, "dd/MM/yyyy")}</p>
                        <p className="text-white/30 text-xs md:text-sm lg:text-base">{hour}</p>
                    </div>
                </div>
                <Button size={'sm'} className="w-[90%] md:w-fit" variant="destructive">Cancelar</Button>
            </div>
        </div>
    )
};