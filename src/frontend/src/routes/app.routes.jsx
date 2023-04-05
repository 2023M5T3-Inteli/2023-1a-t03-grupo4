//Importação de páginas e bibliotecas
import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import '../styles/global.css';

//Páginas
import Login from '../pages/login/index';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Submit from '../pages/submit/index'
import AddProject from '../pages/addProject/index'
import Footer from '../components/Footer';
import OfferProject from '../pages/addProject/offerProject'
import Projects from '../pages/projects/index';
import Profile2 from '../pages/profile2';


//Cria rotas e direciona uma página para cada rota criada
export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home/>} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile2' element={<Profile2/>} />
                <Route path='/submit/:id' element={<Submit/>} />
                <Route path='/addproject' element={<AddProject/>} />
                <Route path='/footer' element={<Footer/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/test' element={<OfferProject/>} />
            </Routes>
        </Router>
    );
}



