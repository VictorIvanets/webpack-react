import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import './sass/index.sass'
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/Providers/Theme/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundarie } from 'app/Providers/Error/ErrorBoundarie';
import { StoreProvider } from 'app/Providers/StoreProvider';



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
      <BrowserRouter 
      // basename='newfront'
      >
            <StoreProvider>
           
                  <ErrorBoundary FallbackComponent={ErrorBoundarie}>
                        <ThemeProvider>
                                   <App />
                        </ThemeProvider>
                  </ErrorBoundary>
            
             </StoreProvider>
      </BrowserRouter>
  </React.StrictMode>
);
