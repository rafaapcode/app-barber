"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { ElementRef, useRef, useState } from "react";

interface ScheduleProps {
    barbersName: string;
}

export default function Schedule({ barbersName }: ScheduleProps) {
    const [date, setDate] = useState<Date>();
    const [hour, setHour] = useState<string>("");
    const closeRef = useRef<ElementRef<"button">>(null);

    return (
        <Dialog>
            <DialogTrigger className="hover:bg-white hover:text-black  mt-12  w-[45px] h-[20px] md:w-[70px] md:h-[25px] flex justify-center items-center text-[10px] md:text-xs md:mr-5 font-bold rounded-md">Agendar</DialogTrigger>
            <DialogContent className="bg-black/80 border border-white/20 w-[90%]">
                <DialogHeader>
                    <DialogTitle className="text-lg md:text-xl">Agende um horário</DialogTitle>
                </DialogHeader>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert(hour);
                    closeRef.current?.click();
                }} className="w-full md:p-5">
                    <div className="w-full mb-5">
                        <span>Escolha uma Data</span>
                        <div className="w-fit border p-3 border-white/20 mt-3 rounded-md">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <span>Escolha um Horário</span>
                        <div className="mt-3">
                            <Select onValueChange={setHour}>
                                <SelectTrigger className="w-[180px] bg-black">
                                    <SelectValue placeholder="Selecione um horário" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white">
                                    <SelectGroup>
                                        <SelectLabel>Horários</SelectLabel>
                                        <SelectItem value="teste">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes1">Grapes</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button ref={closeRef} type="button" variant="secondary">
                                Fechar
                            </Button>
                        </DialogClose>
                        <Button type="submit" className="mb-2 md:mb-0">Agendar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
};