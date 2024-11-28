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
    <div id="contacto" className="bg-[#a0aab6] h-[90vh] flex flex-col justify-center items-center p-2 pt-6">
      <div className="bg-[#FFFFFF] md:w-4/6 md:rounded-[25px] md:pt-10 md:pb-6 md:px-6 pt-2 ">
        <p className="text-center md:pb-4 font-semibold md:text-xl text-xs ">Horario de atención por consultas de 13hs a 17hs</p>
        <div className="flex flex-col-reverse lg:flex-row">
          <div>
          </div>
          <div id="dialogo" className="bg-[#EFEFEF] p-6 lg:w-1/2 md:rounded-[15px] lg:rounded-[25px] md:mt-2 lg:mt-0 lg:mr-2">
            {!isSend ? <>
              <h1 className="text-3xl font-bold mb-4 arima text-[#1E1E1E]">
                Contacto
              </h1>
              <p id="parrafoContac" className="mb-4 text-l catamaran text-[#1E1E1E]">
                Dejanos tu mensaje y a la brevedad nos contactaremos contigo.
              </p>
              <form
                id="formContacto"
                className="space-y-4 catamaran text-[#9A9A9A]"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <input
                    className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="h-32 border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="lg:h-[20%] flex flex-col items-center justify-center gap-3">
                  <img src="/imgs/contacto/check-circle.png" alt="Check" className="w-auto " />
                  <span className="arima text-3xl lg:text-4xl font-semibold text-center">¡Muchas gracias!</span>
                  <p className="catamaran text-lg lg:text-xl w-5/6 text-center">Recibimos tu consulta. Nos contactaremos a la brevedad.</p>
                  <p className="catamaran text-lg lg:text-xl w-5/6 font-semibold text-center">¡Gracias por escribirnos!</p>
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
