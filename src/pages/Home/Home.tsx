import Hero from "../../components/Hero";
import comp from "../../assets/Comp.mp4"
import supplychain from "../../assets/supplychain crm.mp4"


const Home = () => {
    return (
        <>
            <main className="pt-14">
                <Hero />
                <section className="relative max-h-[90vh] overflow-hidden chatbot">
                    <video className="h-95 -z-50 w-full object-cover aspect-video" src={comp} autoPlay muted loop />
                    <div className="absolute w-full h-full inset-0 flex justify-center items-center backdrop-blur-sm bg-[#7797bc69] -translate-y-full content">
                        <h2 className="text-white text-[clamp(40px,3vw,4rem)] font-medium">Chatbot Video Section</h2>
                    </div>
                </section>

                <section className="relative overflow-hidden">
                    <video className="h-[95vh] -z-50 w-full object-cover aspect-video" src={supplychain} autoPlay muted loop />
                    <div className="absolute w-full h-full inset-0 flex items-center justify-center backdrop-blur-[5px] bg-[#7797bc69]">
                        <div className="flex flex-col justify-between gap-[3rem] max-w-screen-lg px-8">
                            <div className="flex flex-col gap-2 items-center">
                                <h1 className="text-[clamp(24px,3vw,4rem)] font-bold text-white">About Us</h1>
                                <p className="text-white text-[clamp(14px,1.2vw,2rem)] text-center">
                                    Adiray Global bridges the gap between India and the world through exports, specializing in non-traditional commodities reaching unique destinations. They're a game-changer in trade, offering unprecedented transparency and innovation. From fashion to machinery, they handle diverse commodities, even venturing into tech solutions to streamline the trading process. Think of them as your gateway to connecting unique goods with global markets.
                                </p>
                            </div>

                            <div>
                                <h1 className="text-[clamp(20px,2.5vw,3rem)] text-white text-center">Supply Chain CRM</h1>
                                <p className="text-white text-[clamp(14px,1.2vw,2rem)] text-center">
                                    Dashboard solution offers trade transparency by providing clients with credentials to track shipments, view shipment ETA, and access associated documents. This tool streamlines shipment monitoring and documentation management for businesses engaged in trade, enhancing operational
                                    visibility and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </main >
        </>
    )
}

export default Home;