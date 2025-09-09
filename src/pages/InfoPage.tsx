import {Navbar} from "../components/NavBar.tsx";
import {SlCalender} from "react-icons/sl";
import {IoLocationOutline} from "react-icons/io5";
import {LuHouse} from "react-icons/lu";
import {MdOutlineNoDrinks} from "react-icons/md";
import {IoLogoNoSmoking} from "react-icons/io";
import {FaPeopleArrows} from "react-icons/fa";
import {EventHighlights} from "../components/landingpage/EventHighlights.tsx";

export const InfoPage = () => {

    return (
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-[#faf8fc] font-jakarta">
            <Navbar />
            <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8 mt-12">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Belangrijke Info</h1>
                        <p className="mt-4 text-lg text-purple-600">Hier vind je alle essentiële details voor het evenement.</p>
                    </div>
                    <div className="space-y-12">
                        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200/80">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                                <SlCalender className="text-purple-600"></SlCalender>
                                Datum & Tijd
                            </h2>
                            <p className="text-gray-700 text-lg">Zaterdag, 10 november 2025</p>
                            <p className="text-gray-500">van 19:00 tot 03:00</p>
                        </section>
                        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200/80">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                                <IoLocationOutline className="text-purple-600"></IoLocationOutline>
                                Locatie
                            </h2>
                            <p className="text-gray-700 text-lg">De Oude Brouwerij</p>
                            <p className="text-gray-500 mb-6">Kerkstraat 18, 2940 Stabroek</p>
                            <div className="w-full h-96 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.288477964943!2d4.403108027740861!3d51.30581673370372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4099fe7082b7d%3A0x4bca2661172ff14f!2sDe%20Oude%20Brouwerij!5e0!3m2!1snl!2sbe!4v1757448827055!5m2!1snl!2sbe"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </section>

                        <EventHighlights/>

                        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200/80">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                                <LuHouse className="text-purple-600"></LuHouse>
                                Huisregels
                            </h2>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <MdOutlineNoDrinks className="text-purple-600"></MdOutlineNoDrinks>
                                    <span>Geen eigen drank of eten toegestaan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <IoLogoNoSmoking className="text-purple-600"></IoLogoNoSmoking>
                                    <span>Roken is alleen toegestaan in de daarvoor bestemde zones.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaPeopleArrows className="text-purple-600"></FaPeopleArrows>
                                    <span>Respecteer de andere bezoekers en het personeel.</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};