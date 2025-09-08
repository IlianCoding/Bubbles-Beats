import {type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {MdLock} from "react-icons/md";

export const LoginPage = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (password === import.meta.env.VITE_SECRET_PASSWORD) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/landing');
        } else {
            setError('Verkeerd wachtwoord. Probeer het opnieuw.');
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-purple-50 text-slate-800 antialiased font-jakarta">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200/50 opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/50 opacity-50 blur-3xl"></div>

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg md:p-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tighter text-purple-950">
                        Bubbles & Beats
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Welkom bij Bubbles & Beats! Voer het wachtwoord in dat je bij je uitnodiging kreeg om toegang te krijgen.
                    </p>
                </div>
                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <div className="mb-6 relative">
                        <MdLock
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-bg-accent-darker)] text-xl"/>
                        <input
                            className="w-full pl-12 pr-12 py-3 border border-[var(--color-bg-accent)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-bg-accent-light)] transition duration-200"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-bg-accent-darker)]"
                            onClick={() => setShowPassword((v) => !v)}
                            tabIndex={-1}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                // Eye closed SVG
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.72 11.72 0 012.1-3.36M6.1 6.1A9.97 9.97 0 0112 5c5 0 9.27 3.11 11 7.5a11.72 11.72 0 01-2.1 3.36M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                                </svg>
                            ) : (
                                // Eye open SVG
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                    <div>
                        <button
                            className="flex w-full justify-center rounded-lg bg-purple-600 px-4 py-3 text-base font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}