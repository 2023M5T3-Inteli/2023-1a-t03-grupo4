import { useEffect, useState } from "react";
import './home.css'
import $ from 'jquery'
import NavBar from '../../components/NavBar';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import PrimaryBtn from '../../components/Btn';
import { api } from "../../api";
import { renderMatches } from "react-router-dom";


function Home() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();

    window.addEventListener('load',() => {
        const fetchUserData = async () => {
          setLoading(true);
          var getProjects
          await api.get('/project').then((response) => {getProjects=response.data});
          
    
          setUserData(getProjects);
    
          setLoading(false);
        };

        fetchUserData();
    }, []); 


    var User
    window.addEventListener('load', User = userData)
    
    const showMore = (e) => {
        e.preventDefault();
        window.location.href = "/projects"
    }




    var techList = [
         'Next.js' ,
         'AWS' ,
         'JavaScript' ,
         'Python' ,
    ]

    const scrollDown = () => {
        $('html, body').animate({scrollTop:700}, 'slow');
        return false;
    }

    return(<div>
        <NavBar/>
        <div style={{paddingLeft: 0, paddingRight: 0, top:"92px"}}>
            <section className="homeImage"></section>
            <section className="mainScreen pt-20" style={{marginTop: 0,background:"var(--base)", borderTop:"2px solid var(--grey1)"}}>
                <div className="absolute flex justify-center items-center cursor-pointer h-16 w-24 -mt-36 left-0" style={{marginLeft:"50%", transform:"translateX(-45%)"}} onClick={scrollDown}>
                    <i className="fa-solid fa-angles-down text-6xl pb-5" style={{color:"var(--primary-color)"}}></i>
                </div>

                <h1 className=" font-light text-6xl">PROJETOS EM DESTAQUE</h1>

                <br /><br /><br />

                <div className="flex flex-col items-center shadow-sm w-full h-fit p-10 py-20" style={{background:"white", minHeight:"20rem" , maxHeight:"fit-content", borderRadius:"20px", border:"1px solid var(--grey1)"}}>
                    <div className="flex flex-wrap items-center justify-center gap-28 pb-20">
                        {User ? User.map((e, index) => {if(index < 9) {return(<ProjectCard id={e.idProject} key={index} title={e.title} techList={e.technologies} windowLocaion={"/submit"} color={e.color}/>)}}) : <h1>Carregando...</h1>}
                        
                        
                    </div>

                    <br /><br /><br />

                    <PrimaryBtn onClick={showMore} text={"Ver mais"}/>
                </div>
            </section>

            <section className="flex flex-col items-center w-full h-fit p-16" style={{borderTop:"2px solid var(--grey1)"}}>
                <div className="flex flex-col items-center justify-center text-center w-full pb-10" style={{maxWidth:"40rem"}}>
                    <h1 className="text-6xl font-semibold" style={{color:"var(--primary-color)"}}>SOBRE A SOLUÇÃO</h1>
                    <br />
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur. Faucibus mauris consequat purus ullamcorper ut sit. Duis consequat eu libero tellus tincidunt morbi interdum semper cras. Sit lorem nunc non convallis. </p>
                </div>
                <PrimaryBtn text={"Saiba mais"}/>
            </section>
        </div>
        <Footer/>    
    </div>)
}

export default Home;