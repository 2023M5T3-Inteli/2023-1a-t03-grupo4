import './submit.css'

import * as React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import CheckBox from '../../components/CheckBox'
import Btn from '../../components/Btn'
import userPlaceholder from '../../assets/images/user_placeholder.jpeg'
import { TextField,Box, Autocomplete, Chip, IconButton} from '@mui/material'
import Add from '@mui/icons-material/Add';
import { api } from '../../api';
import { create } from '@mui/material/styles/createTransitions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { border } from '@mui/system';

function Submit() 
{ 
    const params = useParams();
    const [project, setProject] = React.useState({})
    const checkedFunc = () => {
        console.log('checked')
    }
    function capitalizeFirstLetter(string){
        string = string.toLowerCase().split(' ').map((a) => a.charAt(0).toUpperCase() + a.substr(1)).join(' ');
        string = string.replace(/\s{2,}/g, ' ').trim()
        return string.charAt(0).toUpperCase() + string.slice(1) || "";
    }
    var roleList = [
        { role: 'Front-end' },
        { role: 'Back-end' },
        { role: 'Designer' },
        { role: 'Software Engineer' },
        { role: 'Shadow' }
    ]
    const addTagRole = () => {
        var tagInput
        var count = 0
        window.addEventListener('load', tagInput = document.getElementById('addTagRole'))
        var tag = capitalizeFirstLetter(String(tagInput.value))
        if(tag !== '' && tag.charAt(0) !== ' ') {
            console.log(tag)
            roleList.map((e) => {
                if(tag !== e.role) {
                    count += 1
                } return 0
            })
            if(count === roleList.length) {
                roleList.push({role: tag})
            }
        }  
    }
    const [value, setValue] = React.useState([]);
    var [IsChecked, setIsChecked] = React.useState(false)

    var Shadow = false

    var standardBar, shadowBar, roleSelector

    const standardDev = () => {
        if(Shadow){Shadow=false}
        setIsChecked(!IsChecked)

        window.addEventListener('load', standardBar = document.getElementById('standardBar'))
        window.addEventListener('load', shadowBar = document.getElementById('shadowBar'))
        window.addEventListener('load', roleSelector = document.getElementById('roleSelector'))

        shadowBar.classList.toggle('hidden')
        standardBar.classList.toggle('hidden')
        roleSelector.classList.toggle('hidden')
    }

    const shadowDev = () => {
        if(!Shadow){Shadow=true}
        setIsChecked(!IsChecked)

        window.addEventListener('load', standardBar = document.getElementById('standardBar'))
        window.addEventListener('load', shadowBar = document.getElementById('shadowBar'))
        window.addEventListener('load', roleSelector = document.getElementById('roleSelector'))

        shadowBar.classList.toggle('hidden')
        standardBar.classList.toggle('hidden')
        roleSelector.classList.toggle('hidden')
    }


    // Create a submit
 async function createSubmit(){
        var role = document.getElementById('role').value;
        if (role == 'Front-end'){
            role = 1;
        }
        else if (role == 'Back-end'){
            role = 2;
        }
        else if (role == 'Back-end'){
            role = 2;
        }
        else if (role == 'Back-end'){
            role = 2;
        }
        

        var reason = document.getElementById('reason').value;
        
        await api.post("/submission", {
            reason: reason,
            stt: "em avaliação",
            idProject: 4,
            id_profile: 1,
            position: role,
            
        })
        console.log("teste");
    }



//Edit stt

function showEditStt(){
    document.getElementById('editstt').style.display ='block';
}
    async function editStt(){
        const id = project.idProject;
        const title = project.title;
        const description = project.description;
        var stt = document.getElementById('stt').value;
        const submissionDate = project.submission_date;
        const endDate = project.date_initial;
        const initialDate = project.date_end;
        const creator = project.creator;
        const area = project.area;
        const role = project.role;
        const auth = project.auth;

        document.getElementById('editstt').style.display ='none';
        await api.patch(`/project/${id}`, {
            idProject: id,
            title: title,
            description: description,
            stt: stt,
            submission_date: submissionDate,
            date_initial: initialDate,
            date_end: endDate,
            creator: creator,
            area: area,
            role: role,
            auth: auth
        });

        window.location.reload();

}

// async function editStt(id, stt) {
//     try {
//       const response = await axios.patch(`/project/${id}`, stt);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }


    useEffect(() => {
        const {id } = params
        async function getProject(){
            await api.get('/project/'+id).then(res => {
                setProject(res.data)
                console.log(res.data)
            }).catch(err => {
                window.location.href = '/home'
            })
        }
        
        if (!id) {
            window.location.href = '/home'
        }

        getProject()
    }, [])

 

    console.log(project.technologies)

    var projectPositions = []


    return(<div>
        <NavBar/>
        <div className="mainScreen px-40">
            <div className="div1 flex flex-col justify-between w-full">
                <div className='flex flex-row justify-between'>
                    <h1 className=" text-7xl">
                        {project.title || "Loading..."}
                    </h1>
                    <div className="inproglabel">{project.stt || "Loading..."} 
                    </div>
                    <Btn text="EDITAR STATUS" onClick = {showEditStt}></Btn>
                    <div className='editstt' id='editstt'>
                    <input id='stt' placeholder='Status' className='inputstt' style={{borderRadius:"20px"}}></input>
                    <Btn text="SALVAR STATUS" onClick= {editStt} ></Btn>
                    </div>
                </div>
                <br></br>
                <p className="" style={{width:"78%"}}>{project.description || "Loading..."}</p>
            </div>

            <br /><br />

            <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Area:</p><p>{project.area || "Loading..."}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg">Vagas:</p>
                        {project.positions && project.positions.map((e, index) => (<p className="mx-1" key={index}>{e.position}</p>)) || "Loading..."}
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Período:</p>
                        {project.date_initial && <p>{`De ${project.date_initial.replace(/:00.000Z/g, "").replace(/-/g,'/').replace(/T/g,' - ') } até ${project.date_end.replace(/:00.000Z/g, "").replace(/-/g,'/').replace(/T/g,' - ')}`}</p> || "Loading..."}
                        
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Time:</p> 
                        <div className='flex flex-row justify-between items-center gap-4'>
                            <img src={userPlaceholder} alt="" className='w-10' style={{borderRadius:"100px"}} />
                            <img src={userPlaceholder} alt="" className='w-10' style={{borderRadius:"100px"}} />
                            <img src={userPlaceholder} alt="" className='w-10' style={{borderRadius:"100px"}} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                    {project.technologies && project.technologies.map((e, index) => (<div key={index}> <Chip label={e.technology} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                </div>
            </div> 
            {/* fim 1o bloco */}
            <br></br>
            <div className="flex flex-col justify-center items-center w-full">
                {/* <div className="flex flex-row justify-center items-center h-fit gap-3" style={{width:"100%"}}>
                    <label className="cursor-pointer" htmlFor="standardDev">
                        <h1 className="text-2xl font-medium text-center break-words">Participar no desenvolvimento</h1>
                        <div id='standardBar' className="selectedBar"></div>
                    </label>
                    <input checked={!IsChecked} onChange={standardDev} className="hidden" id="standardDev" type = "radio" name="radio"></input>

                     <div className="divider"></div>  

                    <label className="cursor-pointer" htmlFor="shadowDev">
                        <h1 className="text-2xl font-medium text-center">Participar como shadow</h1>
                        <div id='shadowBar' className="selectedBar hidden"></div>
                    </label> 
                    <input checked={IsChecked} onChange={shadowDev} className="hidden" id="shadowDev" type = "radio" name="radio"></input>
                </div> */}
                <br></br>
                <div className="w-full">
                    <div>
                        <h1 className="font-semibold text-3xl">Preencha as informações abaixo para se inscrever:</h1>
                    </div>
                    <br></br>
                    <br></br>
                    <Box className="shadow p-10" sx={{background:"var(--base)", borderRadius:"15px", gap: 5 }}>
                        
                        <div className="flex flex-col gap-5">
                            <div className="hidden">
                                {project.positions && project.positions.map((e, index) => (projectPositions.push({label:e.position}))) || "Loading..."}
                            </div>

                            <div id='role' className="flex flex-row justify-center">
                                <Autocomplete
                                    disablePortal
                                    id="dropdown-roleList"
                                    options={projectPositions}
                                    sx={{ width: "100%" }}
                                    renderInput={(params) => <TextField label="Vaga" className="textInputBR20" {...params} style={{background:"white", borderRadius:"20px"}}/>}
                                />
                            </div>
                            {/* <TextField className="textInputBR20" fullWidth label="Nome completo:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/> 

                            <TextField className="textInputBR20" fullWidth label="Email institucional:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>  */}

                            <div id='roleSelector' className="flex flex-row justify-between items-center w-full">
                                {/* <Autocomplete multiple id="fixed-tags-Role"
                                    // onChange={(event, newValue) => {
                                    //     setValue([
                                    //     ...newValue.filter((option) => roleList.indexOf(option)),
                                    //     ]);
                                    // }}
                                    options={roleList}
                                    getOptionLabel={(option) => option.role}
                                    renderTags={(tagValue, getTagProps) =>
                                        tagValue.map((option, index) => (
                                        <Chip
                                            label={option.role}
                                            {...getTagProps({ index })}
                                        />
                                        ))
                                    }
                                    style={{ width: "100%" }}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField {...params} label="Vagas" placeholder="Select" id= "role" className="techList textInputBR20" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}} />)}
                                /> */}
                                
                                    {/* <div style={{paddingLeft:"2.5%", paddingRight:"2.5%"}}>
                                        <IconButton color="primary" onClick={addTagRole} aria-label="add" sx={{background:"var(--base)", border:"1px solid var(--accent-color)"}}>
                                            <Add color="accent_color" />
                                        </IconButton> 
                                    </div> */}

                                    {/* <TextField id="addTagRole" className="textInputBR20" fullWidth label="Adicionar Vagas:" sx={{width:"57%",background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>     */}
                                
                            </div>
                            <TextField id="reason" className="textInputBR20" fullWidth rows={5} multiline label="Por que você quer aplicar para a vaga?" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>
                            <div className="flex flex-row justify-between items-center">
                                <CheckBox checkFunction={checkedFunc} label="Meu gestor está ciente e concorda com minha participação no projeto."/>
                                <Btn onClick={createSubmit} text="SUBMETER"/>
                            </div>
                        </div>
                    </Box>
                </div>
                <br /><br />
                <Btn text="Apagar" variant={"secondaryBtn"}/>
            </div>

        </div>
            <Footer/>
    </div>)
}
















export default Submit
// Para abrir a página digitar "npm start" no terminal