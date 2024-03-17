import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Search from "./Search";
import Menu from "./Menu";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
                <div className="hidden md:flex md:items-center gap-x-5">
                    <Link href={"#"} className="text-sm md:text-base transition-colors duration-200 text-[#282828] hover:text-[#414040]">Agendamentos</Link>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <Button variant={"ghost"} className="text-sm md:text-base"><SignInButton afterSignInUrl="/" afterSignUpUrl="/" /></Button>
                    </SignedOut>
                </div>
                <div className="md:hidden">
                    <Menu />
                </div>
            </div>
        </header>
    )
};