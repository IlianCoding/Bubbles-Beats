import BannerImage from "../../assets/landingpage/banner-image.jpg";
import {CountdownBanner} from "./CountdownBanner.tsx";
import {useNavigate} from "react-router-dom";

const registrationEndDate = new Date('2025-10-24T23:59:59');
const partyDate = new Date('2025-11-10T23:59:59');

export const HeroSection = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/registration');
    };

    return (
        <div className="w-full @container">
            <div className="@[480px]:p-0">
                <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-2xl items-center justify-center p-4 text-center shadow-lg"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url(${BannerImage})` }}
                >
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-5xl font-black leading-tight tracking-tight drop-shadow-md @[480px]:text-7xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-tighter">
                            Bubbles & Beats
                        </h1>
                        <h2 className="text-white text-lg font-medium leading-normal @[480px]:text-xl @[480px]:font-medium @[480px]:leading-normal max-w-2xl mx-auto drop-shadow-sm">
                            Kom en beleef het ultieme feest met muziek, dans en bruisende bubbels!
                        </h2>
                    </div>
                    <CountdownBanner registrationDate={registrationEndDate} partyDate={partyDate} />
                    <button
                        onClick={handleRegisterClick}
                        className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-purple-600 text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <span className="truncate">Registreer je nu!</span>
                    </button>
                </div>
            </div>
        </div>
    );
};