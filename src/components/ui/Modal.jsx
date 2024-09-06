import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({children,open,className}) {
    const refdialog=useRef()
    useEffect(()=>{
 const curr=refdialog.current
 if (open) {
   curr.showModal();
 }else {
    if (curr.open) {
      curr.close();
    }
  }
        //  console.log(curr)
    },[open])
   
   
  return createPortal(
  
   
        <dialog className={`modal z-10 ${className}`} ref={refdialog}>
             {children}
        </dialog>,
        document.getElementById('modal')
  
  )
}

export default Modal