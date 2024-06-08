import { useTheme } from 'app/Providers/Theme/useTheme';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import Logolight from 'shared/assets/Logoapp_light.svg'
import Logodark from 'shared/assets/Logoapp_dark.svg'
import Modal from 'widgets/Modal/Modal';
import { className } from "shared/lib/helpers/classNames/classNames"
import { Suspense, useCallback, useState } from 'react';
import Button from 'widgets/Button/Button';
import { Auth } from 'widgets/Auth/index';
import { PreLoader } from 'widgets/PreLoader';

export interface LoginModalProps {

    isOpen: boolean
    onClose?: ()=>void
}



export const LoginModal = ({isOpen, onClose}: LoginModalProps) => {


    return (
        <Modal
            className={className('modal', { opened: isOpen === true ? true : false}, [])}
            isOpen={isOpen}
            onClose={onClose}
            >
                <Suspense fallback={<PreLoader/>}>
                    <Auth isOpen={isOpen}/>
                </Suspense>
            

        </Modal>

    );
};



