"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Menu() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"ghost"}>
                        <MenuIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%] p-2 bg-[#282828] border-none outline-none rounded-md">
                    <DialogHeader className="border-b border-[#5a5a5a] p-5">
                        <DialogTitle>
                            Menu
                        </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <Link href={"#"} className="text-sm md:text-base transition-colors duration-200 text-[#ffffff] hover:text-[#696969]">Agendamentos</Link>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <Button variant={"ghost"} className="text-sm"><SignInButton afterSignInUrl="/" afterSignUpUrl="/"/></Button>
                        </SignedOut>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
};