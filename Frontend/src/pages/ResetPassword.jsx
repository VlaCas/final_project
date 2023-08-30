import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext.jsx';
import { PopupMessage } from '../components/PopupMessage.jsx';
import '../style/register.css';

function NewPassword() {

  const [searchParams, setSearchParams] = useSearchParams();
  const passwordResetToken = searchParams.get('passwordResetToken')
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const { newPwdRequest, resetForm, showPopupMessage, errors: resetPasswordErrors, successMessage } = useAuth(); 
  const [clickSubmit, setClickSubmit] = useState(false);
  const conditionsToShowMessage = resetPasswordErrors?.password || errors.password || errors.confirmPassword || successMessage?.message;
  
  const onSubmit = handleSubmit((values) => {
    if (passwordResetToken) values.tokenURL = passwordResetToken;
    if (showPopupMessage){
      newPwdRequest(values);
    }
  });
  
  useEffect(() => {
    if (resetForm) reset()
  }, [resetForm])

  return (
    <section className='flex flex-col items-center justify-center px-5 py-4 bg-black sectionRegister lg:flex-row'>
      <section className='text-white flex flex-col items-center h-full justify-center gap-16 w-full sm:w-full md:w-[55%] lg:w-2/4'>
        <div className='flex flex-col gap-10 w-4/5 sm:w-[55%] md:w-full lg:w-[70%] xl:w-[65%]'>
          <h1 className='text-white title-register md:text-6xl lg:pt-0'>Restablecer Contraseña</h1>
          <form className='flex flex-col gap-6 text-lg font-medium' onSubmit={onSubmit}>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='contraseña' className='text-[#AFAFAF]'>Nueva Contraseña</label>
                <input type='password' {...register('password', { required: { value: true, message: 'Por favor, ingrese su nueva contraseña.' }, pattern: { value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@.,$*+\-])[a-zA-Z0-9@.,$*+\-]{8,16}$/, message: 'La contraseña debe contener al menos una letra, un número y un carácter especial "@.,$*+-". con un mínimo de 8 caracteres y un máximo de 16.' } })} placeholder='Ingrese su contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='contraseña' className='text-[#AFAFAF]'>Repetir Contraseña</label>
                <input type='password' {...register('confirmPassword', { required: { value: true, message: 'Por favor, confirme su contraseña.' }, validate: (value) => value === watch('password') || 'Las contraseñas no coinciden' })} placeholder='Repita la contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
              </div>
            </div>
            <div className='w-full'>
              <button type='submit' className='button-register' onClick={() => {setClickSubmit((current) => !current)}} disabled={showPopupMessage ? false : true}><p>Guardar</p></button>
            </div>
          </form>
        </div>
      </section>
      <section className='hidden lg:flex lg:flex-col lg:items-center lg:w-2/4'>
        <div className='border border-white container-earphone rounded-xl lg:w-3/4'>
          <div className='w-full flex content-start h-[10%]'>
            <img src='./src/assets/Img/logo-digital.png' alt='Digital' className='w-40 h-40 ml-4' />
          </div>
          <div className='flex items-center justify-center h-[85%]'>
            <img src='./src/assets/Img/img-register.png' alt='Auricular' className='w-[95%] h-[500px]' />
          </div>
        </div>
      </section>
      {conditionsToShowMessage && <PopupMessage formErrors={errors} submit={clickSubmit}/>}
    </section>
  );
};

export default NewPassword; 