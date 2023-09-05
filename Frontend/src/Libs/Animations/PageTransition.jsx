import { motion } from 'framer-motion';
import '../../style/pageTransition.css';

const pageTransition = (Component) => {
  return () => (
    <>
    
      <Component/>
      
      <motion.div
        className='capa'
        initial={{ scaleX: '100%', transformOrigin: 'right' }}
        animate={{ scaleX: '0%' }}
        exit={{ scaleX: '100%', transformOrigin: 'left', right: '150%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      /> 
      
      <motion.div
        className='capa2'
        initial={{ scaleX: '100%', transformOrigin: 'right' }}
        animate={{ scaleX: '0%' }}
        exit={{ scaleX: '100%', transformOrigin: 'left', right: '150%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* <motion.div
        className='slideIn'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> 
      
      <motion.div
        className='slideOut'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
      
    </>
  ) 
}; 

export default pageTransition;