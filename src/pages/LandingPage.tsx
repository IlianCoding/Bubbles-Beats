import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Navbar} from "../components/NavBar.tsx";
import {HeroSection} from "../components/landingpage/HeroSection.tsx";
import {EventHighlights} from "../components/landingpage/EventHighlights.tsx";

export const LandingPage = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="bg-[#faf8fc] min-h-screen font-jakarta antialiased text-slate-800 pt-12 overflow-x-hidden">
            <Navbar />

            <main className="flex-1">
                <div className="px-10 md:px-20 lg:px-40 flex flex-col items-center py-10">
                    <HeroSection />
                    <EventHighlights />
                </div>
            </main>
        </div>
    );
};