import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext.jsx';
import '../style/register.css';

function Password() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { pwdResetRequest, errors: emailErrors, showErrors, setShowErrors, resetForm } = useAuth(); 
    
    const onSubmit = handleSubmit((value) => {
        pwdResetRequest(value)
    });
    
    useEffect(() => {
        if (resetForm) reset()
    }, [resetForm])

    return (
        <section className='bg-black flex flex-col items-center justify-center sectionRegister px-5 py-4 lg:flex-row'>
            <section className='text-white flex flex-col items-center h-full justify-center gap-16 w-full sm:w-full md:w-[55%] lg:w-2/4'>
                <div className='flex flex-col gap-10 w-4/5 sm:w-[55%] md:w-full lg:w-[70%] xl:w-[65%]'>
                    <h1 className='text-white title-register md:text-6xl lg:pt-0'>Restablecer Contraseña</h1>
                    <p className='text-[#AFAFAF] text-[18px]'>Ingrese su dirección de correo electrónico para que podamos enviarle un enlace que le permitirá restablecer su contraseña.</p>
                    <form className='flex flex-col gap-6 text-lg font-medium' onSubmit={onSubmit}>
                        <div className='flex flex-col w-full gap-2'>
                            <label htmlFor='email' className='text-[#AFAFAF]'>Email</label>
                            <input type="text" {...register('email', { required: { value: true, message: "Email requerido" }, pattern: { value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, message: "Introduzca un correo válido." } })} placeholder='Ingrese su Email' className='w-full p-2 border border-solid border-[#ffffff0d] rounded-lg outline-none bg-transparent placeholder-[#555555]' onChange={() => {setShowErrors((currentValue) => ({...currentValue, email: false}))}}/>
                        </div>
                        {errors.email && <span className='span-register'>{errors.email.message}</span>}
                        {emailErrors.email && showErrors.email && <span className='span-register'>{emailErrors.email}</span>}
                        <div className='w-full'>
                            <button type='submit' className='button-register bg-[#8A3BBF]'><p>Enviar</p></button>
                        </div>
                        <div>
                            <p className='text-[#555555]'>Volver a<Link to='/login' className='font-bold text-[#AFAFAF] pl-2 hover:text-white'>Iniciar Sesión</Link></p>
                        </div>
                    </form>
                </div>
            </section>
            <section className="hidden lg:flex lg:flex-col lg:items-center lg:w-2/4">
                <div className='border border-white container-earphone rounded-xl lg:w-3/4'>
                    <div className='w-full flex content-start h-[10%]'>
                        <img src="./src/assets/Img/logo-digital.png" alt="Digital" className='w-40 h-40 ml-4' />
                    </div>
                    <div className='flex items-center justify-center h-[85%]'>
                        <img src='./src/assets/Img/img-register.png' alt="Auricular" className="w-[95%] h-[500px]" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Password; 