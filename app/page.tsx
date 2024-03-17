import BarberShopCard from "@/components/BarberShopCard";

export default function Home() {
  return (
    <main className="w-full">
      <div className="container mx-auto p-5">
        <h1 className="text-lg md:text-2xl mt-[32px] md:mt-[60px] lg:mt-[38px]">Barbearias mais próximas de você</h1>
        <div className="mt-[32px] mb-10 md:mt-[79px] lg:mt-[38px] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 md:gap-x-[70px] lg:gap-x-6">
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
          <BarberShopCard nome="Teste" avaliacao={10}/>
        </div>
      </div>
    </main>
  );
}
