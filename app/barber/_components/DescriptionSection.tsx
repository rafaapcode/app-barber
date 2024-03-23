import { Info } from "lucide-react";

interface DescriptionSectionProps {
    desc: string;
}

export default function DescriptionSection({ desc }: DescriptionSectionProps) {
    return (
        <>
            <div className="flex gap-3 mb-10">
                <Info className="w-8 h-8" />
                <h2 className="text-2xl">Descrição</h2>
            </div>
            <div className="w-full md:w-[90%] h-[150px] md:h-[180px] border border-l-slate-800 border-b-slate-800 border-t-transparent border-r-transparent overflow-auto py-2">
                <div className="max-w-[85%] mx-auto">
                    {desc}
                </div>
            </div>
        </>
    )
};