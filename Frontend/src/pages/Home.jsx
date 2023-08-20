import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext.jsx';


function Home() {
  const { isAuthenticated } = useAuth(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])
  
  return (
    <p>Home</p>
  );
};

export default Home;