import { useEffect, useRef, useState } from 'react';
import img from '../../assets/imgs/titulo_alterno_01.png';
import imgRaspado from '../../assets/imgs/fondo-raspada.jpg';
import imgTemplateMail from '../../assets/imgs/fondoFormSinDesktop.png'
import fondoRaspaJuegoMobile from '../../assets/imgs/fondoRaspaJuegoDesktop.png';
import { Footer } from '../Footer';
import { ScratchRaspada } from '../Scratch/Scratch';
import { ModalAge } from '../modals/ModalAge';
import { useNavigate } from 'react-router-dom';
import { TemplateMailDesktop } from './TemplateMailDesktop';
import { LoadingInit } from '../loading/LoadingInit';
import { ModalTemplate } from '../modals/ModalTemplate';
import { Modal } from '../modals/Modal';
export function HomeDesktop() {
    //logica de imagenes front
    //LOGICA DE CARGA DE IMAGENES
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
    const [minimumTimeElapsed, setMinimunTimeElapsed] = useState<boolean>(false)

    const navigate = useNavigate();
    const [showAgeModal, setShowAgeModal] = useState<boolean>(false);
    const [showTemplateMail, setShowTemplateMail] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(fondoRaspaJuegoMobile);
    const [isLoading, setLoading] = useState<boolean>(false);
    //constante q maneja el fetch del scratch
    const [fetchPrize, setFetchPrize] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null)
    //modal de filtracion
    const [modal, setModal] = useState<boolean>(false);

    const handleGetPrizeClick = () => {
        setModal(false)
        setLoading(true);
        setTimeout(() => {
            setShowTemplateMail(true);
            setBackgroundImage(imgTemplateMail);
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            setLoading(false);
        }, 500);
    };

    function checkFirstPlay() {
        setModal(true)
    }
    const handleAgeConfirmation = () => {
        localStorage.setItem('isAdult', 'true');
        setFetchPrize(true)
        setShowAgeModal(false);
        setFetchPrize(true)
    };

    const handleAgeRejection = () => {
        localStorage.removeItem('isAdult');
        setShowAgeModal(true);
        navigate('/minorAge');
    };

    useEffect(() => {
        if (imagesLoaded && minimumTimeElapsed) {
            const isAdult = localStorage.getItem('isAdult');
            if (isAdult !== 'true') {
                setShowAgeModal(true);
            } else {
                setFetchPrize(true);
            }
        }
    }, [imagesLoaded, minimumTimeElapsed]);

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

        Promise.all([loadImage(img), loadImage(imgRaspado), loadImage(fondoRaspaJuegoMobile)]).then(() => {
            setImagesLoaded(true)
        })

        return () => clearTimeout(timer)
    })

    return (
        <div className='flex flex-col min-h-screen min-w-full '>
            {!imagesLoaded || !minimumTimeElapsed ? (
                <LoadingInit />
            ) : (
                <section
                    className="text-gray-600 relative body-font "
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'auto',
                        minHeight: '100dvh',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {isLoading && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-75 flex justify-center items-center z-50">
                            <div className="flex justify-center items-center h-screen">
                                <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
                            </div>
                        </div>
                    )}
                    <div className="container px-5 py-[4rem] lg:py-[1rem] xl:py-[5rem] 2xl:py-[5rem] mx-auto textGothamMedium">
                        {showTemplateMail ? (
                            <div ref={sectionRef}>
                                <TemplateMailDesktop />
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col text-center w-full mb-4 font-bold">
                                    <img src={img} className="w-[30rem] mx-auto sm:w-[40rem] lg:w-[32rem]" alt="Titulo Alterno" />
                                    <p className=" mx-auto text-white leading-relaxed text-base lg:text-lg ">
                                        RASPÁ EL LOGO <span className="text-yellowMain">Y DESCUBRÍ TU PREMIO</span> PODÉS GANAR HASTA $5.000 PARA VISITAR <br />
                                        BINGO OASIS PILAR
                                    </p>
                                </div>
                                <ScratchRaspada fetchPrize={fetchPrize} imgRaspado={imgRaspado} buttonGetPrize={checkFirstPlay} />
                            </>
                        )}
                    </div>
                    <Footer whatsapp='https://api.whatsapp.com/send/?phone=5491169392978&text&type=phone_number&app_absent=0' instagram='https://www.instagram.com/bingooasispilar/' facebook='https://www.facebook.com/BingoOasisPilar' />
                </section>
            )}
            {showAgeModal && (
                <ModalAge
                    onClose={handleAgeRejection}
                    onCloseOk={handleAgeConfirmation}
                    title="¿SOS MAYOR DE 18 AÑOS?"
                />
            )}
            {modal && (
                <Modal isOpen={true} onClose={() => setModal(false)}>
                    <ModalTemplate onClose={handleGetPrizeClick} onCloseOk={() => navigate('/alreadyPlayed')} title='¿Ya participaste anteriormente de Raspá y Ganá?' subTitle='' />
                </Modal>
            )}
        </div>
    );
}
