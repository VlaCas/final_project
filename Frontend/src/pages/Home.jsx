import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Link } from "react-router-dom";
import { BsCartCheck, BsWallet2 } from 'react-icons/bs';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { AiOutlineDollar } from 'react-icons/ai';
import '../style/home.css';

function Home() {

    return (
        <>
            {/* First section */}
            <section className='h-screen bg-black sectionHome'>
                <Nav></Nav>
                <div className='relative flex items-center justify-center w-full h-screen'>
                    <video src='./src/assets/Video/video3.mp4' autoPlay loop muted className='w-full h-full'></video>
                    <div className='absolute'>
                        <img src="./src/assets/Img/img-main.png" alt="Auricular" className=' min-w-[280px] xl:min-w-[400px]' />
                    </div>
                </div>
                <div className='w-full text-center z-10 absolute top-[45%] px-1'>
                    <h1 className='text-white text-[2.5rem] font-medium sm:text-5xl md:text-6xl xl:text-7xl'>SUMÉRGETE EN EL <span className='font-bold'>SONIDO</span></h1>
                </div>
            </section>
            {/* Second section */}
            <section className='flex flex-col items-center h-screen gap-6 bg-black sectionHome lg:flex-row'>
                <div className='w-full flex items-center justify-center sm:w-3/4 lg:w-11/12 lg:h-[800px] lg:relative lg:-ml-36 xl:-ml-80 xl:h-[900px] xl:w-full xl:mt-80'>
                    <video src='./src/assets/Video/video1.mp4' autoPlay loop muted className='w-full h-full'></video>
                </div>
                <div className='z-10 w-11/12 text-start -mt-28 lg:text-start lg:pr-4 lg:absolute lg:z-10 lg:right-5 lg:w-2/4 xl:pr-12 xl:mt-32'>
                    <h2 className='text-white font-bold text-[2.75rem] pb-6 lg:text-6xl'>Escucha la diferencia</h2>
                    <p className='text-[#D5D5D5] text-xl'>El estándar Full-Fidelity™ patentado por <span className='font-semibold text-white'>Digital</span> ofrece audio sin precedentes y verdaderamente sin pérdidas, exactamente como se pretendía escuchar. Rodéate de un sonido impecable y redescubre tu música favorita en un cómodo dispositivo todo en uno, supraaural y completamente inalámbrico.</p>
                </div>
            </section>
            {/* Third section */}
            <section className='flex flex-col items-center gap-6 pt-32 pb-24 bg-black sectionHome lg:flex-row-reverse lg:pt-0 xl:pb-0'>
                <div className='flex items-center justify-center w-full sm:w-3/4 lg:w-2/4 lg:relative lg:-ml-36'>
                    <video src='./src/assets/Video/video2.mp4' autoPlay loop muted className='w-full h-full'></video>
                </div>
                <div className='w-11/12 text-start -mt-28 z-10 lg:text-start lg:w-3/5 lg:pl-16 lg:absolute lg:z-10 lg:left-0 xl:pl-24 xl:w-[55%]'>
                    <h2 className='text-white font-bold text-[2.75rem] pb-6 lg:text-6xl'>Un paradigma completamente nuevo</h2>
                    <p className='text-[#D5D5D5] text-xl'>Va más allá de Bluetooth™ con un protocolo inalámbrico innovador que transmite audio verdadero sin pérdidas. Digital aprovecha el poder de Wi-Fi para entregar sin problemas todos los datos que exige el sonido sin comprimir. Es mejor que la alta fidelidad: es Full-Fidelity™.</p>
                </div>
            </section>
            {/* Fourth section */}
            <section className='flex flex-col items-center gap-6 pt-32 pb-24 bg-black sectionHome lg:flex-row lg:pt-6'>
                <div className='flex items-center justify-center w-full sm:w-3/4 lg:w-2/4 lg:relative'>
                    <img src='./src/assets/Img/img-1.png' className='hidden w-full h-full lg:inline-block'></img>
                </div>
                <div className='w-11/12 text-start -mt-28 z-10 sm:w-11/12 lg:text-start lg:w-3/5 lg:pl-16 lg:absolute lg:z-10 lg:right-12 lg:mt-10 xl:pl-24 xl:w-[55%]'>
                    <div className="bg-gradient">
                        <div className="bg-gradient-1"></div>
                        <div className="bg-gradient2">
                            <span className='gradient-span'></span>
                            <span className='gradient-span'></span>
                            <span className='gradient-span'></span>
                            <span className='gradient-span'></span>
                        </div>
                    </div>
                    <h3 className='text-white font-semibold text-[2.75rem] pb-8 lg:text-6xl'>Envíos a todo el país</h3>
                    <div className='flex flex-col gap-8 pr-4 text-white'>
                        <div className='flex gap-2'>
                            <BsCartCheck size={40} color='white' className='w-2/12'></BsCartCheck>
                            <div className='w-4/5'>
                                <h4 className='text-xl font-semibold xl:text-2xl'>Garanía</h4>
                                <p className='text-base xl:text-xl'>Sus auriculares incluyen una garantía de hardware de dos años por defectos de fabricación o mal funcionamiento.</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <LiaShippingFastSolid size={55} color='white' className='w-2/12'></LiaShippingFastSolid>
                            <div className='w-4/5'>
                                <h4 className='text-xl font-semibold xl:text-2xl'>Envío gratis</h4>
                                <p className='text-base xl:text-xl'>En ordenes superiores a los 20$ el envío es totalmente gratis a cualquier lugar del país, trabajamos con MRW, Zoom y Tealca.</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <AiOutlineDollar size={40} color='white' className='w-2/12'></AiOutlineDollar>
                            <div className='w-4/5'>
                                <h4 className='text-xl font-semibold xl:text-2xl'>Compra ahora, paga luego</h4>
                                <p className='text-base xl:text-xl'>Puedes realizar tu compra y pagar en comodas cuotas (aplican condiciones)</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <BsWallet2 size={40} color='white' className='w-2/12'></BsWallet2>
                            <div className='w-4/5'>
                                <h4 className='text-xl font-semibold xl:text-2xl'>Métodos de pago</h4>
                                <p className='text-base xl:text-xl'>Manejamos diversos métodos de pagos, tales como pago móvil, transferencia bancaria, zelle y binance.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-11/12 pt-12 m-auto'>
                       <button className='text-white font-extrabold text-xl bg-[#8A3BBF] w-full px-4 py-2 rounded-3xl button-transparent'><Link to="/products">Compra ahora</Link></button> 
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Home; 