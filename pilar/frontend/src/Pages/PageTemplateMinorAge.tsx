import { useEffect, useState } from 'react';
import imgTemplateMail from '../assets/imgs/fondoFormSinTablet.png';
import logo from '../assets/imgs/logo-oasispilar-grande.png';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { LoadingInit } from '../components/loading/LoadingInit';
export function PageTemplateMinorAge() {
    //logica de carga de imagenes en el componente
    const [imageLoaded, setImageLoaded] = useState<boolean>(false)
    const [minimumTimeElapsed, setMinimumTimeElapsed] = useState<boolean>(false)
    //navigate
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimeElapsed(true)
        }, 1500)
        const loadImage = (src: any) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve;
                img.src = src
            })
        }

        Promise.all([loadImage(imgTemplateMail), loadImage(logo)]).then(() => {
            setImageLoaded(true)
        });

        return () => clearTimeout(timer)

    }, [])
    return (
        <div>
            {!imageLoaded || !minimumTimeElapsed ? (
                <LoadingInit />
            ) : (
                <div className="flex flex-col min-h-screen"
                    style={{
                        backgroundImage: `url(${imgTemplateMail})`,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta el valor alpha según sea necesario
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <div className="flex-grow flex flex-col justify-center py-24 textGothamMedium">
                        <div className="relative z-20 mx-[2rem] text-start py-4 text-white ">
                            <h1 className='text-2xl sm:text-3xl text-center'>ESTA PROMO ES SOLO PARA PERSONAS MAYORES DE 18 AÑOS.</h1>
                            <h1 className='text-center sm:text-xl'>Si sos menor de edad tenés que saber que el juego compulsivo es perjudicial para la salud, puede afectar tus relaciones, tu rendimiento escolar e incluso tu salud mental.</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={() => navigate('/')} className='text-white shadow-lg uppercase   bg-gradient-to-r from-greenDark to-greenMain border-0 py-2 mx-[4rem] hover:bg-yellow-600 rounded-3xl items-center text-base px-8 sm:px-12 my-12 sm:text-xl'>
                                Volver al inicio
                            </button>
                        </div>
                        <div className='flex justify-center items-center content-center my-12'>
                            <img src={logo} alt="Logo Pilar" className='w-[20rem] sm:w-[30rem]' />
                        </div>
                    </div>
                    <Footer whatsapp='https://api.whatsapp.com/send/?phone=5491169392978&text&type=phone_number&app_absent=0' instagram='https://www.instagram.com/bingooasispilar/' facebook='https://www.facebook.com/BingoOasisPilar' />
                </div>
            )}
        </div>
    )
}
