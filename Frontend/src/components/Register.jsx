import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/register.css';

// const verifyEmail = require('../Mails/verifyEmail');

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailInUse, setEmailInUse] = useState(false); 
  const msg = useRef();

  const hadleRegister = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    try {
      const response = await axios.post('http://localhost:7117/api/registerUser', user);
      console.log(response.data);
      if (msg && msg.current)
        msg.current.style.top = '10px'
      setTimeout(() => {
        if (msg && msg.current)
          msg.current.style.top = '-100px'
      }, 5000);

      // const response2 = await axios.post('https://legion-dark1.com/send-email', { 
      //   to: email,
      //   subject: 'Verificación de Correo',
      //   html: verifyEmail(response.data.id)
      // });
      // console.log(response2.data);
    } catch (error) {
      console.error(error)
      if (error.response.status === 409) 
        setEmailInUse(true); 
    }
  }

  function message(e, input) {
    if (e.target.validity.patternMismatch) {
      if (input === 'name')
        e.target.setCustomValidity('El nombre solo puede contener letras.');
      else if (input === 'email')
        e.target.setCustomValidity('El correo debe tener un formato valido, Ejemplo: nombre_apellido@gmail.com');
      else
        e.target.setCustomValidity('La contraseña debe contener un minimo de 8 y un máximo de 32 caracteres, debe contener al menos una letra y un numero.');
    } else if (e.target.validity.valueMissing) {
      if (input === 'name')
        e.target.setCustomValidity('Por favor, ingresa tu nombre.');
      else if (input === 'email')
        e.target.setCustomValidity('Por favor, ingresa tu correo.');
      else
        e.target.setCustomValidity('Por favor, ingresa tu contraseña.');
    } else {
      e.target.setCustomValidity('');
    }
  }

  return (
    <section id='sectionRegister'>
      <span className='message' ref={msg} >Hemos enviado un correo de verificacion a su Email, por favor verifique su correo para completar el registro.</span>
      <div id='wrapperRegister'>
        <h1 className='pt-8 text-3xl font-bold lg:pt-0'>Registrarse</h1>
        <form className='container flex flex-col bg-[#a3cef1be] w-4/5 rounded-md py-16 px-8 gap-y-6 items-center' onSubmit={hadleRegister}>
          <div className='name container-inputRegister'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' id='name' className='pl-2' name='name' placeholder='Ingrese su nombre' spellCheck='false' required pattern='^[a-zA-Z ]+$' onInvalid={(e) => { message(e, 'name') }} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='email container-inputRegister'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' className='pl-2' name='email' placeholder='Ingrese su email' spellCheck='false' required pattern='^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$-u' onInvalid={(e) => { message(e, 'email') }} onChange={(e) => {setEmail(e.target.value); setEmailInUse(false)}} />
            { emailInUse && <p className='error'>Ya éste correo está en uso.</p> }
          </div>
          <div className='password container-inputRegister'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' className='pl-2' name='password' placeholder='Ingrese su contraseña' required pattern='^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$' onInvalid={(e) => { message(e, 'password') }} minLength='8' maxLength='32' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='w-full text-center text-white accountCreate'>
            <button type='submit' className='w-full font-bold blue-button'>Crear Cuenta</button>
          </div>
          <div className='signIn'>
            <p>¿Ya tienes cuenta?<Link to='/login' className='font-bold'>Iniciar Sesión.</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register; 