import InfoBarbershop from "../_components/Info";

interface BarberShopInfoProps {
    searchParams: {
        name: string;
    };
}

export default function BarberShopInfo({ searchParams }: BarberShopInfoProps) {
    return (
        <main className="w-full">
            <div className="container mx-auto">
                <InfoBarbershop /> 
            </div>
        </main>
    )
};