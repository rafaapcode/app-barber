import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MenuIcon, SearchIcon } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full">
            <div className="container mx-auto flex items-center justify-between p-5">
                <div className="relative w-11 h-7 md:w-20 md:h-14">
                    <Link href="/">
                        <Image fill src={"/icone.svg"} alt="logo" className="object-cover" />
                    </Link>
                </div>
                <div className="flex">
                    <Input type="text" placeholder="Pesquise sua barbearia" className="w-[140px] md:w-[200px] lg:w-[288px] text-xs md:text-sm bg-transparent border border-[#282828] placeholder:text-[#282828]" />
                    <Button variant={"ghost"} className="ml-3">
                        <SearchIcon className="w-5 h-5" />
                    </Button>
                </div>
                <div className="hidden md:block">
                    <Link href={"#"} className="text-sm md:text-base transition-colors duration-200 text-[#282828] hover:text-[#414040]">Agendamentos</Link>
                    <Button variant={"ghost"} className="text-sm md:text-base ml-5">Login</Button>
                </div>
                <div className="md:hidden">
                    <Button variant={"ghost"}>
                        <MenuIcon />
                    </Button>
                </div>
            </div>
        </header>
    )
};