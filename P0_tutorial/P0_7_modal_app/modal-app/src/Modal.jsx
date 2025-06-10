import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({show, onClose, children}) => {
    if (!show) {
        return null;
    }

    const modal_root = document.getElementById('modal-root');

    if (!modal_root) {
        console.error("The 'modal-root' element was not found in the DOM. Make sure it's in public/index.html");
        return null
    }

    return ReactDOM.createPortal(
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <button className='modal-btn-close' onClick={onClose}> X</button>
                {children}
            </div>
        </div>, modal_root
    )
}
export default Modal