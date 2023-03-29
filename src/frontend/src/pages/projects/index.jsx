import './projects.css';
import * as React from 'react';
import { useEffect, useState } from "react";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Btn from '../../components/Btn';
import ProjectCard from '../../components/ProjectCard';
import { TextField, FormControl, InputAdornment, InputLabel,OutlinedInput,IconButton, Autocomplete, Stack, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';


function Projects() {

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();

    window.addEventListener('load',() => {
        const fetchUserData = async () => {
          setLoading(true);
          const response = await fetch("http://dev-loadbalancer-1136620238.us-east-1.elb.amazonaws.com/project");
          const responseData = await response.json();
    
          setUserData(responseData);
    
          setLoading(false);
        };

        fetchUserData();
    }, []); 

    var User
    window.addEventListener('load', User = userData)

    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectPerPage] = useState(10);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    // window.addEventListener('load', () => {
    //     const currentProjects = User.slice(indexOfFirstProject, indexOfLastProject)
    // })

    const handleDetails = (e) => {
        e.preventDefault();
        window.location.href = "/submit"
    }

    var techList = [
        { label: 'Next.js' },
        { label: 'AWS' },
        { label: 'JavaScript' },
        { label: 'Python' },
    ]

    var roleList = [
        { label: 'Front-end' },
        { label: 'Back-end' },
        { label: 'Designer' },
        { label: 'Software Engineer' },
    ]

    var statusList = [
        { label: 'Aberto' },
        { label: 'Encerrado' },
        { label: 'Em progresso' },
        { label: 'Em análise' },
    ]

    var durationList = [
        { label: '1 mês' },
        { label: '2 meses' },
        { label: '3 meses' },
        { label: '4 meses' },
    ]

    var [IsChecked, setIsChecked] = React.useState(false)

    var allProj, myProj, roleSelector
    var mine = false

    const allProject = () => {
        if(mine){mine=false}
        setIsChecked(!IsChecked)

        window.addEventListener('load', allProj = document.getElementById('allProj'))
        window.addEventListener('load', myProj = document.getElementById('myProj'))


        myProj.classList.toggle('hidden')
        allProj.classList.toggle('hidden')

    }

    const myProjects = () => {
        if(!mine){mine=true}
        setIsChecked(!IsChecked)

        window.addEventListener('load', allProj = document.getElementById('allProj'))
        window.addEventListener('load', myProj = document.getElementById('myProj'))


        myProj.classList.toggle('hidden')
        allProj.classList.toggle('hidden')

    }

    const createProject = (e) => {
        e.preventDefault();
        window.location.href = "/addproject"
    }


    return (<div>
        <NavBar/>
        <div className="mainScreen">
            <div>
                <div className="flex flex-wrap justify-center items-center" style={{justifyContent:"space-between"}}>
                    <h1 className="font-light text-6xl" >PROJECTS</h1>
                    <Btn text={"Create Project"} onClick={createProject}/>
                </div>

                <br /><br />

                <div className="flex flex-wrap" style={{justifyContent:"space-between"}}>
                    <div className="md-screen-w-full w-4/6 flex flex-col mb-10 gap-6">
                        <FormControl fullWidth className='textInputBR20' sx={{background:"white", borderRadius:"20px", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}} variant="outlined">
                            <InputLabel htmlFor="search-projectBar">Search</InputLabel>
                            <OutlinedInput
                                id="search-projectBar"
                                type={"search"}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    edge="end"
                                    >
                                        <SearchIcon/>
                                    
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Search"
                            />
                        </FormControl>
                        <div className="flex flex-col shadow w-full h-fit px-3 py-5 gap-3" style={{background:"var(--grey1)", borderRadius:"20px"}}>
                            <h1 className="text-3xl ml-2">Filtrar por</h1>
                            <div className="flex flex-wrap justify-between items-center gap-2">
                                {/* <TuneIcon sx={{fontSize:"40px", rotate:"-90deg"}}/> */}

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={techList}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField className="textInputBR20" {...params} label="Tecnologias" style={{background:"white", borderRadius:"20px"}}/>}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={roleList}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField className="textInputBR20" {...params} label="Área de atuação" style={{background:"white", borderRadius:"20px"}}/>}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={statusList}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField className="textInputBR20" {...params} label="Status" style={{background:"white", borderRadius:"20px"}}/>}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={durationList}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField className="textInputBR20" {...params} label="Duração" style={{background:"white", borderRadius:"20px"}}/>}
                                />

                            </div>
                        </div>
                    </div>
                    
                    <div className="md-screen-w-full flex items-center w-1/4">
                        <div className="flex flex-row justify-center items-center h-fit gap-3" style={{width:"100%"}}>
                            <label className="cursor-pointer" htmlFor="allProject">
                                <h1 className="text-2xl font-medium text-center shadow py-2 mb-3" style={{background:"var(--grey1)", borderRadius:"20px"}}>Qualquer Projeto</h1>
                                <div id='allProj' className="selectedBar"></div>
                            </label>
                            <input checked={!IsChecked} onChange={allProject} className="hidden" id="allProject" type = "radio" name="radio"></input>

                            <div className="divider"></div> 

                            <label className="cursor-pointer" htmlFor="myProjects">
                                <h1 className="text-2xl font-medium text-center shadow py-2 mb-3" style={{background:"var(--grey1)", borderRadius:"20px"}}>Meus Projetos</h1>
                                
                                <div id='myProj' className="selectedBar hidden"></div>
                            </label>
                            <input checked={IsChecked} onChange={myProjects} className="hidden" id="myProjects" type = "radio" name="radio"></input>
                        </div>
                    </div>
                </div>

                <br />

                <div className="flex flex-col items-center justify-between shadow-sm w-full h-fit p-10 pt-20" style={{background:"white", minHeight:"20rem" , maxHeight:"fit-content", borderRadius:"20px", border:"1px solid var(--grey1)"}}>
                    <div className="flex flex-wrap items-center justify-center gap-28">

                        {User ? User.map((e, index) => (<ProjectCard key={index} title={e.title} techList={techList} handleClick={handleDetails} color={e.color}/>)) : <h1>Carregando...</h1>}

                    </div>

                    <Stack spacing={2}>
                        <Pagination count={10} shape="rounded" />
                    </Stack>
                </div>
            </div>
        </div>
        <Footer/>
    
    </div>);
}

export default Projects;