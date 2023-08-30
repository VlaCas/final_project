import { Link } from "react-router-dom";
import '../style/nav.css';

function Nav() {

    return (
        <>
            <nav>
                <Link to="/"><img src="./src/assets/Img/logo-digital.png" alt="logo" className='logo'/></Link>
                <button className="text-white font-extrabold text-xl bg-[#8A3BBF] w-36 px-4 py-2 rounded-3xl button-nav"><p>Comprar</p></button>
            </nav>

        </>
    );
};

export default Nav; 