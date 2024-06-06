import { forwardRef, memo } from "react";
import { InputHTMLAttributes } from 'react';

 


export const Input = 
   memo(forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>> (function Input
        ({className, ...props}, ref) 
    {

    return  <input
    ref={ref}
    className={`input ${className}`}
    {...props}
    />;

    }));


export default Input