import Header from "@/app/barbershop/_components/Header";
import DescriptionSection from "../_components/DescriptionSection";
import GalleryCarousel from "../_components/GalleryCarouse";

interface BarberInfoProps {
    searchParams: {
        name: string;
    };
}

export default function BarberInfo({ searchParams }: BarberInfoProps) {


    return (
        <main className="w-full">
            <div className="container mx-auto">
                <div className="relative mt-5 w-full h-[163px] rounded-md border-none">
                    <Header barbersName={searchParams.name} barber logoUrl="/logo.webp" bannerUrl="/barbershopimage.jpg" avaliacao={10} descricao="Rua taltaltal, Bairro taltaltal, 9083" nome="Nome" />
                </div>
                <div className="mt-28 mb-5">
                    <DescriptionSection desc="teste de descrição" />
                </div>
                <div className="mt-10 mb-5">
                    <GalleryCarousel barberPhotosUrl={["/childBarber.webp"]}/>
                </div>
            </div>
        </main>
    )
}; 