import NavUser from '../components/NavUser';
import Footer from '../components/Footer';
import pageTransition from '../Libs/Animations/pageTransition';
import '../style/products.css';

function Products() {
    return (
        <>
            <section className='flex flex-col bg-black section-products'>
                <NavUser></NavUser>
                <main className='mt-[90px] px-4 pb-16 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5'>
                    {/* Categorías */}
                    <div className='text-white text-xl flex gap-8 justify-between items-center border-b mb-6 px-4 py-4 md:gap-8 bg-[#0d0d0d] lg:flex-col lg:justify-start lg:items-start lg:col-span-1 lg:border-b-0 lg:py-8 lg:bg-black xl:col-span-1 lg:text-2xl xl:gap-12'>
                        <h3 className='hidden pb-6 text-3xl font-extrabold lg:block'>Catergorías</h3>
                        <p className='hover:text-[#8A3BBF]'>On-ear</p>
                        <p className='hover:text-[#8A3BBF]'>Gamers</p>
                        <p className='hover:text-[#8A3BBF]'>In-ear</p>
                        <p className='hover:text-[#8A3BBF]'>Deportivos</p>
                    </div>
                    {/* Contenedor de cards */}
                    <div className='grid grid-cols-1 gap-24 pt-10 pb-48 container-cards place-items-center md:grid-cols-2 md:gap-2 lg:col-span-4 xl:grid-cols-3 xl:col-span-4'>
                        <div className='flex flex-col items-center justify-center w-4/5 text-white card md:h-3/4 md:w-11/12'>
                            <div className='flex flex-col items-center py-16 bg-[#0d0d0d] rounded-3xl md:py-0 xl:w-full xl:py-8'>
                                <img src="./src/assets/Img/img-1.png" alt="auricular" className='w-3/5 md:w-11/12 md:h-3/4 xl:w-full xl:h-full' />
                                <button className='card-button bg-[#8A3BBF] py-2 md:w-4/5'><p className='text-xl'>Agregar al carrito</p></button>
                            </div>
                            <div className='pt-4 text-center'>
                                <p className='text-3xl font-bold hover:text-[#8A3BBF]'>Beats B-05</p>
                                <p className='text-[1.6rem] text-semibold'>20$</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-4/5 text-white card md:h-3/4 md:w-11/12'>
                            <div className='flex flex-col items-center py-16 bg-[#0d0d0d] rounded-3xl md:py-0 xl:w-full xl:py-8'>
                                <img src="./src/assets/Img/img-1.png" alt="auricular" className='w-3/5 md:w-11/12 md:h-3/4 xl:w-full xl:h-full' />
                                <button className='card-button bg-[#8A3BBF] py-2 md:w-4/5'><p className='text-xl'>Agregar al carrito</p></button>
                            </div>
                            <div className='pt-4 text-center'>
                                <p className='text-3xl font-bold hover:text-[#8A3BBF]'>Beats B-05</p>
                                <p className='text-[1.6rem] text-semibold'>20$</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-4/5 text-white card md:h-3/4 md:w-11/12'>
                            <div className='flex flex-col items-center py-16 bg-[#0d0d0d] rounded-3xl md:py-0 xl:w-full xl:py-8'>
                                <img src="./src/assets/Img/img-1.png" alt="auricular" className='w-3/5 md:w-11/12 md:h-3/4 xl:w-full xl:h-full' />
                                <button className='card-button bg-[#8A3BBF] py-2 md:w-4/5'><p className='text-xl'>Agregar al carrito</p></button>
                            </div>
                            <div className='pt-4 text-center'>
                                <p className='text-3xl font-bold hover:text-[#8A3BBF]'>Beats B-05</p>
                                <p className='text-[1.6rem] text-semibold'>20$</p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <Footer></Footer>
        </>
    );
}

export default pageTransition(Products);
