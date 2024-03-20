import Header from "./Header";
import PhotosBarbershopCarousel from "./PhotoBarbershopCarousel";
import BarberCarousel from "./BarberCarousel";


interface InfoBarbershopProps {
    nome: string;
    descricao: string;
    avaliacao: number;
    status: string;
    photoUrlBarbershop: string[];
    barbersData: {
        photoUrlBarber: string;
        barbersName: string;
    }[];
    logoUrl: string;
    bannerUrl: string;
}


export default function InfoBarbershop({ avaliacao, descricao, nome, barbersData, photoUrlBarbershop, status, bannerUrl, logoUrl }: InfoBarbershopProps) {
    return (
        <div className="mt-5">
            <div className="relative w-full h-[163px] rounded-md border-none">
                <Header status={status} avaliacao={avaliacao} bannerUrl={bannerUrl} descricao={descricao} logoUrl={logoUrl} nome={nome} />
            </div>
            <div className="mt-28 w-full flex flex-col">
                <PhotosBarbershopCarousel photoUrlBarbershop={photoUrlBarbershop} />
            </div>
            <div className="mt-28 mb-5 w-full flex flex-col">
                {barbersData.map((data, i) => (
                    <BarberCarousel key={i} photoUrlBarber={data.photoUrlBarber} barbersName={data.barbersName} />
                ))}
            </div>
        </div>
    )
}