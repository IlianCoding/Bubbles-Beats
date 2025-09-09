import {MdAccessTime} from "react-icons/md";
import PartyImage from '../../assets/landingpage/party-event.jpg';
import ReceptionImage from '../../assets/landingpage/reception-event.jpg';

export const EventHighlights = () => {
    return (
        <section className="py-16 w-full mt-14">
            <h2 className="text-slate-900 text-4xl font-bold leading-tight tracking-tight text-center mb-12">Event Highlights</h2>
            <div className="flex flex-col gap-16">
                {/* Highlight 1: Image left, text right */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-lg"
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url(${ReceptionImage})` }}
                        ></div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <h3 className="text-2xl font-bold text-purple-700 mb-2">Onthaal & Opwarmer</h3>
                        <div className="flex items-center text-slate-700 mb-2">
                            <MdAccessTime className="text-xl mr-2" />
                            <span className="font-medium">19:00 - 21:00</span>
                        </div>
                        <p className="text-base text-slate-800">
                            Start de avond in een ontspannen sfeer! Geniet van een warm onthaal met rustige muziek, lekkere drankjes en de perfecte kans om bij te praten met vrienden voordat het feest losbarst.
                        </p>
                    </div>
                </div>
                {/* Highlight 2: Image right, text left */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-lg"
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url(${PartyImage})` }}
                        ></div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <h3 className="text-2xl font-bold text-purple-700 mb-2">Bruisend Feestje</h3>
                        <div className="flex items-center text-slate-700 mb-2">
                            <MdAccessTime className="text-xl mr-2" />
                            <span className="font-medium">21:00 - 03:00</span>
                        </div>
                        <p className="text-base text-slate-800">
                            Vanaf 21u barst het feest los! Dans op de beste beats, geniet van spectaculaire lichtshows en laat je meeslepen door de bruisende sfeer tot in de vroege uurtjes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};