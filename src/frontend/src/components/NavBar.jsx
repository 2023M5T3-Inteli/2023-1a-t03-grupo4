import './components_css/NavBar.css'
import CNLogo from '../assets/images/CNLogo.png'
// import UserPlaceholder from '../assets/images/user_placeholder.jpeg'

import { useState } from "react";
import { Divider } from '@mui/material';

function NavBar() {

    const [isChecked, setIsChecked] = useState(false);

    var dropNavBar
    var userMenu
    var notificationMenu
    var userMenuDrop


    function handleCheckBurger() {
        setIsChecked(!isChecked)
        window.addEventListener('load', dropNavBar = document.getElementById('dropNavBar'))
        dropNavBar.classList.toggle('active')
    }

    const handleCheckNotification = () => {
        setIsChecked(!isChecked)
        window.addEventListener('load', notificationMenu = document.getElementById('dropNotification'))
        notificationMenu.classList.toggle('active')
    }

    const handleCheckUser = () => {
        setIsChecked(!isChecked)
        window.addEventListener('load', userMenu = document.getElementById('dropUser'))
        userMenu.classList.toggle('active')
    }

    const handleCheckUserDrop = () => {
        setIsChecked(!isChecked)
        window.addEventListener('load', userMenuDrop = document.getElementById('dropUserMenu'))
        userMenuDrop.classList.toggle('show')
    }


    document.onclick = function(e) {

        window.addEventListener('load',
            dropNavBar = document.getElementById('dropNavBar'),
            userMenu = document.getElementById('dropUser'),
            notificationMenu = document.getElementById('dropNotification'),
            userMenuDrop = document.getElementById('dropUserMenu')
        )
        
        if(e.target.id !== 'dropUser' && e.target.id !== 'userMenu') {
            userMenu.classList.remove('active')
        }

        if(e.target.id !== 'dropNotification' && e.target.id !== 'notificationMenu') {
            notificationMenu.classList.remove('active')
        }

        if(e.target.id !== 'dropUserMenu' && e.target.id !== 'userMenuDrop') {
            userMenuDrop.classList.remove('show')
        } 
    }

    return(<div className="relative flex flex-col items-center z-50">
        <div className="navBarArea fixed flex flex-row items-center justify-between px-16 py-2 w-full shadow-md z-50" style={{backgroundColor: "var(--base)", height:"11%"}}>
            <a href="/home"><img src={CNLogo} alt="LOGO" className="logo w-24" /></a>

            <div className="sm-screen_hide flex flex-row items-center justify-between text-3xl" style={{color:"var(--primary-color)"}}>
                <a href='./addproject' className="addProject flex flex-col items-center">
                    <i className="fa-regular fa-square-plus pr-8 pl-10 z-10"></i>
                    <h1 htmlFor="fa-square-plus" className="text-sm ml-4 -mt-5 -z-10">Novo Projeto</h1>
                    <div className="backBoxWhite absolute z-0"></div>
                </a>
                
                <input id='notificationMenu' type="checkbox" onClick={handleCheckNotification} className="notificationMenu absolute hidden"/>         
                <label htmlFor="notificationMenu" className="notifications checkbtn flex flex-col items-center">
                    <i className="fa-solid fa-bell cursor-pointer z-10"></i>
                    <h1 htmlFor="fa-bell" className="text-sm ml-0 -mt-5 -z-10">Notificações</h1>
                    <div className="backBoxWhite absolute z-0"></div> 
                </label> 

                <input id='userMenu' type="checkbox" onClick={handleCheckUser} className="userMenu absolute hidden"/>       
                <label htmlFor="userMenu" className="user checkbtn flex flex-col items-center">
                    <i className="fa-solid fa-circle-user cursor-pointer pl-5 z-10"></i>
                    <h1 htmlFor="fa-circle-user" className="text-sm ml-5 -mt-5 -z-10">Usuário</h1>
                    <div className="backBoxWhite absolute z-0"></div>
                </label>                        

                    

                {/* <img src={UserPlaceholder} alt={<i className="fa-regular fa-circle-user pl-5"></i>} className="w-10 ml-4" style={{border:"3px solid var(--primary-color)",borderRadius:'100%'}} /> */}
            </div>

            <div className="sm-screen_show pt-1">
                <input id='burgerMenu' type="checkbox" onClick={handleCheckBurger} className="burgerMenu absolute hidden"/>
                <label htmlFor="burgerMenu" className="checkbtn">
                    <i className="fa-solid fa-bars cursor-pointer text-4xl"></i>
                </label>
            </div>
        </div>

        <div id='dropNavBar' className="dropNavBar fixed sm-screen_show flex flex-col items-center shadow w-full h-fit -mt-60 pb-3" style={{background:"var(--accent)", color:"var(--primary-color)",borderRadius:"20px"}}>
            <a href='./' className="addProject flex flex-row items-center justify-between cursor-pointer w-full m-auto py-5 px-16">
                <h1 htmlFor="fa-square-plus" className="text-md">Novo Projeto</h1>
                <i className="fa-regular fa-square-plus text-3xl"></i>
            </a>
            
            <a href='./' className="notifications flex flex-row items-center justify-between cursor-pointer w-full m-auto py-5 px-16">
                <h1 htmlFor="fa-bell" className="text-md">Notificações</h1> 
                <i className="fa-regular fa-bell text-3xl"></i>
            </a>
            
            <input id='userMenuDrop' type="checkbox" onClick={handleCheckUserDrop} className="userMenuDrop fixed hidden"/> 
            <label htmlFor='userMenuDrop' className="user checkbtn flex flex-row items-center justify-between w-full m-auto py-5 px-16">                        
                    <h1 htmlFor="fa-circle-user" className="text-md">Usuário</h1>    
                    <i className="fa-regular fa-circle-user text-3xl"></i>
            </label>

            <ul id="dropUserMenu" className="flex-col items-center justify-center w-full px-16 -z-10 hidden">
                <Divider sx={{borderBottomWidth:"1px",width:"100%", borderColor:"var(--grey2)"}}/>
                <a href="./profile" className="flex flex-row items-center justify-between px-5 pb-3 w-full">
                    <h1>Perfil</h1>
                    <i className="fa-regular fa-circle-user pl-2 text-2xl"></i>
                </a>

                <a href="./" className="flex flex-row items-center justify-between px-5 pb-3 w-full">
                    <h1>Sair</h1>
                    <i className="fa-solid fa-arrow-right-from-bracket ol-2 text-2xl"></i>
                </a>
            </ul>           
        </div>

        <div id='dropNotification' className="dropNotification sm-screen_hide fixed overflow-clip w-72 h-fit -mt-80 pb-3" style={{background:"var(--base)", transition: ".2s", right:"2%", border:"1px solid var(--grey1)"}}>
            <ul className="flex flex-col overflow-y-auto overflow-x-hidden" style={{maxHeight:"20rem"}}>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>

                <a href="./home" className="flex flex-col justify-center">
                    <div className="flex flex-row items-center justify-between pb-5 pl-8 pr-4">
                        <h1>teste</h1>
                        <i className="fa-solid fa-circle px-2"></i>
                    </div>
                    <Divider sx={{borderBottomWidth:"1px", borderColor:"var(--grey2)"}}/>
                </a>
            </ul>
        </div>

        <div id='dropUser' className="dropUser sm-screen_hide fixed overflow-hidden w-fit -mt-80" style={{background:"var(--base)", transition: ".2s", right:"1%", border:"1px solid var(--grey1)"}}>
            <ul className="flex flex-col items-center justify-center w-36">
                <a href="./profile" className="flex flex-row items-center justify-between px-5 pb-3 w-full">
                    <h1>Perfil</h1>
                    <i className="fa-regular fa-circle-user pl-2 text-2xl"></i>
                </a>

                <Divider sx={{borderBottomWidth:"1px",width:"100%", borderColor:"var(--grey2)"}}/>

                <a href="./" className="flex flex-row items-center justify-between px-5 pb-3 w-full">
                    <h1>Sair</h1>
                    <i className="fa-solid fa-arrow-right-from-bracket ol-2 text-2xl"></i>
                </a>
            </ul>
        </div>
    </div>)
}

export default NavBar;