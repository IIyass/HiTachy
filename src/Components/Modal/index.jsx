import React from "react"
import { createPortal } from 'react-dom';

import * as Style from "./styles"

const Modal = ({ open, onClose, children, ...others }) => {
    const modalContent = (
        <Style.ModalBackground onMouseDown={onClose}>
            <Style.Modal
                onMouseDown={(event) => {
                    event.stopPropagation();
                    return false;
                }}
                {...others}
            >
                {children}
            </Style.Modal>
        </Style.ModalBackground>
    );

    return open ? createPortal(modalContent, document.body) : null;
};


export default Modal;