import { Star } from "lucide-react";

interface FeedBackBadgeProps {
    avaliacao: number;
}


export default function FeedBackBadge({ avaliacao }: FeedBackBadgeProps) {
    return (
        <div className="w-[70px] h-[30px] bg-black rounded-full flex justify-center items-center">
            <p className="text-xs mr-2">{avaliacao.toFixed(1)}</p> 
            <Star className="w-4 h-4"/>
        </div>
    )
};