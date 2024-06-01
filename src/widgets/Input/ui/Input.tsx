import { forwardRef } from "react";
import { InputHTMLAttributes } from 'react';

 


export const Input = 
    forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>> (function Input
        ({className, ...props}, ref) 
    {

    return  <input
    ref={ref}
    className={`input ${className}`}
    {...props}
    />;

    });


export default Input