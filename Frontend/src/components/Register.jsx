import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../style/register.css';

function Register() {

	const { register, handleSubmit, watch, formState: { errors }, } = useForm();
	const onSubmit = handleSubmit((data) => {
		console.log(data)
	});

	return (
		<section className='bg-[#1B1B1B] flex flex-col items-center justify-center sectionRegister px-5 py-4 lg:flex-row'>
			<section className='text-white flex flex-col items-center h-full justify-center gap-16 w-full sm:w-full md:w-[55%] lg:w-2/4'>
				<div className='flex flex-col gap-10 sm:w-[55%] md:w-full lg:w-4/5 xl:w-3/5'>
					<h1 className='title-register text-white md:text-6xl lg:pt-0'>Registrarse</h1>
					<form className='flex flex-col gap-6 font-medium text-lg' onSubmit={onSubmit}>
						<div className='w-full flex flex-col gap-2'>
							<label htmlFor='nombre completo' className='text-[#AFAFAF]'>Nombre Completo</label>
							<input type="text" {...register('name', { required: { value: true, message: "Nombre requerido" }, pattern: { value: "^[a-zA-Z ]+$", message: "El nombre solo puede contener letras" } })} placeholder='Ingrese su nombre completo' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' />
						</div>
						{errors.name && <span className='span-register'>{errors.name.message}</span>}
						<div className='w-full flex flex-col gap-2'>
							<label htmlFor='email' className='text-[#AFAFAF]'>Email</label>
							<input type="mail" {...register('mail', { required: { value: true, message: "Email requerido" }, pattern: { value: "^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$", message: "El Email debe tener un formato válido" } })} placeholder='ejemplo@gmail.com' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' />
						</div>
						{errors.mail && <span className='span-register'>{errors.mail.message}</span>}
						<div className='w-full flex gap-2'>
							<div className='flex flex-col gap-6 w-2/4'>
								<div className='flex flex-col gap-2'>
									<label htmlFor='contraseña' className='text-[#AFAFAF]'>Contraseña</label>
									<input type='password' {...register('password', { required: { value: true, message: "Contraseña requerida" }, pattern: { value: "^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$", message: "La contraseña debe contener un mínimo de 8 y un máximo de 32 caracteres, debe contener al menos una letra y un numero" } })} placeholder='Ingrese su contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' />
								</div>
								{errors.password && <span className='span-register'>{errors.password.message}</span>}
							</div>
							<div className='flex flex-col gap-6 w-2/4'>
								<div className='flex flex-col gap-2'>
									<label htmlFor='confirmarContraseña' className='text-[#AFAFAF]'>Confirmar contraseña</label>
									<input type='password' {...register('confirmPassword', { required: { value: true, message: "Confirme su contraseña" }, validate: (value) => value === watch('password') || 'Las contraseñas no coinciden' })} placeholder='Repita la contraseña' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' />
								</div>
								{errors.confirmPassword && <span className='span-register'>{errors.confirmPassword.message}</span>}
							</div>
						</div>
						<div className='w-full'>
							<button type='submit' className='button-register'><p>Crear Cuenta</p></button>
						</div>
						<div className=''>
							<p className='text-[#555555]'>¿Ya tienes cuenta?<Link to='/login' className='font-bold text-[#AFAFAF] pl-3 hover:text-white'>Iniciar Sesión.</Link></p>
						</div>
					</form>
				</div>
			</section>
			<section className="hidden lg:flex lg:flex-col lg:items-center lg:w-2/4">
				<div className='container-earphone rounded-xl border border-white lg:w-3/4'>
					<div className='w-full flex content-start h-[10%]'>
						<img src="./src/assets/Img/logo-digital.png" alt="Digital" className='w-40 h-40 ml-4' />
					</div>
					<div className='flex items-center justify-center h-[85%]'>
						<img src='./src/assets/Img/img-register.png' alt="Auricular" className="lg:w-[95%] lg:h-[420px] xl:h-[500px]" />
					</div>
				</div>
			</section>
		</section>
	);
};

export default Register; 