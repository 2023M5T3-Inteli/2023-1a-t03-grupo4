//Importação de componentes e bibliotecas
import React from 'react';
import { Routes } from './routes';


import { ThemeProvider } from "@mui/material";

import { appTheme } from "./themes/theme.js";


//Monta as páginas de acordo com o que é indicado na rota em routes/index.jsx
function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
  