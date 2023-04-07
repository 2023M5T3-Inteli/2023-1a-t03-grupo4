import './profile.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from "react-modal"
import capitalizeFirstLetter from '../../scripts/captalizeFirstLetter';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Btn from '../../components/Btn';

import UserPlaceholder from "../../assets/images/user_placeholder.jpeg";
import { api } from "../../api";
import { Chip, IconButton, Autocomplete, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function Profile2() {

    const [userData, setUserData] = useState();
    const [projectData, setProjectData] = useState();
    const [loading, setLoading] = useState(false);

    const [openModal, setOpenModal] = React.useState(false);
    const [modalId, setModalId] = React.useState(0);
    const [modalTitle, setModalTitle] = React.useState("");
    const [modalText, setModalText] = React.useState("");
    const [modalArea, setModalArea] = React.useState("");
    const [modalRoles, setModalRoles] = React.useState([]);
    const [modalDateInitial, setModalDateInitial] = React.useState("");
    const [modalDateEnd, setModalDateEnd] = React.useState("");
    const [modalStatus, setModalStatus] = React.useState("");
    const [modalTechs, setModalTechs] = React.useState([]);
    const [statusColor, setStatusColor] = React.useState("");
    const [submission, setSubmission] = React.useState({})
    const [statusDisabled, setStatusDisabled] = React.useState(true)
    const reloadFunction = React.useRef(null)
    const params = useParams();

    var profileid = sessionStorage.getItem("idUser");
    var statusBox, editStatus, saveStatus

    var statusList = [
        { label: 'Aberto' },
        { label: 'Encerrado' },
        { label: 'Em progresso' },
        { label: 'Em análise' },
    ]
    

    function getOwnProjects(proj) {
        ownProjects = []
        for(var i = 0; i < proj.length; i++){
            if(proj[i].creator.id_profile == profileid){
                ownProjects.push(proj[i])
            };
        };
    }

    useEffect(() => {
        const fetchUserData = async () => {
          setLoading(true);
          var profileid = sessionStorage.getItem("idUser");
    
          var getProfile
          await api.get(`/profile/${profileid}`).then((response)=>{getProfile=response.data})
        
        
    
          setUserData(getProfile);
    
          setLoading(false);

        };
    
        fetchUserData();
      }, []);

      useEffect(() => {
        const fetchProjectData = async () => {
          setLoading(true);
          var getProject;
          await api.get(`/project`).then((response)=>{getProject=response.data});
    
          setProjectData(getProject);
    
          setLoading(false);
        };

        reloadFunction.current = fetchProjectData;
    
        fetchProjectData();
    
      }, []);

      var ownProjects

      var [IsChecked, setIsChecked] = React.useState(false)
  
      var projectsBar, skillsBar, profileContentSlide
  
      const yourProjects = () => {
          setIsChecked(!IsChecked)
  
          window.addEventListener('load', projectsBar = document.getElementById('projectsBar'))
          window.addEventListener('load', skillsBar = document.getElementById('skillsBar'))
          window.addEventListener('load', profileContentSlide = document.getElementById('profileContentSlide'))
  
          skillsBar.classList.toggle('hidden')
          projectsBar.classList.toggle('hidden')
          profileContentSlide.classList.replace('yourSkills', 'yourProjects')


      }
  
      const yourSkills = () => {
          setIsChecked(!IsChecked)
  
          window.addEventListener('load', projectsBar = document.getElementById('projectsBar'))
          window.addEventListener('load', skillsBar = document.getElementById('skillsBar'))
          window.addEventListener('load', profileContentSlide = document.getElementById('profileContentSlide'))
  
          skillsBar.classList.toggle('hidden')
          projectsBar.classList.toggle('hidden')
          profileContentSlide.classList.replace('yourProjects', 'yourSkills')

    }

    async function deleteProject(id){
        console.log("apagar projeto")
        await api.delete('/project/'+id).then(res => {
            window.location.href = '/profile'
        }).catch(err => {
            setOpenModal(false)
        })
    }

    async function deleteSubmission(id){

        if(submission.length != 0){
            for(var i = 0; i < submission.length; i++){
                if(submission[i].idProject.idProject == id){
                    await api.delete('/submission/'+submission[i].idSubmission).then(res => {
                        
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }

        }
        deleteProject(id)

    }

    async function editStt(id) {
        var stt = document.getElementById("statusBox").value
        await api.patch(`/project/${id}`, {
            stt: stt,
        });
        console.log(stt)
    }

    if (userData && projectData) {
        return (<div>
            <NavBar/>
            <div className="mainScreen pt-10">

                <div className="flex flex-row items-center gap-10">
                    <img src={UserPlaceholder} className="w-40" alt="user_placeholder" style={{borderRadius:"100%"}} />

                    <div className="flex flex-col justify-start gap-5 w-2/5">
                        <h1 className="text-3xl">{capitalizeFirstLetter(userData.name)}</h1>

                        <div className="flex-wrap w-full">
                            {userData.skills && userData.skills.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                        </div>

                    </div>
                </div>

                <br /><br />

                <div className="profileContentBox shadow-md overflow-clip w-4/6 px-10 pb-28 pt-5 -ml-40" style={{background:"var(--base)", borderRadius:"0 20px 20px 0", height:"35rem"}}>

                    <div className="flex flex-row justify-center items-center h-fit gap-3" style={{width:"100%"}}>
                        <label className="cursor-pointer" htmlFor="yourProjects">
                            <h1 className="text-2xl font-medium text-center break-words">Your projects</h1>
                            <div id='projectsBar' className="selectedBar"></div>
                        </label>
                        <input checked={!IsChecked} onChange={yourProjects} className="hidden" id="yourProjects" type = "radio" name="radio"></input>

                        <div className="divider"></div>  

                        <label className="cursor-pointer" htmlFor="yourSkills">
                            <h1 className="text-2xl font-medium text-center">Your skills</h1>
                            <div id='skillsBar' className="selectedBar hidden"></div>
                        </label> 
                        <input checked={IsChecked} onChange={yourSkills} className="hidden" id="yourSkills" type = "radio" name="radio"></input>
                    </div>

                    <br />

                    <div id='profileContentSlide' className="flex flex-row justify-between h-full yourProjects gap-20" style={{width:"200%"}}>
                        <div className="flex flex-col items-center overflow-y-scroll w-1/2 h-full">

                        {getOwnProjects(projectData)}

                        {ownProjects && ownProjects.map((e, index) => {return(

                            <li key={index} className="projectCard flex flex-row justify-between items-center" style={{paddingRight:"2.5rem", paddingLeft:"1.25rem", width:"100%"}}>

                                <div className="flex flex-row items-center">
                                    <img
                                        src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                                        alt="project"
                                        className="w-40 p-5"
                                        style={{borderRadius:"100%"}}
                                    />

                                    <div className="flex flex-col justify-center items-start gap-5">
                                        <h1>{e.title}</h1>

                                        <div className="flex flex-wrap gap-2">
                                            {e.technologies && e.technologies.map((e, index) => (<div key={index}> <Chip label={e.technology} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--base)", color:"var(--primary-color)", border:"2px solid var(--accent-color)"}} /> </div>)) || "Loading..."}
                                        </div>
                                    </div>
                                </div>
                                

                                <Btn text={"Detalhes"} onClick={() => {
                                    setOpenModal(true)
                                    setStatusDisabled(true)
                                    setModalId(e.idProject)
                                    setModalText(e.description)
                                    setModalTitle(e.title)
                                    setModalArea(e.area)
                                    setModalRoles(e.positions)
                                    setModalDateInitial(e.date_initial.replace(/:00.000Z/g, "").replace(/-/g,'/').replace(/T/g,' - '))
                                    setModalDateEnd(e.date_end.replace(/:00.000Z/g, "").replace(/-/g,'/').replace(/T/g,' - '))
                                    setModalTechs(e.technologies)
                                    
                                    for(var i = 0; i < projectData.length; i++){
                                        if(projectData[i].idProject == e.idProject){
                                            setModalStatus(projectData[i].stt)
                                        }
                                    }
                                    
                                }} width={120}/>

                            </li>

                            )}) || "Loading..."}




                        </div>

                        <div className="w-1/2 h-full" style={{}}>

                        <div className="profileSkillsBox flex flex-row w-full justify-center items-start pt-12 gap-40">
                            <div className="flex flex-col justify-center items-center h-fit gap-5" style={{width:"15em"}}>
                                <h2 className="text-2xl">Hard Skills</h2>

                                <div className="flex flex-wrap ">
                                    {userData.technologies && userData.technologies.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center h-fit gap-5" style={{width:"15em"}}>
                                <h2 className="text-2xl">Soft Skills</h2>

                                <div className="flex flex-wrap">
                                    {userData.skills && userData.skills.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer/>

            <Modal

            isOpen={openModal}
            onRequestClose={() => {setOpenModal(false)}}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay fixed w-full h-full bg-gray-900 bg-opacity-50 z-40 overflow-y-auto justify-center items-center flex top-0"
            className="modal-content absolute"
            ariaHideApp={false}
            appElement={document.getElementById('app')}
        >
            <div className="shadow-md pb-10 pt-5 px-10" style={{ background: "var(--base)", borderRadius: "30px", maxWidth: "70rem", minWidth: "30rem" }}>

                <div className="flex flex-row justify-end w-full ml-5 gap-3">
                    <IconButton className="shadow-md" color="primary" onClick={() => {deleteSubmission(modalId)}} aria-label="add" sx={{background: "white", border: "1px solid var(--accent-color)" }}>
                        <DeleteForeverIcon sx={{color:"var(--red)"}}  />
                    </IconButton>

                    <IconButton className="shadow-md" color="primary" onClick={() => {
                        setOpenModal(false)
                        reloadFunction.current()
                    }} 
                    aria-label="add" sx={{background: "white", border: "1px solid var(--accent-color)" }}>
                        <CloseIcon color="accent_color"  />
                    </IconButton>
                </div>
                <br />

                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-3xl">{modalTitle || "Loading..."}</h1>

                    <div className="flex flex-row items-center gap-1">
                        <IconButton id="editStatus" onClick={() => {
                            setStatusDisabled(false)
                            statusBox = document.getElementById("statusBox")
                            editStatus = document.getElementById("editStatus")
                            saveStatus = document.getElementById("saveStatus")
                            statusBox.focus()
                            statusBox.placeholder = modalStatus
                            editStatus.style.display = "none"
                            saveStatus.style.display = ""
                        }}>

                            <EditIcon className=""/>

                        </IconButton>

                        <IconButton id="saveStatus" onClick={() => {
                            setStatusDisabled(true)
                            statusBox = document.getElementById("statusBox")
                            editStatus = document.getElementById("editStatus")
                            saveStatus = document.getElementById("saveStatus")
                            statusBox.style.color = statusColor
                            editStatus.style.display = ""
                            saveStatus.style.display = "none"
                            editStt(modalId)
                        }} style={{display:"none"}}>
                            <SaveIcon className="" />
                        </IconButton>
                        {/* <Chip className="shadow-inner" label={modalStatus || "Loading..."} sx={{fontSize:"18px", padding:"10px", background:"var(--base)", border:"1px solid var(--base_dark)", color:statusColor}}/> */}
                        {/* <input id='statusBox' type="text" className="text-center w-40 py-1 shadow-inner" disabled={statusDisabled} defaultValue={modalStatus || loading} style={{fontSize:"18px", background:"var(--accent)", border:"1px solid var(--base_dark)", borderRadius:"20px", color:statusColor}} /> */}
                        <div id='statusList' className="flex flex-row justify-center">
                            <Autocomplete
                                disablePortal
                                id="statusBox"
                                options={statusList}
                                sx={{ minWidth: "12rem", width:"fit-content"}}
                                disabled={statusDisabled}
                                defaultValue={modalStatus || "Loading..."}
                                renderInput={(params) => <TextField className="textInputBR20" {...params} style={{background:"white", borderRadius:"20px"}}/>}
                            />
                        </div>
                    </div>
                </div>
                <br />

                <div className="p-3">
                    <p>{modalText || "Loading..."}</p>
                </div>
                <br />

                <div className="flex flex-wrap w-full gap-3">
                    {modalTechs && modalTechs.map((e, index) => (<div key={index}> <Chip label={e.technology} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--base)", color:"var(--primary-color)", border:"2px solid var(--accent-color)"}} /> </div>)) || "Loading..."}
                </div>
                <br />

                <div className="flex flex-col justify-start p-3">
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Area:</p><p className="text-lg">{modalArea || "Loading..."}</p>
                    </div>
                    <br />

                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Roles:</p>
                        <div className="flex flex-wrap gap-3">
                            {modalRoles && modalRoles.map((e, index) => (<p className="text-lg">{e.position}</p>)) || "Loading..."}
                        </div>
                    </div>
                    <br />

                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Duration:</p><p className="text-lg">{modalDateInitial + " until " + modalDateEnd || "Loading..."}</p>
                    </div>
                </div>



                {/* <div className="flex flex-row items-center w-full" style={{ width: "100%", justifyContent: "space-between" }}>

                    <Btn text={"Prosseguir"} onClick={() => {setOpenModal(false)}} />

                </div> */}
            </div>
        </Modal>
        </div>);
    }
}

export default Profile2;