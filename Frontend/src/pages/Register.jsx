import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext.jsx';
import { PopupMessage } from '../components/PopupMessage.jsx';
import '../style/register.css';

function Register() {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const { signup, isAuthenticated, showPopupMessage, errors: registerErrors, waitingResponse } = useAuth(); 
	const [clickSubmit, setClickSubmit] = useState(false);
	const navigate = useNavigate();
	const conditionsToShowMessage = registerErrors?.email || registerErrors?.password || errors.name || errors.email || errors.date || errors.password || errors.confirmPassword;
	
	const onSubmit = handleSubmit((values) => {
		if (showPopupMessage){
			signup(values)
		}
	});
	
	useEffect(() => {
		if (isAuthenticated) navigate('/');
  }, [isAuthenticated, errors]);
	
	return (
		<section className='px-5 py-4 bg-black sectionRegister'>
			<section className='flex flex-col items-center justify-center w-full h-full gap-16 text-white sm:w-full md:w-3/5'>
				<div className='flex flex-col gap-10 sm:w-[55%] md:w-full lg:w-4/5 xl:w-4/6'>
					<h1 className='text-white title-register md:text-6xl lg:pt-0'>Registrarse</h1>
					<form className='flex flex-col gap-6 text-lg font-medium' onSubmit={onSubmit}>
						<div className='flex flex-col w-full gap-2'>
							<label htmlFor='nombre completo' className='text-[#AFAFAF]'>Nombre Completo</label>
							<input type='text' {...register('name', { required: { value: true, message: 'Por favor, ingrese su nombre.' }, pattern: { value: /^[a-zA-ZñÑ ]+$/, message: 'El nombre solo puede contener letras.' }, maxLength: { value: 50, message: 'Intenta un nombre más corto.'}, minLength: { value: 3, message: 'Intenta un nombre más largo.'} })} placeholder='Ingrese su nombre completo' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
						</div>
						<div className='flex flex-col w-full gap-2'>
							<label htmlFor='email' className='text-[#AFAFAF]'>Email</label>
							<input type='text' {...register('email', { required: { value: true, message: 'Por favor, ingrese su correo.' }, pattern: { value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, message: 'El correo debe tener un formato válido.' } })} placeholder='ejemplo@gmail.com' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
						</div>
						<div className='flex flex-col w-full gap-2'>
							<label htmlFor='fecha' className='text-[#AFAFAF]'>Fecha de nacimiento</label>
							<input type='date' {...register('date', { required: { value: true, message: 'Por favor, ingrese su fecha de nacimiento.' }, validate: (value) => {const birthdate = new Date(value); const currentDate = new Date(); const age = currentDate.getFullYear()-birthdate.getFullYear(); return age >= 18 || "Para registrarse debe ser mayor de 18 años.";}})} placeholder='01/09/2023' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
						</div>
						<div className='flex w-full gap-2'>
							<div className='flex flex-col w-2/4 gap-6'>
								<div className='flex flex-col gap-2'>
									<label htmlFor='contraseña' className='text-[#AFAFAF]'>Contraseña</label>
									<input type='password' {...register('password', { required: { value: true, message: 'Por favor, ingrese su contraseña.' }, pattern: { value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@.,$*+\-])[a-zA-Z0-9@.,$*+\-]{8,16}$/, message: 'La contraseña debe contener al menos una letra, un número y un carácter especial "@.,$*+-". con un mínimo de 8 caracteres y un máximo de 16.' } })} placeholder='Ingrese su contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
								</div>
							</div>
							<div className='flex flex-col w-2/4 gap-6'>
								<div className='flex flex-col gap-2'>
									<label htmlFor='confirmarContraseña' className='text-[#AFAFAF]'>Confirmar contraseña</label>
									<input type='password' {...register('confirmPassword', { required: { value: true, message: 'Por favor, repita su contraseña.' }, validate: (value) => value === watch('password') || 'Las contraseñas no coinciden' })} placeholder='Repita la contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
								</div>
							</div>
						</div>
						<div className='w-full'>
							<button type='submit' className={`button-register bg-[#8A3BBF] ${!waitingResponse ? null : 'loading'}`} onClick={() => {setClickSubmit((current) => !current)}} disabled={showPopupMessage ? false : true}><p>{!waitingResponse ? 'Crear Cuenta' : null}</p></button>
						</div>
						<div>
							<p className='text-[#555555]'>¿Ya tienes cuenta?<Link to='/login' className='font-bold text-[#AFAFAF] pl-3 hover:text-white'>Iniciar Sesión.</Link></p>
						</div>
					</form>
				</div>
			</section>
			{conditionsToShowMessage && <PopupMessage formErrors={errors} submit={clickSubmit}/>}
		</section>
	);
};

export default Register; 