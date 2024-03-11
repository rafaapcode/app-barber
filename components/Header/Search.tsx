"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
    const [barbershopName, setBarbershopName] = useState("");
    const router = useRouter();
    const handleClick = () => {
        router.push(`/barbershop/info?name=${barbershopName}`);
        setBarbershopName("");
    };

    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setBarbershopName(e.target.value)

    return (
        <>
            <Input onChange={onChangeEvent} type="text" placeholder="Pesquise sua barbearia" className="w-[140px] md:w-[200px] lg:w-[288px] text-xs md:text-sm bg-transparent border border-[#282828] placeholder:text-[#282828]" />
            <Button onClick={handleClick} disabled={!barbershopName} variant={"ghost"} className="ml-3">
                <SearchIcon className="w-5 h-5" />
            </Button>
        </>
    )
};