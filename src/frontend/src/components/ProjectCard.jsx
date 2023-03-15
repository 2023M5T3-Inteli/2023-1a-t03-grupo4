import './components_css/ProjectCard.css'

import PrimaryBtn from '../components/PrimaryBtn'
import { Stack, Chip } from '@mui/material';

function ProjectCard({img, title, status, techList, color}) {

    return(<div className="flex flex-col overflow-clip items-center justify-center" style={{width:"20rem", height:"23rem", minWidth:"20rem", border:"2px solid var(--grey1)", borderRadius:"20px", background:{color}}}>

        <div className="flex flex-col items-center justify-center w-full" style={{minHeight:"15rem"}}>
            <img src={img} alt="Project_Img" className=""/>
        </div>

        <div className="relative w-full h-32 align-bottom px-5 py-2" style={{background:"rgb(0,0,0,.6)"}}>
            <div className="flex flex-row justify-between items-center pb-2">
                <div style={{color:"var(--base)"}}>
                    <h1 className="text-2xl font-semibold">title</h1>
                    <h2 className="text-lg">status</h2>
                </div>

                <PrimaryBtn text={"Detalhes"} width={"7rem"}/>
            </div>

            <div className="w-fit h-fit overflow-x-scroll" style={{maxWidth:"17.3rem"}}>
                <Stack direction={"row"} spacing={1} className="pb-2">
                    {
                        techList.map((e, index) => (<div key={index}>

                            <Chip label={e} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--grey4)", color:"var(--base)"}} />
                        </div>
                        ))
                    }
                </Stack>
            </div>
            
        </div>
    </div>)
}

export default ProjectCard;