import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.sass'
import { BrowserRouter } from "react-router-dom";

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PrismicProvider client={client}>
            <App />
        </PrismicProvider> 
    </BrowserRouter>
);

