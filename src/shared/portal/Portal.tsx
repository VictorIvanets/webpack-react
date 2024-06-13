import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}


export const Portal = ({children, element = document.querySelector('#root')}: PortalProps) => {

    return createPortal(children, element)
    
}


export default Portal