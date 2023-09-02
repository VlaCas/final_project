import gsap from "gsap";

export const cursorAnimation = () => {
  
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  
  const cursorB = document.createElement('div');
  cursorB.className = 'cursor-f';
  
  let size = 30;
  let sizeF = 46;
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorB);
  
  cursor.style.setProperty('--size', size+'px');
  cursorB.style.setProperty('--size', sizeF+'px');
  
  window.addEventListener('mousemove', (e) => {
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    gsap.to(cursor, {
      left: mouseX - (size/2),
      top: mouseY - (size/2),
      duration: 0.3, 
      ease: "power4.out" 
    });
    
    gsap.to(cursorB, {
      left: mouseX - (sizeF/2),
      top: mouseY - (sizeF/2),
      delay: 0.1,
      stagger: -0.2
    })
  });
  
  function mousedown(e) {
    gsap.to(cursor, {scale: 4.5});
    gsap.to(cursorB, {scale: .4});
  }
  
  function mouseup(e) {
    gsap.to(cursor, {scale: 1});
    gsap.to(cursorB, {scale: 1});
  }
  
  window.addEventListener('mousedown', mousedown, true);
  window.addEventListener('mouseup', mouseup, true);
};