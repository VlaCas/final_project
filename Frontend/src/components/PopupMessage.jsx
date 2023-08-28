import { useState, useEffect } from 'react';
import gsap from 'gsap'; 
import { CustomEase } from 'gsap/CustomEase';
import { useAuth } from '../Context/AuthContext';
import { Close } from './svg/Close';
import { Error } from './svg/Error';
import '../style/popupMessage.css';

export const PopupMessage = ({ formErrors, submit }) => {
  const { errors, showError, setShowError } = useAuth();
  const [animationInProgress, setAnimationInProgress] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector('.messageWrapper');
    const svgClose = document.querySelector('.svgClose');
    
    if (wrapper && !animationInProgress && showError) {
      setAnimationInProgress(true);

      const desplazamientoEntrada = gsap.to(wrapper, {
        marginRight: '390px', 
        duration: 1,
        ease: "elastic.out",
        paused: true,
        onStart: () => {
          setShowError(false)
          wrapper.classList.remove('animationClass');
          void wrapper.offsetWidth;
          wrapper.classList.add('animationClass');
          setTimeout(() => {
            desplazamientoSalida.play();
          }, 3000);
        }
      });

      const desplazamientoSalida = gsap.to(wrapper, {
        marginRight: 0,
        duration: 0.8,
        ease: CustomEase.create("custom", "M0,0 C0,0 0.163,-0.166 0.188,-0.082 0.229,0.057 0.227,1 0.5,1 0.554,1 1,1 1,1 "),
        paused: true,
        onComplete: () => {
          setAnimationInProgress(false);
          setShowError(true);
        }
      });

      const onClick = () => {
        desplazamientoSalida.play();
      };

      svgClose.addEventListener('click', onClick);

      desplazamientoEntrada.play();
    }
  }, [errors, formErrors, submit]);

  const shouldShowMessage = formErrors.name || formErrors.email || formErrors.password || formErrors.confirmPassword || errors.email || errors.password;

  return shouldShowMessage && (
    <div className="messageWrapper">
      <Error />
      <p>
        {formErrors.name?.message || formErrors.email?.message || formErrors.password?.message || formErrors.confirmPassword?.message || errors.email || errors.password}
      </p>
      <Close />
    </div>
  );
};