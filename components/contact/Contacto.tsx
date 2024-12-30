'use client'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const [isSend, setIsSend] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

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

  return (
    <div id="contacto" className="z-10 flex flex-col justify-center items-center pt-64 pb-64 h-screen">
      <div className="bg-white md:px-6 pt-2 md:pt-10 md:pb-6 w-full max-w-4xl">
        <div className="pb-12">
          <p className="pb-8 md:pb-4 font-semibold text-center text-xl md:text-xl">Horario de atención por consultas de 13hs a 17hs</p>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className={`mt-2 lg:mt-0 lg:mr-2 w-full lg:w-1/2 bg-cover bg-center ${isSend ? "bg-[url('/imgs/contacto/contacto_ok.webp')]" : "bg-[url('/imgs/contacto/contacto.webp')]"}`}>
          </div>
          <div id="dialogo" className="bg-[#EFEFEF] p-6 w-full lg:w-1/2">
            {!isSend ? (
              <>
                <h1 className="mb-4 font-bold text-[#1E1E1E] text-3xl arima">Contacto</h1>
                <p id="parrafoContac" className="mb-4 text-[#1E1E1E] text-lg catamaran">
                  Dejanos tu mensaje y a la brevedad nos contactaremos contigo.
                </p>
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
                      className={`${isEnabled ? 'btn-enable' : 'btn-disable'} w-full lg:w-auto font-bold px-8 py-3 focus:outline-none focus:shadow-outline border-x-black border-y-black border-x-2 border-y-2`}
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
  );
}