import {Modal} from "../components/registration/Modal.tsx";
import {Navbar} from "../components/NavBar.tsx";
import {supabase} from "../utils/supabaseClient.ts";
import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

interface Song {
    song_name: string;
    song_author: string;
    song_link: string;
}

export const SongPage = () => {
    const [songs, setSongs] = useState<Song[]>([
        { song_name: '', song_author: '', song_link: '' },
        { song_name: '', song_author: '', song_link: '' },
        { song_name: '', song_author: '', song_link: '' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const guestId = localStorage.getItem('guestId');

    // Redirect als er geen guestId is
    useEffect(() => {
        if (!guestId) {
            navigate('/registration');
        }
    }, [guestId, navigate]);

    const handleAddSong = () => {
        if (songs.length < 10) {
            setSongs([...songs, { song_name: '', song_author: '', song_link: '' }]);
        }
    };

    const handleSongChange = (e: ChangeEvent<HTMLInputElement>, index: number, field: keyof Song) => {
        const newSongs = [...songs];
        newSongs[index][field] = e.target.value;
        setSongs(newSongs);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        const submittedSongs = songs
            .map((song, index) => ({
                registration_id: guestId,
                song_name: song.song_name.trim(),
                song_author: song.song_author.trim(),
                song_link: song.song_link.trim() || null,
                order: index + 1
            }))
            .filter(song => song.song_name !== '' && song.song_author !== '');

        if (submittedSongs.length === 0) {
            setError('Vul ten minste één liedje in, met zowel titel als artiest.');
            return;
        }

        if (!guestId) {
            setError('Kon de gast-ID niet vinden. Registreer opnieuw.');
            return;
        }

        const { error: insertError } = await supabase
            .from('songs')
            .insert(submittedSongs);

        if (insertError) {
            console.error('Fout bij het versturen van songs:', insertError);
            setError('Er is iets misgegaan met het versturen van de songs. Probeer het opnieuw.');
        } else {
            setShowModal(true);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/landing');
    };

    return (
        <div className="flex h-full min-h-screen flex-col items-center justify-center bg-purple-100 font-inter pt-12">
            <Navbar />
            <div className="w-full max-w-lg mx-auto p-6 md:p-8 mt-14">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Jouw Top 5 songs</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {songs.map((song, index) => (
                                <div key={index} className="space-y-2 border-b border-gray-200 pb-4">
                                    <h3 className="text-lg font-medium text-gray-700">{index + 1}.</h3>
                                    <div className="space-y-2">
                                        <input
                                            className="form-input flex-1 w-full rounded-md border-gray-300 focus:ring-purple-600 focus:border-purple-600 transition duration-150 ease-in-out"
                                            type="text"
                                            placeholder="Titel van het lied (verplicht)"
                                            value={song.song_name}
                                            onChange={(e) => handleSongChange(e, index, 'song_name')}
                                            required
                                        />
                                        <input
                                            className="form-input flex-1 w-full rounded-md border-gray-300 focus:ring-purple-600 focus:border-purple-600 transition duration-150 ease-in-out"
                                            type="text"
                                            placeholder="Artiest (verplicht)"
                                            value={song.song_author}
                                            onChange={(e) => handleSongChange(e, index, 'song_author')}
                                            required
                                        />
                                        <input
                                            className="form-input flex-1 w-full rounded-md border-gray-300 focus:ring-purple-600 focus:border-purple-600 transition duration-150 ease-in-out"
                                            type="url"
                                            placeholder="Link naar het lied (optioneel)"
                                            value={song.song_link}
                                            onChange={(e) => handleSongChange(e, index, 'song_link')}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {songs.length < 5 && (
                            <div className="mt-6">
                                <button
                                    className="w-full flex items-center justify-center text-sm font-medium text-purple-600 hover:text-white hover:bg-purple-600 border-2 border-purple-600 rounded-md px-4 py-2 transition duration-150 ease-in-out"
                                    type="button"
                                    onClick={handleAddSong}
                                >
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    </svg>
                                    Meer velden toevoegen
                                </button>
                            </div>
                        )}
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                        <div className="mt-8">
                            <button
                                className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition duration-150 ease-in-out"
                                type="submit"
                            >
                                Versturen
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal show={showModal} onClose={handleModalClose} title="Bedankt!">
                <p className="mb-4 text-center">Je songs zijn succesvol verstuurd!</p>
                <button
                    onClick={handleModalClose}
                    className="w-full rounded-md bg-purple-600 py-2 text-white transition-colors hover:bg-purple-700"
                >
                    Terug naar de homepagina
                </button>
            </Modal>
        </div>
    );
};