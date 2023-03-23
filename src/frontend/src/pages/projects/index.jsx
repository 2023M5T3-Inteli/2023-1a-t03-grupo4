import './projects.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Btn from '../../components/Btn';
import { TextField, FormControl, InputAdornment, InputLabel,OutlinedInput,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function Projects() {
  return (<div>
    <NavBar/>
    <div className="mainScreen">
        <div>
            <div className="flex flex-row justify-center items-center" style={{justifyContent:"space-between"}}>
                <h1 className="font-light text-6xl" >PROJECTS</h1>
                <Btn text={"Create Project"}/>
            </div>

            <br /><br />

            <div className="flex flex-row" style={{justifyContent:"space-between"}}>
                <div style={{width:"65%"}}>
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
                </div>
                <div style={{width:"20%"}}>

                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
    </div>);
}

export default Projects;