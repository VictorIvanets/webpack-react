// import { lazy } from 'react';

// export const Auth = lazy(() => import('./Auth'));


import { LoginModalProps } from 'features/AuthByUserName/LoginModal';
import { FunctionComponent, lazy } from 'react';

export const Auth = lazy<FunctionComponent<LoginModalProps>>(
    
    () => new Promise((res)=>{

        setTimeout(()=>res(import('./Auth')), 0)

    })

);