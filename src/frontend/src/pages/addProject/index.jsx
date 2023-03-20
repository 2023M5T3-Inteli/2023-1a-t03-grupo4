import './addProject.css'

import * as React from 'react';
import Modal from "react-modal"
import { TextField, Box , Chip, Autocomplete, MenuItem, IconButton} from '@mui/material';
import Add from '@mui/icons-material/Add';
import NavBar from '../../components/NavBar'
import PrimaryBtn from '../../components/PrimaryBtn'
import timeZones from "../../scripts/time_zones"
import { useEffect } from 'react';


function AddProject() {

    function capitalizeFirstLetter(string){
        string = string.toLowerCase().split(' ').map((a) => a.charAt(0).toUpperCase() + a.substr(1)).join(' ');
        string = string.replace(/\s{2,}/g, ' ').trim()
        return string.charAt(0).toUpperCase() + string.slice(1) || "";
    }

    var techList = [
        { technology: 'Next.js' },
        { technology: 'AWS' },
        { technology: 'JavaScript' },
        { technology: 'Python' },
    ]

    var skillList = [
        { skill: 'Comunicação' },
        { skill: 'Gerência' },
        { skill: 'Colaboração' },
        { skill: 'Independência' },
    ]

    var roleList = [
        { role: 'Front-end' },
        { role: 'Back-end' },
        { role: 'Designer' },
        { role: 'Software Engineer' },
    ]

    var statusList = [
        { status: 'Aberto' },
        { status: 'Encerrado' },
        { status: 'Em progresso' },
        { status: 'Em análise' },
    ]
    

    const addTagTech = () => {
        var tagInput
        var count = 0
        window.addEventListener('load', tagInput = document.getElementById('addTagTech'))
        var tag = capitalizeFirstLetter(String(tagInput.value))
        if(tag !== '' && tag.charAt(0) !== ' ') {
            console.log(tag)
            techList.map((e) => {
                if(tag !== e.technology) {
                    count += 1
                } return 0
            })
            if(count === techList.length) {
                techList.push({technology: tag})
            }
        }
        
        
    }

    const addTagSkill = () => {
        var tagInput
        var count = 0
        window.addEventListener('load', tagInput = document.getElementById('addTagSkill'))
        var tag = capitalizeFirstLetter(String(tagInput.value))
        if(tag !== '' && tag.charAt(0) !== ' ') {
            console.log(tag)
            skillList.map((e) => {
                if(tag !== e.skill) {
                    count += 1
                } return 0
            })
            if(count === skillList.length) {
                skillList.push({skill: tag})
            }
        }
        
        
    }

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

    const [modalIsOpen, setIsOpen] = React.useState(false);
    useEffect(() => openModal(), console.log(modalIsOpen))
    

    function openModal()
    {
        setIsOpen(true)
    }
    
    function closeModal()
    {
        setIsOpen(false);
    }

    

    return(<div>    
        <NavBar/>
        <div className="mainScreen">
            <div>
                <h1 className="font-black text-7xl">Create a Project</h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor. Tempor nec feugiat nisl pretium fusce id. Molestie at elementum eu facilisis. Dolor purus non enim praesent elementum facilisis leo. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor. Tempor nec feugiat nisl pretium fusce id. Molestie at elementum eu facilisis. Dolor purus non enim praesent elementum facilisis leo. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.</p>
            </div>

            <br /><br /><br />

            <Box component="form" noValidate sx={{display: 'flex', flexDirection:'column',justifyContent:"center",gap: 4}}>
                
                <div className="flex flex-wrap justify-between gap-3">
                    <div className="md-screen-w-full flex flex-col w-7/12 gap-7">
                        
                        <TextField className="textInputBR20" fullWidth label="Título do Projeto:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/> 
                        <TextField className="textInputBR20" fullWidth label="Área:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/> 
                        <TextField className="textInputBR20" fullWidth rows={5} multiline label="Descrição:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>
                                             
                    </div>
                    <div className="md-screen-w-full sm-screen-w-full sm-screen-no-padding-x flex flex-col w-2/6" style={{minWidth:"14rem"}}>
                        <div className="flex flex-col justify-between">
                            <label className='text' htmlFor="schedule">Período:</label>
                            <div id='schedule' className="flex flex-row items-center justify-between">
                                <TextField type={"date"} className="textInputBR20"/> <h6>até</h6> <TextField type={"date"} className="textInputBR20"/>
                            </div>
                            <br />
                            <label className='text' htmlFor="subscribeLimit">Data e horário limite de inscrição:</label>
                            <div id='subscribeLimit' className="flex flex-row items-center justify-between gap-6">
                                <TextField type={"date"} className="textInputBR20" sx={{width:"47%"}}/>  <TextField type={"time"} className="textInputBR20" sx={{width:"47%"}}/>
                            </div>
                            <br />
                            <label className='text' htmlFor="timeZones">Fuso-horário:</label>
                            <div id='timeZones' className="flex flex-row justify-center">
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    className="textInputBR20 w-full"
                                    defaultValue="America/Sao Paulo"
                                    
                                    variant="outlined"
                                    sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}
                                    >
                                    {timeZones.map((option) => (
                                        <MenuItem key={option.name} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-end" style={{gap:"8.4%"}}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <Autocomplete multiple id="fixed-tags-Role"
                            onChange={(event, newValue) => {
                                setValue([
                                ...newValue.filter((option) => roleList.indexOf(option)),
                                ]);
                            }}
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
                                <TextField {...params} label="Vagas" placeholder="Select" className="techList textInputBR20" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}} />)}
                        />

                        
                            <div style={{paddingLeft:"2.5%", paddingRight:"2.5%"}}>
                                <IconButton color="primary" onClick={addTagRole} aria-label="add" sx={{background:"var(--base)", border:"1px solid var(--accent-color)"}}>
                                    <Add color="accent_color" />
                                </IconButton> 
                            </div>

                            <TextField id="addTagRole" className="textInputBR20" fullWidth label="Adicionar Vagas:" sx={{width:"57%",background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>    
                        
                    </div>

                    <div style={{width:"57%"}}>
                        <label className='text' htmlFor="statusList">Status:</label>
                        <div id='statusList' className="flex flex-row justify-center">
                            <TextField
                                id="outlined-select-currency"
                                select
                                className="textInputBR20 w-full"
                                defaultValue="Aberto"
                                
                                variant="outlined"
                                sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}
                                >
                                {statusList.map((option) => (
                                    <MenuItem key={option.status} value={option.status}>
                                        {option.status}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <Autocomplete multiple id="fixed-tags-tech"
                        onChange={(event, newValue) => {
                            setValue([
                            ...newValue.filter((option) => techList.indexOf(option)),
                            ]);
                        }}
                        options={techList}
                        getOptionLabel={(option) => option.technology}
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => (
                            <Chip
                                label={option.technology}
                                {...getTagProps({ index })}
                            />
                            ))
                        }
                        style={{ width:"100%" }}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField {...params} label="Tecnologias" placeholder="Select" className="techList textInputBR20" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}} />)}
                    />

                    
                        <div style={{paddingLeft:"2.5%", paddingRight:"2.5%"}}>
                            <IconButton color="primary" onClick={addTagTech} aria-label="add" sx={{background:"var(--base)", border:"1px solid var(--accent-color)"}}>
                                <Add color="accent_color" />
                            </IconButton> 
                        </div>

                        <TextField id="addTagTech" className="textInputBR20" fullWidth label="Adicionar Tecnologia:" sx={{width:"57%",background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>    
                    
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <Autocomplete multiple id="fixed-tags-skill"
                        onChange={(event, newValue) => {
                            setValue([
                            ...newValue.filter((option) => skillList.indexOf(option)),
                            ]);
                        }}
                        options={skillList}
                        getOptionLabel={(option) => option.skill}
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => (
                            <Chip
                                label={option.skill}
                                {...getTagProps({ index })}
                            />
                            ))
                        }
                        style={{ width: "100%" }}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField {...params} label="Competências" placeholder="Select" className="techList textInputBR20" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}} />)}
                    />

                    
                        <div style={{paddingLeft:"2.5%", paddingRight:"2.5%"}}>
                            <IconButton color="primary" onClick={addTagSkill} aria-label="add" sx={{background:"var(--base)", border:"1px solid var(--accent-color)"}}>
                                <Add color="accent_color" />
                            </IconButton> 
                        </div>

                        <TextField id="addTagSkill" className="textInputBR20" fullWidth label="Adicionar Competências:" sx={{width:"57%",background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>    
                    
                </div>
                
                <br />
                
                <div className="flex flex-row w-full justify-center">
                    <PrimaryBtn text={"Salvar"} className=""/>
                </div>


                

            </Box>
        </div>
        
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
            ariaHideApp={true}
        >
            <div className="shadow-md" style={{background:"var(--base)", borderRadius:"20px"}}>
                <h1>Termos de criação de projeto</h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor. Tempor nec feugiat nisl pretium fusce id. Molestie at elementum eu facilisis. Dolor purus non enim praesent elementum facilisis leo. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor. Tempor nec feugiat nisl pretium fusce id. Molestie at elementum eu facilisis. Dolor purus non enim praesent elementum facilisis leo. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.</p>
            </div>
        </Modal>

    </div>)
}

export default AddProject