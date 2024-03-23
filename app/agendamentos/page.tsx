import CardSchedule from "./_components/CardSchedule";

export default function Agendamentos() {
    return (
        <main>
            <div className="mt-5 container mx-auto">
                <CardSchedule photoBarber="/barber.webp" barberName={"Rafa"} barbershopName="Atlanta" hour={"10:30"} date={new Date("2024-09-10")}/>
            </div>
        </main>
    )
};