import InfoBarbershop from "../_components/Info";

interface BarberShopInfoProps {
    searchParams: {
        name: string;
    };
}

export default function BarberShopInfo({ searchParams }: BarberShopInfoProps) {
    const barbersData = [{
        photoUrlBarber: "/barber.webp",
        barbersName: "João"
    }]

    return (
        <main className="w-full">
            <div className="container mx-auto">
                <InfoBarbershop barbersData={barbersData} logoUrl="/logo.webp" bannerUrl="/barbershopimage.jpg" avaliacao={10} descricao="Rua taltaltal, Bairro taltaltal, 9083" nome="Nome" photoUrlBarbershop={["/barbeariaematividdade.jpg"]} status={"ABERTA"}/> 
            </div>
        </main>
    )
}; 