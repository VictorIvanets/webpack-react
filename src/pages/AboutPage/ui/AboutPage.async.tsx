import { FunctionComponent, lazy } from 'react';

export const AboutPageasync = lazy<FunctionComponent>(
    
    () => new Promise((res)=>{

        setTimeout(()=>res(import('./AboutPage')), 100)

    })

);