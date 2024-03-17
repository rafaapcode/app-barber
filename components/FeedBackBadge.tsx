import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FeedBackBadgeProps {
    avaliacao: number;
    whiteMode?: boolean;
    style?: string;
}


export default function FeedBackBadge({ avaliacao, style, whiteMode = false }: FeedBackBadgeProps) {
    return (
        <div className={cn(style ? style : "w-[70px] h-[30px] rounded-full flex justify-center items-center", !whiteMode ? "bg-black text-white": "bg-white text-black font-bold")}>
            <p className="text-xs mr-2">{avaliacao.toFixed(1)}</p> 
            <Star className="w-4 h-4"/>
        </div>
    )
};