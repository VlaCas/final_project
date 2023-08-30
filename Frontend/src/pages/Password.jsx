import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext.jsx';
import { PopupMessage } from '../components/PopupMessage.jsx';
import '../style/register.css';

function Password() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { pwdResetRequest, showPopupMessage, resetForm, errors: emailErrors, successMessage } = useAuth(); 
  const [clickSubmit, setClickSubmit] = useState(false);
  const conditionsToShowMessage = emailErrors?.email || errors.email || successMessage?.message;
  
  const onSubmit = handleSubmit((value) => {
    if (showPopupMessage){
      pwdResetRequest(value)
    }
  });
  
  useEffect(() => {
    if (resetForm) reset()
  }, [resetForm])

  return (
    <section className='bg-black sectionRegister px-5 py-4'>
      <section className='text-white flex flex-col items-center h-full justify-center gap-16 w-full sm:w-full md:w-4/5 xl:w-3/5'>
        <div className='flex flex-col gap-10 w-4/5 sm:w-[55%] md:w-full lg:w-[70%] xl:w-[65%]'>
          <h1 className='text-white title-register md:text-6xl lg:pt-0'>Restablecer Contraseña</h1>
          <p className='text-[#AFAFAF] text-[18px]'>Ingrese su dirección de correo electrónico para que podamos enviarle un enlace que le permitirá restablecer su contraseña.</p>
          <form className='flex flex-col gap-6 text-lg font-medium' onSubmit={onSubmit}>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor='email' className='text-[#AFAFAF]'>Email</label>
              <input type="text" {...register('email', { required: { value: true, message: "Por favor, introduzca su correo." }, pattern: { value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, message: "Introduzca un correo válido." } })} placeholder='Ingrese su Email' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]'  onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
            </div>
            <div className='w-full'>
              <button type='submit' className='button-register bg-[#8A3BBF]' onClick={() => {setClickSubmit((current) => !current)}} disabled={showPopupMessage ? false : true}><p>Enviar</p></button>
            </div>
            <div>
              <p className='text-[#555555]'>Volver a<Link to='/login' className='font-bold text-[#AFAFAF] pl-2 hover:text-white'>Iniciar Sesión</Link></p>
            </div>
          </form>
        </div>
      </section>
      <ErrorPopup formErrors={errors} submit={clickSubmit}/>
      <SuccessPopup submit={clickSubmit}/>
      {conditionsToShowMessage && <PopupMessage formErrors={errors} submit={clickSubmit}/>}
    </section>
  );
};

export default Password; 