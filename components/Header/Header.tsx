import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Search from "./Search";
import Menu from "./Menu";

export default function Header() {
    return (
        <header className="w-full">
            <div className="container mx-auto flex items-center justify-between p-5 border-b border-[#282828]">
                <div className="relative w-11 h-7 md:w-20 md:h-14">
                    <Link href="/">
                        <Image fill src={"/icone.svg"} alt="logo" className="object-cover" />
                    </Link>
                </div>
                <div className="flex">
                   <Search />
                </div>
                <div className="hidden md:block">
                    <Link href={"#"} className="text-sm md:text-base transition-colors duration-200 text-[#282828] hover:text-[#414040]">Agendamentos</Link>
                    <Button variant={"ghost"} className="text-sm md:text-base ml-5">Login</Button>
                </div>
                <div className="md:hidden">
                    {/* <Button variant={"ghost"}>
                        <MenuIcon />
                    </Button> */}
                    <Menu />
                </div>
            </div>
        </header>
    )
};