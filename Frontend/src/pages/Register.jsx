import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext.jsx';

function Register() {
  const { register, handleSubmit } = useForm();
  const { signup, isAuthenticated } = useAuth(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])
  
  const onSubmit = handleSubmit((values) => { 
    signup(values);
  });
  
  return (
    <div className='max-w-md p-10 rounded-md bg-zinc-800'>
      <form onSubmit={onSubmit}>  
        <input type='text' { ...register('name' , { required: true })} className='w-full px-4 py-2 my-2 text-white rounded-md bg-zinc-700' placeholder='name'/>
        <input type='email' { ...register('email' , { required: true })} className='w-full px-4 py-2 my-2 text-white rounded-md bg-zinc-700' placeholder='email'/>
        <input type='password' { ...register('password' , { required: true })} className='w-full px-4 py-2 my-2 text-white rounded-md bg-zinc-700' placeholder='password'/>
        <button type='submit' className='text-white'>Register</button>
      </form>
    </div>
  );
};

export default Register;