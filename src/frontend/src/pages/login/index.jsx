
import './login.css'

import { useState } from 'react';

import TextInput from '../../components/TextInput'
import PrimaryBtn from '../../components/PrimaryBtn'
import CheckBox from '../../components/CheckBox'
import DellLogo from '../../assets/svg/DellLogo/export';
import CNLogoName from '../../assets/images/CNLogoName.png'

function Login() {

    //Constantes e armazenam o que foi escrito nos inputs de login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Define o que será feito quando o botão de entrar é pressionado (Redireciona diretamente para a Home para fins demonstrativos)
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", {email, password});
    window.location.href = '/home'
    }


    return(
        <div className="background w-screen h-screen flex fixed">

            {/* Circulos d0 fundo */}
            <section className="backgroundShapes md-screen_hide fixed">
                <div className="circle1 absolute -z-20 blur-sm" style={{boxShadow:" 30px -5px 50px 4px rgb(0,0,0,0.3)"}}></div>
                <div className="circle2 absolute -z-10 blur-sm" style={{boxShadow:" 30px -5px 50px 4px rgb(0,0,0,0.3)"}}></div>
            </section>

            {/* Logo CumuloNimbus */}
            <section className="md-screen_hide absolute flex items-center justify-center w-3/5 h-screen">
                {/* <img className="pb-16" src={CNLogo} alt="logo"  /> */}
                <DellLogo width={"25rem"}/>
                <div className="backgroundGradient -z-10"></div>
            </section>
            
            <div className="flex flex-row-reverse w-full h-full">               
                <div className="login_card md-screen-no-padding-x w-2/5 h-full p-10" style={{minWidth:"20rem"}}>
                    <div>

                        {/* Form onde se encontram os inputs para fazer o login */}
                        <form className="md-screen-no-padding-x p-10">

                            {/* Logo da Dell */}
                            <section className="flex justify-center py-12">
                                {/* <DellLogo width={"7rem"}/> */}
                                <img className="w-28" src={CNLogoName} alt="logo"  />
                            </section>
                        

                            <section className="flex flex-col">

                                {/* Campos de input para login */}
                                <div className="flex flex-col items-center" style={{padding:10}}>
                                    <TextInput htmlFor={"email"} type={"email"} label={"Usuário"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"}/>
                                    <i className="fa-regular fa-envelope" style={{position:'absolute',marginTop:"2.45rem",marginLeft:"19rem"}}></i>

                                    <br></br>

                                    <TextInput htmlFor={"password"} type={"password"} label={"Senha"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Senha"}/>
                                    <i className="fa-regular fa-eye cursor-pointer" style={{position:'absolute',marginTop:"8.45rem",marginLeft:"19rem"}}></i>

                                    <br></br>
                                </div>

                                {/* Opções de login */}
                                <section className="markField flex flex-row justify-around">
                                    <CheckBox count={1} label={"Continuar conectado"} checkFunction={(e) => {console.log("Continuar conectado")}}/>
                                    <a href='./#' className="text-black text-opacity-50" style={{margin:0,padding:1}}>Esqueceu a senha?</a>
                                </section>

                            </section>
                            
                            {/* Botão para entrar */}
                            <section className="flex flex-col justify-center items-center" style={{paddingLeft:65,paddingRight:65,paddingTop:'3rem'}}>
                                <PrimaryBtn type={"submit"} text={"Entrar"} onClick={handleSubmit}/>
                            </section>
                        
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;