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
      })

      try {
        // Preparar los datos para enviar con EmailJS
        await emailjs.send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,       // Reemplaza con tu ID de servicio
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,       // Reemplaza con tu ID de plantilla
          {
            to: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
            lastName: apellido,
            firstName: nombre,
            email: email,
            description: descripcion
          },
          `${process.env.NEXT_PUBLIC_PUBLIC_ID}`         // Reemplaza con tu llave pública
        ).then(
          (response) => {
            console.log(response);
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
            console.log(error);

            Swal.fire({
              icon: 'error',
              title: 'Oops... Error!',
              text: `Error: ${error}`,
              showConfirmButton: false,
              timer: 2500
            });
          },
        )



      } catch (error) {
        console.log(error);

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
    if (nombre != '' && apellido != '' && email != '' && descripcion != '') {
      setIsEnabled(true)
    } else {
      setIsEnabled(false)
    }
  }, [nombre, apellido, email, descripcion]);


  return (
    <div id="contacto" className="flex flex-col justify-center items-center bg-[#a0aab6] p-2 pt-6 h-auto">
      <div className="bg-[#FFFFFF] md:px-6 pt-2 md:pt-10 md:pb-6 md:rounded-[25px] md:w-4/6">
        <p className="md:pb-4 font-semibold text-center text-xs md:text-xl">Horario de atención por consultas de 13hs a 17hs</p>
        <div className="flex lg:flex-row flex-col-reverse">
          <div>
          </div>
          <div id="dialogo" className="bg-[#EFEFEF] md:mt-2 lg:mt-0 lg:mr-2 p-6 md:rounded-[15px] lg:rounded-[25px] lg:w-1/2">
            {!isSend ? <>
              <h1 className="mb-4 font-bold text-[#1E1E1E] text-3xl arima">
                Contacto
              </h1>
              <p id="parrafoContac" className="mb-4 text-[#1E1E1E] text-l catamaran">
                Dejanos tu mensaje y a la brevedad nos contactaremos contigo.
              </p>
              <form
                id="formContacto"
                className="space-y-4 text-[#9A9A9A] catamaran"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <input
                    className="focus:shadow-outline px-3 py-2 border rounded-xl w-full text-gray-700 leading-tight focus:outline-none"
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
                    className="focus:shadow-outline px-3 py-2 border rounded-xl w-full text-gray-700 leading-tight focus:outline-none"
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
                    className="focus:shadow-outline px-3 py-2 border rounded-xl w-full text-gray-700 leading-tight focus:outline-none"
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
                    className="focus:shadow-outline px-3 py-2 border rounded-xl w-full h-32 text-gray-700 leading-tight focus:outline-none"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>

                <div className="mb-6 w-[20%]">
                  <button id="btEnviarContac"
                    className={`${isEnabled ? 'btn-enable' : 'btn-disable'} w-full lg:w-auto font-bold px-8 py-3 rounded-xl focus:outline-none focus:shadow-outline`}
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </> :
              <>
                <div className="flex flex-col justify-center items-center gap-3 lg:h-[20%]">
                  <img src="/imgs/contacto/check-circle.png" alt="Check" className="w-auto" />
                  <span className="font-semibold text-3xl text-center lg:text-4xl arima">¡Muchas gracias!</span>
                  <p className="w-5/6 text-center text-lg lg:text-xl catamaran">Recibimos tu consulta. Nos contactaremos a la brevedad.</p>
                  <p className="w-5/6 font-semibold text-center text-lg lg:text-xl catamaran">¡Gracias por escribirnos!</p>
                </div>
              </>
            }
          </div>
          <div id="imgDeJovenes" className={`mt-2 md:mt-0 md:rounded-[15px] lg:rounded-[25px] h-28 lg:h-auto md:mb-2 lg:mb-0 lg:ml-2 w-full lg:w-1/2 bg-cover bg-center ${isSend ? "bg-[url('/imgs/contacto/contacto_ok.webp')]" : "bg-[url('/imgs/contacto/contacto.webp')]"}`}>

          </div>
        </div>
      </div>
    </div>
  );
}