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
                <InfoBarbershop logoUrl="/logo.webp" bannerUrl="/barbershopimage.jpg" avaliacao={10} descricao="Rua taltaltal, Bairro taltaltal, 9083" nome="Nome" photoUrlBarbers={["/barbeariaematividdade.jpg"]} photoUrlBarbershop={["/barbeariaematividdade.jpg"]} status={"ABERTA"}/> 
            </div>
        </main>
    )
}; 