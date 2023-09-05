import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext.jsx';
import { PopupMessage } from '../components/PopupMessage.jsx';
import pageTransition from "../Libs/Animations/pageTransition"; 
import '../style/register.css';

function Login() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const { signin, isAuthenticated, showPopupMessage, errors: loginErrors, waitingResponse } = useAuth(); 
	const [clickSubmit, setClickSubmit] = useState(false);
	const navigate = useNavigate();  
	const conditionsToShowMessage = loginErrors?.email || loginErrors?.password || errors.email || errors.password;
	
	const onSubmit = handleSubmit((values) => {
		if (showPopupMessage){
			signin(values);
		}
	});
	
	useEffect(() => {
		if (isAuthenticated) navigate('/');
  }, [isAuthenticated, errors]);

	return (
		<section className='px-5 py-4 bg-black sectionRegister'>
			<section className='flex flex-col items-center justify-center w-full h-full gap-16 text-white sm:w-full md:w-3/5'>
				<div className='flex flex-col gap-10 w-4/5 sm:w-[55%] md:w-full lg:w-4/5 xl:w-4/6'>
					<h1 className='text-white title-register md:text-6xl lg:pt-0'>Bienvenido</h1>
					<form className='flex flex-col gap-6 text-lg font-medium' onSubmit={onSubmit}>
						<div className='flex flex-col w-full gap-2'>
							<label htmlFor='email' className='text-[#AFAFAF]'>Email</label>
							<input type='text' {...register('email', { required: { value: true, message: 'Por favor, introduzca su correo.' }, pattern: { value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, message: 'Introduzca un correo válido.' } })} placeholder='ejemplo@gmail.com' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]'	onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
						</div>
						<div className='flex flex-col gap-6'>
							<div className='flex flex-col gap-2'>
								<label htmlFor='contraseña' className='text-[#AFAFAF]'>Contraseña</label>
								<input type='password' {...register('password', { required: { value: true, message: 'Por favor, introduzca su contraseña.' }, pattern: { value: '^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$', message: 'Contraseña incorrecta' } })} placeholder='Ingrese su contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {}} onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); onSubmit(); setClickSubmit((current) => !current)}}}/>
							</div>
						</div>
						<div className='w-full'>
							<button type='submit' className={`button-register bg-[#8A3BBF] ${!waitingResponse ? null : 'loading'}`} onClick={() => {setClickSubmit((current) => !current)}} disabled={showPopupMessage ? false : true}><p>{!waitingResponse ? 'Iniciar Sesión' : null}</p></button>
						</div>
						<div className='flex flex-col md:flex-row md:justify-between'>
							<p className='text-[#555555]'>¿No tienes una cuenta?<Link to='/register' className='font-bold text-[#AFAFAF] pl-2 hover:text-white'>Regístrate</Link></p>
							<p><Link to='/password' className='font-bold text-[#AFAFAF] hover:text-white xl:pl-3'>¿Olvidaste tu contraseña?</Link></p>
						</div>
					</form>
				</div>
			</section>
			{conditionsToShowMessage && <PopupMessage formErrors={errors} submit={clickSubmit}/>}
		</section>
	);
};

export default pageTransition(Login);   