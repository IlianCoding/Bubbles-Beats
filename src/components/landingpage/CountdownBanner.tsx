import {useState, useEffect, type FC} from 'react';

interface CountdownProps {
    registrationDate: Date;
    partyDate: Date;
}

export const CountdownBanner: FC<CountdownProps> = ({ registrationDate, partyDate }) => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    const [message, setMessage] = useState('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();

            const registrationDifference = registrationDate.getTime() - now.getTime();
            if (registrationDifference > 0) {
                const days = Math.floor(registrationDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((registrationDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((registrationDifference / 1000 / 60) % 60);
                const seconds = Math.floor((registrationDifference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
                setMessage('Registratie sluit over:');
                return;
            }

            const partyDifference = partyDate.getTime() - now.getTime();
            if (partyDifference > 0) {
                const days = Math.floor(partyDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((partyDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((partyDifference / 1000 / 60) % 60);
                const seconds = Math.floor((partyDifference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
                setMessage('Het feest begint over:');
                return;
            }

            setTimeLeft(null);
            setMessage('Het feest is begonnen!');
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [registrationDate, partyDate]);

    return (
        <div className="flex flex-col items-center gap-2 text-white mt-4 drop-shadow-md">
            <h3 className="text-xl font-semibold">{message}</h3>
            {timeLeft ? (
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{timeLeft.days}</span>
                        <span className="text-sm font-semibold">Dagen</span>
                    </div>
                    <span className="text-4xl font-bold">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                        <span className="text-sm font-semibold">Uren</span>
                    </div>
                    <span className="text-4xl font-bold">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        <span className="text-sm font-semibold">Minuten</span>
                    </div>
                    <span className="text-4xl font-bold">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        <span className="text-sm font-semibold">Seconden</span>
                    </div>
                </div>
            ) : (
                <p className="text-2xl font-bold">Het is tijd om te feesten!</p>
            )}
        </div>
    );
};