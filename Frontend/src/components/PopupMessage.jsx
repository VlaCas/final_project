import { useState, useEffect } from 'react';
import gsap from 'gsap'; 
import { CustomEase } from 'gsap/CustomEase';
import { useAuth } from '../Context/AuthContext';
import { Close } from './svg/Close';
import { Check } from './svg/Check';
import { Error } from './svg/Error';
import '../style/popupMessage.css';

export const PopupMessage = ({ formErrors, submit }) => {
  
  const { errors, setErrors, showPopupMessage, setShowPopupMessage, successMessage, setSuccessMessage } = useAuth();
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const shouldShowMessage = formErrors.name?.message || formErrors.email?.message || formErrors.date?.message || formErrors.password?.message || formErrors.confirmPassword?.message || errors.email || errors.password;

  useEffect(() => {
    const wrapper = document.querySelector('.messageWrapper') ?? document.querySelector('.successMessageWrapper');
    const svgClose = document.querySelector('.svgClose');
    
    if (!animationInProgress && showPopupMessage) {
      setShowPopupMessage(false)

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
          ['email', 'password'].forEach((field) => {
            if (errors[field]) {
              setErrors((currentErrors) => ({
                ...currentErrors,
                [field]: ''
              }));
            }
          })
          if (successMessage.success){
            setSuccessMessage((current) => ({
              ...current,
              success: false,
              message: ''
            }));
          }
          setShowPopupMessage(true);
          setAnimationInProgress(false);
        }
      });

      const onClick = () => {
        desplazamientoSalida.play();
      };

      svgClose.addEventListener('click', onClick);
      
      desplazamientoEntrada.play();
    }
  }, [formErrors, submit, errors, successMessage.message, errors.email]);

  return (
    <div className={shouldShowMessage ? 'messageWrapper' : successMessage.message ? 'successMessageWrapper' : null}>
      {shouldShowMessage ? <Error /> : successMessage.message ? <Check /> : null}
      <p>
        {shouldShowMessage ? shouldShowMessage : successMessage?.message ? successMessage.message : null}   
      </p>
      <Close />
    </div>
  ); 
}; 