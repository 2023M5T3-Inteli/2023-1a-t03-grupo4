import './home.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NavBar from '../../components/NavBar';
import HomeImage from '../../assets/images/WallpaperHome.png'


function Home() {
    return(<div>
        <NavBar/>
        <div style={{paddingLeft: 0, paddingRight: 0, top:"92px"}}>
            <section className="homeImage"></section>
            <section className="mainScreen pt-20" style={{marginTop: 0,background:"var(--base)", borderTop:"2px solid var(--grey1)"}}>
                <h1 className=" font-light text-6xl">PROJETOS EM DESTAQUE</h1>

                <br /><br /><br />

                <div className="shadow-sm w-full h-fit p-10" style={{background:"white", minHeight:"20rem" , maxHeight:"100rem", borderRadius:"20px", border:"1px solid var(--grey1)"}}>
                    <h1>ksjdksjdksjdk skjdjsdhj jskd</h1>
                </div>
            </section>
        </div>
            
    </div>)
}

export default Home;