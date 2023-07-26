import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Axios from "axios";
import "../resources/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useContext(AuthContext);
  const [incEmail, setIncEmail] = useState(false);
  const [incPassword, setIncPassword] = useState(false);
  const navigate = useNavigate();
  const userID = useParams();
  const msg = useRef();

  useEffect(() => {
    if (userID.userID) {
      const verifyEmail = async () => {
        try {
          const response = await Axios.patch(`https://legion-dark1.com/user/${userID.userID}`);
          //console.log(response.data.message);
          if (msg && msg.current)
            msg.current.style.top = "10px"
          msg.current.innerText = "¡Su correo ha sido verificado, ya puede iniciar sesión!"
          setTimeout(() => {
            if (msg && msg.current)
              msg.current.style.top = "-100px"
          }, 5000);
        } catch (error) {
          console.error("esto no corrió: " + error);
        }
      };
      verifyEmail();
    }
  }, [userID])

  const hadleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const response = await Axios.post("https://legion-dark1.com/userLogin", credentials);
      //console.log(response.data);
      const { token } = response.data;
      const { role } = response.data;

      // Almacenar el role en el Local Storage
      localStorage.setItem("role", role);
      localStorage.setItem("token", token);

      if (role === "admin") {
        navigate("/paneladmin/pagos");
        setLoggedIn(true);
      } else if (role === "user") {
        navigate("/inicio");
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 403) {
        if (msg && msg.current) {
          msg.current.style.top = "10px"
          msg.current.innerText = "Hemos enviado un correo de verificación a su Email, por favor verifique su correo para completar el registro."
          setTimeout(() => {
            if (msg && msg.current)
              msg.current.style.top = "-100px"
          }, 5000);
        }
      } else if (error.response.status === 401) {
        if (error.response.data.message === "Email no registrado")
          setIncEmail(true);
        else
          setIncPassword(true);
      }
    }
  };

  function message(e, input) {
    if (e.target.validity.valueMissing) {
      if (input === "email") {
        e.target.setCustomValidity("Por favor, ingresa tu email.");
      }
      else
        e.target.setCustomValidity("Por favor, ingresa tu contraseña.");
    } else
      e.target.setCustomValidity("");
  }

  return (
    <section className="flex flex-col sectionLogin lg:flex-row">
      <span className="message" ref={msg}></span>
      <section className="flex flex-col items-center justify-center gap-6 lg:gap-12 lg:w-2/4">
        <h1 className="pt-8 text-3xl font-bold lg:pt-0">Ingrese al sistema</h1>
        <form className="container flex flex-col bg-[#a3cef1be] w-4/5 rounded-md py-16 px-8 gap-y-6 mb-8 items-center" onSubmit={hadleLogin}>
          <div className="email container-input">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="pl-2" name="email" placeholder="Ingrese su email" spellCheck="false" required title="Por favor, ingresa tu email." onInvalid={(e) => { message(e, "email") }} onChange={(e) => { setEmail(e.target.value); setIncEmail(false) }} />
            {incEmail && <p className="error">Email no registrado.</p>}
          </div>
          <div className="password container-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" className="pl-2" name="password" placeholder="Ingrese su contraseña" spellCheck="false" required title="Por favor, ingresa tu contraseña." onInvalid={(e) => { message(e, "password") }} onChange={(e) => { setPassword(e.target.value); setIncPassword(false) }} />
            {incPassword && <p className="error">Contraseña incorrecta.</p>}
          </div>
          <div className="w-full text-center text-white signIn">
            <button type="submit" className="w-full font-bold blue-button">Iniciar Sesión</button>
          </div>
          <div className="text-center register">
            <p className="font-bold hover:text-[#0A369D]"><Link to="/password">¿Olvidaste tu contraseña?</Link></p>
            <p className="">¿Todavía no tienes una cuenta? <Link to="register" className="font-bold hover:text-[#0A369D]">Regístrate.</Link></p>
          </div>
        </form>
      </section>
    </section>
  );
};