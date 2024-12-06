import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  showButtons?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, showButtons = false }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white shadow-xl mx-4 rounded-lg w-full max-w-lg text-black">
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
        {showButtons && (
          <div className="flex justify-end space-x-4 p-6 border-t">
            <Button variant="secondary" onClick={onClose}>
              Cerrar
            </Button>
            <Button>
              Comprar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

