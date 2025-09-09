import {Navbar} from "../components/NavBar.tsx";
import {useNavigate} from "react-router-dom";
import {supabase} from "../utils/supabaseClient.ts";
import {type FormEvent, useEffect, useState} from "react";
import {Modal} from "../components/registration/Modal.tsx";

export const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [guestId, setGuestId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Naam is verplicht!');
            return;
        }

        const { data, error } = await supabase
            .from('registration')
            .insert([{ name: name.trim(), sur_name: surName.trim(), registered_at: new Date() }])
            .select();

        if (error) {
            console.error('Fout bij registratie:', error);
            setError('Er ging iets mis met de registratie. Probeer het later opnieuw.');
        } else {
            setGuestId(data[0].id);
            setShowModal(true);
            setError(null);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        if (guestId) {
            localStorage.setItem('guestId', guestId);
            navigate('/songs');
        }
    };

    return (
        <div className="flex h-full min-h-screen grow items-center justify-center bg-purple-100 font-jakarta">
            <Navbar />
            <div className="w-full max-w-md p-8">
                <div className="rounded-xl bg-white p-8 shadow-lg">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Bubbles & Beats</h1>
                        <p className="mt-2 text-gray-600">Meld je aan voor het feest!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="name">
                                Naam <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-normal leading-normal text-slate-900 placeholder:text-gray-400 transition-colors duration-200 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                                id="name"
                                placeholder="Je naam"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-slate-900" htmlFor="name">
                                Achternaam <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-normal leading-normal text-slate-900 placeholder:text-gray-400 transition-colors duration-200 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                                id="surName"
                                placeholder="Je achternaam"
                                type="text"
                                value={surName}
                                onChange={(e) => setSurName(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="mb-4 text-center text-sm text-red-500">{error}</p>}
                        <button
                            className="w-full flex items-center justify-center rounded-md bg-purple-600 px-4 py-3 text-base font-bold tracking-wide text-white transition-all duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                            type="submit"
                        >
                            Aanmelden
                        </button>
                    </form>
                </div>
            </div>
            <Modal show={showModal} onClose={handleModalClose} title="Registratie succesvol!">
                <p className="mb-4 text-center">Bedankt voor je aanmelding! Je kunt nu je favoriete songs toevoegen.</p>
                <button
                    onClick={handleModalClose}
                    className="w-full rounded-md bg-purple-600 py-2 text-white transition-colors hover:bg-purple-700"
                >
                    Naar de Songpagina
                </button>
            </Modal>
        </div>
    );
};