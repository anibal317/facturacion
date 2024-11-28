import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function page() {
    return (
        <div className="divide-y divide-dashed w-full flex justify-center h-[92.9vh] items-center">
            <Accordion type="single" collapsible className="w-3/4">
                <AccordionItem value="item-1">
                    <AccordionTrigger>¿Qué es una factura electrónica?</AccordionTrigger>
                    <AccordionContent>Una Factura Electrónica es un comprobante digital en el que se reflejan las ventas de bienes y/o servicios a una persona o empresa.
                        Por lo tanto, la factura electrónica es la versión digital de la factura tradicional en papel, con el mismo valor legal y fiscal, aunque con condiciones más seguras, que garantizan la autenticidad del documento.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>¿Quienes están obligados a emitir facturas electrónicas?</AccordionTrigger>
                    <AccordionContent>La AFIP decretó, a partir de abril de 2019, que todas las categorías de contribuyentes se incorporen al sistema de facturación electrónica, independientemente de su sector y/o nivel de ingresos; incluyendo a las micro y medianas empresas.
                        Por lo que estás obligado a emitir facturas electrónicas si sos monotributista, responsable Inscripto en el IVA, sujeto exento del IVA y/o sujeto no alcanzado por el IVA.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>¿Orders Flow está autorizado por la AFIP?</AccordionTrigger>
                    <AccordionContent>Sí. Orders Flow está autorizado por la AFIP para emitir comprobantes electrónicos válidos.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>¿Cuáles son los beneficios de la facturación electrónica?</AccordionTrigger>
                    <AccordionContent>
                        Facturar electrónicamente tiene muchos beneficios adicionales para tu empresa además de cumplir con las regulaciones de la AFIP. Algunos de ellos son el ahorro de dinero, la disminución de errores, el mayor control de las cuentas.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>¿Qué puedo hacer si el sistema de la AFIP se cae y no funciona?</AccordionTrigger>
                    <AccordionContent>Ante cualquier falla o caída del sistema de la AFIP, con Alegra podés seguir facturando. electrónicamente sin preocupaciones debido al CAEA (Código de Autorización Electrónico Anticipado). Este es uno de los regímenes de facturación admitidos y aprobados por la AFIP que te va a ayudar ante estas situaciones de contingencia para que la emisión de tus facturas no se vea interrumpida en ningún momento.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>¿Cómo puedo empezar a facturar con Order Flow?</AccordionTrigger>
                    <AccordionContent>Si querés empezar a facturar electrónicamente, <a className='text-red-400' href='https://ayuda.alegra.com/es/emit%C3%AD-facturas-de-venta-electr%C3%B3nicas-en-alegra-argentina'>seguí estos simples pasos</a> y en menos de 24 horas hábiles vas a poder disfrutar de todos los beneficios de nuestro sistema de emisión electrónica que se integra con la <a className='text-red-400' href='http://www.afip.gob.ar'>Administración Federal de Ingresos Públicos - AFIP</a></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>¿Qué tipo de comprobantes puedo emitir con Alegra Contabilidad?</AccordionTrigger>
                    <AccordionContent>
                        Podés emitir comprobantes electrónicos del tipo facturas y notas de crédito A, B o C. Para conocer más sobre el proceso de habilitarse como emisor electrónico en Alegra Contabilidad Argentina, <a className='text-red-400' href='https://ayuda.alegra.com/es/emit%C3%AD-facturas-de-venta-electr%C3%B3nicas-en-alegra-argentina'> hacé clic acá.</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>¿Qué es la facturación electrónica?</AccordionTrigger>
                    <AccordionContent>La Facturación Electrónica es un sistema digitalizado para emitir, enviar y recibir facturas y documentos relacionados con transacciones comerciales. A través de este método, las empresas generan comprobantes electrónicos en lugar de utilizar papel, lo que agiliza y simplifica los procesos contables y reduce el impacto ambiental. Si querés incursionar en el mundo de la Facturación Electrónica, te recomendamos Alegra, para estar al día con la AFIP y llevar un registro preciso de las transacciones comerciales.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>¿Cómo funciona la facturación electrónica?</AccordionTrigger>
                    <AccordionContent>La Facturación Electrónica en Argentina funciona a través de un sistema digital en el cual las empresas emiten facturas electrónicas mediante un software homologado por la AFIP, como Alegra. Estas facturas son firmadas digitalmente para garantizar su autenticidad y luego se envían electrónicamente a los receptores, quienes también deben contar con sistemas compatibles para recibirlas. La AFIP supervisa y regula este proceso, lo que garantiza la integridad de los documentos fiscales y facilita el control tributario.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>¿Cuánto cuesta la capacitación inicial?</AccordionTrigger>
                    <AccordionContent>Nada. La capacitación inicial está incluida dentro del abono mensual del software, y se puede realizar mediante nuestros video-tutoriales y nuestra ayuda en línea. Además contamos con un servicio de consultas internas, donde usted podrá comunicarse y consultar cualquier duda administrativa y/o de manejo del software.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                    <AccordionTrigger>¿Debo pagar más para actualizar cuando salen nuevas versiones?</AccordionTrigger>
                    <AccordionContent>NO. Cada actualizacion estará contemplada dentro del abono del plan obtenido.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                    <AccordionTrigger>¿Puedo acceder desde distintas computadoras?</AccordionTrigger>
                    <AccordionContent>Si, el software no tiene restricciones por computadora ni por disco rígido, ya que no se instala, se usa directamente sobre el sitio web. Usted puede acceder desde cualquier parte del mundo, desde cualquier PC, tablet, computadora o smartphone con acceso a internet. No se puede acceder en forma simultánea con el mismo usuario desde distintos equipos, para ello deberá contar con usuarios adicionales.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
};
