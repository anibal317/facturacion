import './Whatsapp.css'
import Link from 'next/link';

interface WhatsappProps {
    phoneNumber: string;
    positionX: string;
    positionY: string;
}

export default function Whatsapp({ phoneNumber, positionX, positionY }: WhatsappProps) {
    return (
        <>
            <Link href={`https://wa.me/+${phoneNumber}?`} style={{ bottom: positionY, right: positionX }} className="whatsapp" target="_blank" rel="noopener noreferrer">
                <img
                    src="/whatsapp.png"
                    alt="Whatsapp Bolivar Software"
                    className='h-12'
                />
                {/* <FaSquareWhatsapp style={{ backgroundColor: 'white', borderRadius: '5px', padding: '1px' }} fill='green' size={'3em'} /> */}
            </Link>

        </>
    )
}