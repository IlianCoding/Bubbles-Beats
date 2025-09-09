import type {FC, ReactNode} from "react";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ show, onClose, title, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};