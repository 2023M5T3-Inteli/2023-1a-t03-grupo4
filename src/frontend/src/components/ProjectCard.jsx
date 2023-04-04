import './components_css/ProjectCard.css'

import PrimaryBtn from './Btn'
import { Link, useHistory} from 'react-router-dom';
import { Stack, Chip } from '@mui/material';
import DellLogo from '../assets/svg/DellLogo/export';

function ProjectCard({id, img, windowLocaion, title, status, techList, color, handleClick, disabled}) {


    return(<Link id={id} to={`/submit/${id}`} className="flex flex-col overflow-clip items-center justify-center" style={{width:"20rem", height:"23rem", minWidth:"20rem", border:"2px solid var(--grey1)", borderRadius:"20px", background:{color}}}>

        <div className="flex flex-col items-center justify-center w-full" style={{minHeight:"15rem"}}>
            {/* <img src={img} alt="Project_Img" className=""/> */}
            <DellLogo width={200}/>
        </div>

        <div className="relative w-full h-32 align-bottom px-5 py-2" style={{background:"rgb(0,0,0,.6)"}}>
            <div className="flex flex-row justify-between items-center pb-2">
                <div style={{color:"var(--base)"}}>
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <h2 className="text-lg">{status}</h2>
                </div>

                <PrimaryBtn id={id} href={windowLocaion} disabled={disabled} text={"Detalhes"} width={"7rem"} onClick={handleClick}/>
            </div>

            <div className="w-fit h-fit overflow-x-scroll" style={{maxWidth:"17.3rem"}}>
                <Stack direction={"row"} spacing={1} className="pb-2">
                    {techList ?
                        techList.map((e, index) => (<div key={index}>

                            <Chip label={e.technology} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--grey4)", color:"var(--base)"}} />
                        </div>
                        )) : "Loading..."
                    }
                </Stack>
            </div>
            
        </div>
    </Link>)
}

export default ProjectCard;