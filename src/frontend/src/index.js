//Importação de componentes e bibliotecas


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';


import { ThemeProvider } from "@mui/material";

import { appTheme } from "./themes/theme.js";

import './styles/global.css';

//Monta a página dentro da div com id 'root' no Index.html principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>
);
