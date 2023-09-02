import { Link } from "react-router-dom";
import { useAuth } from '../Context/AuthContext.jsx';

const ShowMenu = (props) => {
    const { showMenu } = props;
    const { logout } = useAuth(); 

    return(
        <>
            <div showMenu={showMenu} className={`show-menu h-screen  fixed w-full flex justify-center transition-all duration-500 ease-in-out z-20 ${ showMenu ? "right-0" : "-right-full"}`}>
                <ul className="flex flex-col items-center justify-center gap-12 text-5xl font-semibold text-white ">
                    <li className="hover:text-[#8A3BBF] transition duration-500 ease-in-out"><Link >Mi cuenta</Link></li>
                    <li className="hover:text-[#8A3BBF] transition duration-500 ease-in-out"><Link>Comprar</Link></li>
                    <li className="hover:text-[#8a3bbf] transition duration-500 ease-in-out"><Link>Ordenes</Link></li>
                    <li className="hover:text-[#8A3BBF] transition duration-500 ease-in-out" onClick={logout}><Link>Cerrar sesión</Link></li>
                </ul>
            </div>
        </>
    );
};

export default ShowMenu;