import './FloatingButton.css';
import Link from 'next/link';

interface FloatingButtonProps {
    href?: string; // Enlace a redirigir
    onClick?: () => void; // Acción al hacer clic
    positionX: string; // Posición horizontal (e.g., "10px", "2rem")
    positionY: string; // Posición vertical (e.g., "10px", "2rem")
    children: React.ReactNode; // Contenido del botón (e.g., íconos, texto)
    ariaLabel?: string; // Etiqueta accesible para describir el botón
}

export default function FloatingButton({
    href,
    onClick,
    positionX,
    positionY,
    children,
    ariaLabel,
}: FloatingButtonProps) {
    return href ? (
        <Link
            href={href}
            style={{ bottom: positionY, right: positionX }}
            className="floating-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    ) : (
        <button
            onClick={onClick}
            style={{ bottom: positionY, right: positionX }}
            className="floating-button"
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}
