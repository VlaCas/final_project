import { BiLogoTiktok } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa'
import '../style/footer.css';

function Footer() {

    return (
        <>
            <footer className='bg-black text-[#D5D5D5] md:px-12 pt-32 pb-12'>
                <div className='flex flex-col gap-8 justify-between items-center'>
                    <div className='flex gap-8'>
                        <a href="https://www.tiktok.com/" className='footer-icon'><BiLogoTiktok size={30} color='white'></BiLogoTiktok></a>
                        <a href="https://www.instagram.com/" className='footer-icon'><BsInstagram size={30} color='white'></BsInstagram></a>
                        <a href="https://www.facebook.com/" className='footer-icon'><FaFacebookSquare size={30} color='white'></FaFacebookSquare></a>
                    </div>
                    <div className='flex gap-4 text-sm lg:text-base md:gap-16'>
                        <p>digital@gmail.com</p>
                        <p>Valencia - Venezuela</p>
                        <p>+58 (412) 3993791</p>
                    </div>
                </div>
                <div className='text-center py-12 text-sm lg:text-base'>
                    <p>Copyright © 2023 Digital Todos los derechos reservados</p>
                </div>
            </footer>

        </>
    );
};

export default Footer; 