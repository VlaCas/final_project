import { Link } from "react-router-dom";

const ShowMenu = (props) => {
    const { showMenu } = props;

    return(
        <>
            <div showMenu={showMenu} className={`show-menu h-screen bg-[#0d0d0d] fixed w-full flex justify-center transition-all duration-500 ease-in-out z-10 ${ showMenu ? "right-0" : "-right-full"}`}>
                <ul className="text-white text-3xl font-semibold flex flex-col items-center justify-center gap-12">
                    <li className="hover:text-[#8A3BBF] transition duration-500 ease-in-out"><Link >Mi cuenta</Link></li>
                    <li className="hover:text-[#8A3BBF] transition duration-500 ease-in-out"><Link>Comprar</Link></li>
                    <li className="hover:text-[#8a3bbf] transition duration-500 ease-in-out"><Link>Ordenes</Link></li>
                    <li className="hover:text-[#8A3BBF] transition duration-500 ease-in-out"><Link>Cerrar sesión</Link></li>
                </ul>
            </div>
        </>
    );
};

export default ShowMenu;