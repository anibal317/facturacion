'use client'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import Image from "next/image";

export default function Contacto() {
  const [isSend, setIsSend] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEnabled) {
      Swal.fire({
        title: 'Enviando E-mail!!!',
        text: 'Por favor espera',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await emailjs.send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
          {
            to: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
            lastName: apellido,
            firstName: nombre,
            email: email,
            description: descripcion
          },
          `${process.env.NEXT_PUBLIC_PUBLIC_ID}`
        ).then(
          (response) => {
            Swal.close();
            setIsSend(true);
            Swal.fire({
              icon: 'success',
              title: 'E-mail enviado correctamente!',
              showConfirmButton: false,
              timer: 2000
            });
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops... Error!',
              text: `Error: ${error}`,
              showConfirmButton: false,
              timer: 2500
            });
          },
        );

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Error!',
          text: `Error: ${error}`,
          showConfirmButton: false,
          timer: 2500
        });
      }
    }
  }

  useEffect(() => {
    if (nombre !== '' && apellido !== '' && email !== '' && descripcion !== '') {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [nombre, apellido, email, descripcion]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`);
        if (!response.ok) {
          throw new Error("Error fetching clients");
        }
        const data = await response.json();
        setData(data.companyHours); // Asumiendo que la respuesta tiene la estructura que proporcionaste
        console.log('data', data)
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div id="contacto" className="flex sm:flex-row flex-col justify-center items-center scroll-smooth h-[100vh]">
      <div className="bg-white md:px-4 md:pt-10 md:pb-6 ">
        <div className="flex flex-row justify-center items-center">
          <Image
            src="/hours.png" // Asegúrate de que la ruta sea correcta
            alt="Logo Preview"
            width={60} // Proporciona el ancho
            height={60} // Proporciona la altura
            className="w-20 h-20 lg:w-32 lg:h-32"

          />
          <p className="font-semibold text-center text-lg lg:text-5xl md:text-2x mr-2">Horario de atención por consultas de {data || '13hs a 13:05hs'}</p>
        </div>
        <div >
          <h1 className="mb-4 font-bold text-[#1b2358] text-5xl arima">Contacto</h1>
          <p id="parrafoContac" className="mb-4 text-[#1E1E1E] text-xl catamaran">
            Dejanos tu mensaje y a la brevedad nos contactaremos contigo.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center ">
          <div className={`flex justify-center mt-2 lg:mt-0 lg:mr-2 w-full lg:w-1/2 bg-cover bg-center ${isSend ? "bg-[url('/imgs/contacto/contacto_ok.webp')]" : "bg-[url('/imgs/contacto/contacto.webp')]"}`}>
            <div id="dialogo" className=" bg-[#EFEFEF]/80 m-6 p-6 w-5/6 rounded-2xl">
              {!isSend ? (
                <>
                  <form id="formContacto" className="space-y-4 text-[#9A9A9A] catamaran" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        className="focus:shadow-outline px-3 py-2 border w-full text-gray-700 leading-tight focus:outline-none"
                        id="nombre"
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="focus:shadow-outline px-3 py-2 border w-full text-gray-700 leading-tight focus:outline-none"
                        id="apellido"
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="focus:shadow-outline px-3 py-2 border w-full text-gray-700 leading-tight focus:outline-none"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        id="ingresoTexto"
                        name="descripcion"
                        placeholder="Escribí tu consulta"
                        required
                        className="focus:shadow-outline px-3 py-2 border w-full h-32 text-gray-700 leading-tight focus:outline-none"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                      />
                    </div>
                    <div className="mb-6 w-full">
                      <button id="btEnviarContac"
                        className={`${isEnabled ? 'btn-enable' : 'btn-disable'} w-full lg:w-auto font-bold px-8 py-3 focus:outline-none focus:shadow-outline border-x-black border-y-black border-x-2 border-y-2 bg-gray-500 text-white text-2xl`}
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center gap-3 lg:h-[20%]">
                    <img src="/imgs/contacto/check-circle.png" alt="Check" className="w-auto" />
                    <span className="font-semibold text-3xl text-center lg:text-4xl arima">¡Muchas gracias!</span>
                    <p className="w-5/6 text-center text-lg lg:text-xl catamaran">Recibimos tu consulta. Nos contactaremos a la brevedad.</p>
                    <p className="w-5/6 font-semibold text-center text-lg lg:text-xl catamaran">¡Gracias por escribirnos!</p>
                  </div>
                </>
              )}
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}