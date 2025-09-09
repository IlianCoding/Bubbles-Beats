import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ede7f3] px-10 py-3 bg-white bg-opacity-90 backdrop-blur-md">
            <div className="flex items-center gap-4 text-slate-900">
                <Link to="/landing" className="text-xl font-bold leading-tight tracking-[-0.015em] text-purple-600">
                    Bubbles & Beats
                </Link>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                    <Link
                        to="/landing"
                        className="text-slate-900 text-sm font-medium leading-normal hover:text-purple-600 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/registration"
                        className="text-slate-900 text-sm font-medium leading-normal hover:text-purple-600 transition-colors"
                    >
                        Registreren
                    </Link>
                    <Link
                        to="/songs"
                        className="text-slate-900 text-sm font-medium leading-normal hover:text-purple-600 transition-colors"
                    >
                        Muziek
                    </Link>
                    <Link
                        to="/info"
                        className="text-slate-900 text-sm font-medium leading-normal hover:text-purple-600 transition-colors"
                    >
                        Info
                    </Link>
                </nav>
            </div>
        </nav>
    );
};