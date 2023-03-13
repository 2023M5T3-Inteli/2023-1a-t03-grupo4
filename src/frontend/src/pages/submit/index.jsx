import './submit.css'

import * as React from 'react'
import NavBar from '../../components/NavBar'
import CheckBox from '../../components/CheckBox'
import PrimaryBtn from '../../components/PrimaryBtn'
import userPlaceholder from '../../assets/images/user_placeholder.jpeg'
import { TextField,Box, Autocomplete, Chip, IconButton} from '@mui/material'
import Add from '@mui/icons-material/Add';

function Submit() 
{ 
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
    var [IsChecked, SetIsChecked] = React.useState(false)

    var Shadow = false

    var standardBar, shadowBar, roleSelector

    const standardDev = () => {
        if(Shadow){Shadow=false}
        IsChecked = SetIsChecked(!IsChecked)

        window.addEventListener('load', standardBar = document.getElementById('standardBar'))
        window.addEventListener('load', shadowBar = document.getElementById('shadowBar'))
        window.addEventListener('load', roleSelector = document.getElementById('roleSelector'))

        shadowBar.classList.toggle('hidden')
        standardBar.classList.toggle('hidden')
        roleSelector.classList.toggle('hidden')
    }

    const shadowDev = () => {
        if(!Shadow){Shadow=true}
        IsChecked = SetIsChecked(!IsChecked)

        window.addEventListener('load', standardBar = document.getElementById('standardBar'))
        window.addEventListener('load', shadowBar = document.getElementById('shadowBar'))
        window.addEventListener('load', roleSelector = document.getElementById('roleSelector'))

        shadowBar.classList.toggle('hidden')
        standardBar.classList.toggle('hidden')
        roleSelector.classList.toggle('hidden')
    }

    return(<div>
        <NavBar/>
        <div className="mainScreen px-40">
            <div className="div1 flex flex-col justify-between w-full">
                <div className='flex flex-row justify-between'>
                    <h1 className=" text-7xl">Título</h1>
                    <div className="inproglabel"> <h1>In progress</h1></div>
                </div>
                <br></br>
                <p className="" style={{width:"78%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor. Tempor nec feugiat nisl pretium fusce id. Molestie at elementum eu facilisis. Dolor purus non enim praesent elementum facilisis leo. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.</p>
            </div>

            <br /><br />

            <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Area:</p><p>Automations</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Vagas:</p> <p>Back-end</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="font-bold text-lg pr-1">Período:</p> <p>14/02/23 à 25/03/23</p>
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

                <div className="flex flex-wrap justify-end">
                    <div className="teclabel"><h1>Tecnologia I</h1></div> 
                    <div className="teclabel">Tecnologia I</div> 
                    <div className="teclabel">Tecnologia I</div> 
                </div>
            </div> 
            {/* fim 1o bloco */}
            <br></br>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-row justify-center items-center h-fit gap-3" style={{width:"100%"}}>
                    <label htmlFor="standardDev">
                        <h1 className="text-2xl font-medium text-center break-words">Participar no desenvolvimento</h1>
                        <div id='standardBar' className="selectedBar"></div>
                    </label>
                    <input checked={!IsChecked} onChange={standardDev} className="hidden" id="standardDev" type = "radio" name="radio"></input>

                    <div className="divider"></div> 

                    <label htmlFor="shadowDev">
                        <h1 className="text-2xl font-medium text-center">Participar como shadow</h1>
                        <div id='shadowBar' className="selectedBar hidden"></div>
                    </label>
                    <input checked={IsChecked} onChange={shadowDev} className="hidden" id="shadowDev" type = "radio" name="radio"></input>
                </div>
                <br></br>
                <div className="w-full">
                    <div>
                        <h1 className="font-semibold text-3xl">Preencha as informações abaixo para se inscrever:</h1>
                    </div>
                    <br></br>
                    <br></br>
                    <Box className="shadow p-10" sx={{background:"var(--base)", borderRadius:"15px", gap: 5 }}>
                        
                        <div className="flex flex-col gap-10">
                            <TextField className="textInputBR20" fullWidth label="Nome completo:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/> 

                            <TextField className="textInputBR20" fullWidth label="Email institucional:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/> 

                            <div id='roleSelector' className="flex flex-row justify-between items-center w-full">
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
                            <TextField className="textInputBR20" fullWidth rows={5} multiline label="Justificativa:" sx={{background:"white", borderRadius:"20px", boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.21)"}}/>
                            <div className="flex flex-row justify-between items-center">
                                <CheckBox label="Meu gestor está ciente e concorda com minha participação no projeto."/>
                                <PrimaryBtn text="SUBMETER"/>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>

        </div>
    </div>)
}
















export default Submit
// Para abrir a página digitar "npm start" no terminal