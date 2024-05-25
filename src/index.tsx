import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import './sass/index.sass'
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/Providers/Theme/ThemeProvider';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>

        <ThemeProvider>
            <App />
        </ThemeProvider>
                  
    </BrowserRouter>
    
  </React.StrictMode>
);
