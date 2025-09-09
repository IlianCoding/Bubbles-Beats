import {Link} from "react-router-dom";

export const DJSection = () => {
    return (
        <section className="py-16 w-full mt-14">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl">Meet the Maestros</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-slate-600 md:text-xl">
                    Onze DJ is het hart van het feest en draait een levendige mix van genres om je aan het dansen te krijgen.
                </p>
            </div>
            <div className="mt-12 flex justify-center">
                {/* DJ 1: DJ Frank */}
                <div className="flex flex-col items-center justify-center space-y-4 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center transition-all duration-300 hover:scale-105 hover:bg-white/60 shadow-lg">
                    <img alt="DJ Nova" className="h-32 w-32 rounded-full object-cover" src="https://source.unsplash.com/random/400x400?dj,neon" />
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-purple-950">DJ Frank</h3>
                        <p className="text-pink-500">Electronic Dance Music</p>
                    </div>
                    <p className="max-w-xs text-sm text-slate-600">
                        DJ Frank brengt je zeker aan het dansen met onze hele lijst aan nummers waar jij aan mee kan doen!
                    </p>
                </div>
            </div>
            <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
                <p className="text-lg text-slate-700">Heb je een nummer dat perfect is voor het feest?</p>
                <Link
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                    to="/songs"
                >
                    Dien je nummer in
                </Link>
            </div>
        </section>
    );
};