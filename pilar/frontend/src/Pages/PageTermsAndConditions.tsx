import { useEffect, useState } from 'react';
import imgTemplateMail from '../assets/imgs/fondoFormSinMobile.png';
import imgTemplateMailTablet from '../assets/imgs/fondoFormSinTablet.png';
import imgTemplateMailDesktop from '../assets/imgs/fondoFormSinDesktop.png';
import logo from '../assets/imgs/logo-oasispilar-grande.png'
import { Footer } from '../components/Footer';
import { LoadingInit } from '../components/loading/LoadingInit';
export function PageTermsAndConditions() {
    const [image, setImage] = useState(imgTemplateMail)
    //LOGICA DE CARGA DE IMAGENES
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
    const [minimumTimeElapsed, setMinimunTimeElapsed] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 0 && window.innerWidth < 640) {
                setImage(imgTemplateMailTablet);
            }
            else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                setImage(imgTemplateMailTablet)
            }
            else {
                setImage(imgTemplateMailDesktop);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial background image
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //Carga logica de imagenes para mostrar el template solo cuando las imagenes esten cargadas 
    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimunTimeElapsed(true)
        }, 1500)

        const loadImage = (src: any) => {
            return new Promise((resolve) => {

                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve;
                img.src = src
            })
        }

        Promise.all([loadImage(image), loadImage(logo)]).then(() => {
            setImagesLoaded(true)
        })

        return () => clearTimeout(timer)
    })

    return (
        <div >
            {!imagesLoaded || !minimumTimeElapsed ? (
                <LoadingInit />
            ) : (
                <section
                    className="text-gray-600 body-font relative"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta el valor alpha según sea necesario
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <div className="relative textGothamMedium">
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                        <div className="relative z-20 mx-[2rem] text-start py-16 sm:py-20 text-white ">
                            {/* Contenido aquí */}
                            <h1 className='text-2xl sm:text-4xl'>BASES Y CONDICIONES</h1>
                            {/*      <h1 className='text-xl sm:text-2xl'>PREMIOS</h1> */}
                            {/*   <h1 className='h-0.5 my-2 bg-red-900'></h1> */}
                            <h1 className='text-xl sm:text-2xl my-4'>RASPÁ Y GANÁ
                            </h1>
                            <ol className='mx-[1rem] sm:mx-[2rem] text-base sm:text-xl'>
                                <li className='my-2'>
                                    1. La presente promoción en adelante “Escaneá y Ganá”, es organizada por Bingo Pilar S.A. (Bingo Oasis) con domicilio en: CALLE RUTA PANAMERICANA, PILAR WALK, Nº: 50,400. Localidad: VILLA ROSA Partido: DEL PILAR CP: 1629. Provincia: BUENOS AIRES
                                </li>
                                <li className='my-2'>
                                    2. La sola participación en la acción promocional implica la total aceptación de las presentes “Bases y Condiciones Particulares”, de los “Términos y Condiciones Generales” y de la “Política de tratamiento de datos personales de Stars Game S.A.” incluida en los Términos y Condiciones disponibles en el stand de atención al cliente, lo que implica la aceptación de que las decisiones que tome Bingo Pilar S.A. tendrá el carácter de definitivas e inapelables, toda vez que no resulten abusivas, ni infundadas y no perjudiquen dolosamente el derecho de los Usuarios.

                                </li>
                                <li className='my-2'>
                                    3. Reserva de Derechos. Bingo Pilar S.A. se reserva el derecho de cancelar, suspender o modificar las presentes “Bases y Condiciones Particulares” y de tener que establecer o pronunciarse sobre aquellas situaciones no previstas en estas Bases y Condiciones Particulares. La cancelación, suspensión y/o modificación de las presentes Bases y Condiciones no dará derecho a los participantes a reclamo ni indemnización alguna.

                                </li>
                                <li className='my-2'>
                                    4. La vigencia de la promoción será desde el 07 de Octubre de 2024 a las 10:00hs  hasta el 31 de Octubre de 2024 a las 17:59 hs. Los premios que sean obtenidos hasta ese día tendrán una duración de cuatro días a partir del día que se recibió el mail.

                                </li>
                                <li className='my-2'>
                                    5. Solamente podrán participar de la promoción las personas físicas mayores de 18 años, que haya cumplido con los requisitos* solicitados de acuerdo al sorteo que se realice. No podrán participar aquellas personas que no reúnan dichos requisitos como así tampoco personas jurídicas, empleados de Bingo Pilar SA, directivos del organizador, personal del Instituto Provincial de Loterías y Casinos y grupos de contingentes.
                                </li>
                                <li className='my-2'>
                                    6. Mecánica de la promoción. El usuario accederà a suerte.bingopilar.com.ar donde encontrará el juego de “escaneá y ganá” con premios disponibles. Todas las jugadas tienen premios. Para poder hacerse beneficiario del premio el usuario debe de manera excluyente ingresar una dirección de correo electrónica válida, donde recibirá el código de su premio. Los premios deberán ser canjeados en el plazo de 4 días desde la generación del correo electrónico con el qr que le ha llegado y el dni del usuario. De lo contrario el beneficio quedará disponible para otro ganador.

                                </li>
                                <li className='my-2'>
                                    Para comenzar a hacer uso de su beneficio, deberá presentar el código recibido personalmente en el stand de Atención al Cliente del Bingo, donde se corroborará la validez del código y la identidad de la persona escaneando el DNI.
                                </li>
                                <li className='my-2'>
                                    Se limitará a un premio por DNI sin excepción.
                                    Los premios no incluyen viáticos ni desplazamiento hasta el establecimiento .
                                </li>
                                <li className='my-2 font-semibold'>
                                    JUGAR COMPULSIVAMENTE ES PERJUDICIAL PARA LA SALUD
                                </li>
                            </ol>
                            {/*  <h1 className='h-0.5 bg-red-900 '></h1> */}
                            <h1 className='text-xl sm:text-2xl py-2'>PREMIOS</h1>
                            <ol className='mx-[1rem] sm:mx-[2rem] text-base sm:text-xl'>
                                <li className='my-2'>
                                    <span className='font-bold'>1. 1 TICKET DE $5.000:</span>  Se limitará el canje a 1 canje en barra móvil o km50 a elección por el ganador.  Válido por el día del canje. No transferible.  Ticket jugable no cobrable, disponible en las máquinas slots habilitadas para tal fin. Aplica descuento por impuestos.
                                </li>
                                <li className='my-2'>
                                    <span className='font-bold'>2. 1 TICKET DE $3.000:</span> Se limitará el canje a 1 canje en barra móvil o km50 a elección por el ganador.  Válido por el día del canje. No transferible.  Ticket jugable no cobrable, disponible en las máquinas slots habilitadas para tal fin. Aplica descuento por impuestos.
                                </li>
                                <li className='my-2'>
                                    <span className='font-bold'>3.2 TRAGOS A ELECCIÓN:</span> Se limitará el canje a 1 canje en barra móvil o km50 a elección por el ganador.  Válido por el día del canje. No transferible.
                                </li>
                            </ol>
                            <div className='my-8 flex justify-center'>
                                <img src={logo} className='w-[24rem] sm:w-[32rem]' alt="" />
                            </div>
                        </div>
                    </div>
                    <Footer whatsapp='https://api.whatsapp.com/send/?phone=5491169392978&text&type=phone_number&app_absent=0' instagram='https://www.instagram.com/bingooasispilar/' facebook='https://www.facebook.com/BingoOasisPilar' />
                </section>
            )}
        </div>
    );

}

export default PageTermsAndConditions;
