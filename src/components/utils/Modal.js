import React from "react";
import './../../styles/components/utils/Modal.css'
const Modal = ({title, body, footer, close, isVisible=false}) =>{
    return (<>
        {
           isVisible && <div className="Modal__">
            <div className="Modal__container Modal__size-sm">
                <div className="Modal__header">
                    <div className="Modal__header-title">
                        {title}
                    </div>
                    <div className="Modal__button-close" onClick={(e)=>{close(e)}}>
                        x
                    </div>
                </div>
                <div className="Modal__body">
                    {body}
                </div>
                <div className="Modal__footer">
                    {footer}
                </div>
            </div>
        </div>
        } 
    </>)
}

export default Modal;