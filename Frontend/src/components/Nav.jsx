import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import '../style/nav.css';

function Nav() {
    return (
        <>
            <nav>
                <Link to="/"><img src="./src/assets/Img/logo-digital.png" alt="logo" className='h-[90px] w-20 lg:w-36 ' /></Link>
                <div className="flex gap-2 items-center xl:gap-4">
                    <HiOutlineShoppingBag className="text-white text-[2rem] shop-icon"></HiOutlineShoppingBag>
                    <button className="text-white text-xl bg-[#8A3BBF] w-24 px-2 py-1 lg:w-36 button-nav"><Link to="/login"><p>Ingresar</p></Link></button>
                </div>
            </nav>
        </>
    );
};

export default Nav; 