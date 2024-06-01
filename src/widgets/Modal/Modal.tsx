
import { useTheme } from 'app/Providers/Theme/useTheme';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import Portal from 'shared/portal/Portal';


interface ModelProps {
    className?: string
    children?: ReactNode 
    isOpen?: boolean
    onClose?: ()=>void
}


export const Modal = (props: ModelProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    }
    = props

    const closeHandler = useCallback(() =>{
        if(onClose) {
            onClose()
        }
    }, [onClose])


    const onContentClick = (e: React.MouseEvent)=>{
        e.stopPropagation()
    }


    useEffect(()=>{
        if(isOpen) {
            window.addEventListener('keydown', (e: KeyboardEvent)=>{
                if(e.key === 'Escape'){
                    closeHandler()
                }
            })
        }
        return window.removeEventListener('keydown', (e: KeyboardEvent)=>{
            if(e.key === 'Escape'){
                closeHandler()
            }
        } )
    }, [isOpen])

    const {theme} = useTheme()

    const [themadd, setThemadd] = useState('modal__content')

    useEffect(()=>{
        if (theme === "light") {
            setThemadd('modal__content')
        } 
        if (theme === "dark") {
            setThemadd('modal__content modaldark')
        }}, [theme])


    
    
    return (
    <Portal>
        <div className={className} onClick={closeHandler}>
        
            <div className={themadd} onClick={onContentClick}>
        
                {children}
        
            </div>    
        </div>
    </Portal>
    );
};

export default Modal;