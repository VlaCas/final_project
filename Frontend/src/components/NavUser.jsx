import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineMenu } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import '../style/nav.css';
import { useState } from "react";
import ShowMenu from "./ShowMenu";

function NavUser() {
    const [showMenu, setShowmenu] = useState(false);

    const toggleMenu = () => {
        setShowmenu(!showMenu);
    };

    return (
        <>
            <nav>
                <Link to="/"><img src="./src/assets/Img/logo-digital.png" alt="logo" className='h-[90px] w-20 lg:w-36 ' /></Link>
                <div className="flex items-center gap-8">
                    <HiOutlineShoppingBag className="text-white text-[2rem] shop-icon"></HiOutlineShoppingBag>
                    <div onClick={toggleMenu} className="text-white text-[2rem] shop-icon">
                        { showMenu ? <IoCloseOutline className="text-[#8A3BBF] text-4xl"/> : <HiOutlineMenu />}
                    </div>
                </div>
            </nav>
            <ShowMenu showMenu={showMenu}/>
        </>
    );
};

export default NavUser; 