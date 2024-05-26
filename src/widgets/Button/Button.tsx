import {ButtonHTMLAttributes, FC} from 'react';
import { className } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/Providers/Theme/useTheme';

import {ReactNode } from 'react';


export enum ThemeButon {
    CLEAR = 'clearbtn',


}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButon
}


export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...othersProps
    } = props


    return (
        <button 
        className= {className}
        {...othersProps}
        >
            {children}
        </button>
    );

};

