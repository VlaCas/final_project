import { useState, useEffect } from 'react';
import gsap from 'gsap'; 
import { CustomEase } from 'gsap/CustomEase';
import { useAuth } from '../Context/AuthContext';
import { Close } from './svg/Close';
import { Error } from './svg/Error';
import '../style/popupMessage.css';

export const ErrorPopup = ({ formErrors, submit }) => {
  
  const { errors, setErrors, showPopupMessage, setShowPopupMessage } = useAuth();
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const shouldShowMessage = formErrors.name?.message || formErrors.email?.message || formErrors.password?.message || formErrors.confirmPassword?.message || errors.email || errors.password;

  useEffect(() => {
    const wrapper = document.querySelector('.messageWrapper');
    const svgClose = document.querySelector('.svgClose');
    
    if (!animationInProgress && showPopupMessage) {

      const desplazamientoEntrada = gsap.to(wrapper, {
        marginRight: '390px', 
        duration: 1,
        ease: "elastic.out",
        paused: true,
        onStart: () => {
          setAnimationInProgress(true);
          setShowPopupMessage(false)
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
          setShowPopupMessage(true);
          ['email', 'password'].forEach((field) => {
            if (errors[field]) {
              setErrors((currentErrors) => ({
                ...currentErrors,
                [field]: ''
              }));
            }
          })
        }
      });

      const onClick = () => {
        desplazamientoSalida.play();
      };

      svgClose.addEventListener('click', onClick);
      
      if (shouldShowMessage){
        desplazamientoEntrada.play();
      }
    }
  }, [formErrors, submit, errors]);

  return (
    <div className="messageWrapper">
      <Error />
      <p>
        {shouldShowMessage}
      </p>
      <Close />
    </div>
  ); 
}; 