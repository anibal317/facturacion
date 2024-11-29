import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
            <div className="bg-white shadow-xl mx-4 rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6">
                    {content}
                </div>
                <div className="flex justify-end space-x-4 p-6 border-t">
                    <button 
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-800"
                    >
                        Cerrar
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
