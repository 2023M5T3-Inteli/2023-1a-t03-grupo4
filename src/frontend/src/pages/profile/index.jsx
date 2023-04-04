import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Ranking from "../../components/Ranking/Ranking";
import UserPlaceholder from "../../assets/images/user_placeholder.jpeg";
import styles from "./Profile.module.scss";
import { Chip } from "@mui/material";
import { And } from "typeorm";
import { api } from "../../api";
import Btn from "../../components/Btn";

function Profile() {
  const [showPortifolioFirstPage, setShowPortifolioFirstPage] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [projectData, setProjectData] = useState();
  const [skillData, setSkillData] = useState();

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

    fetchProjectData();

  }, []);

  function getOwnProjects(proj) {
    for(var i = 0; i < proj.length; i++){
      if(proj[i].creator.id_profile == profileid){
        ownProjects.push(proj[i])
      };
    };
    console.log(ownProjects)
  }

  var profileid = sessionStorage.getItem("idUser");
  var ownProjects = [];
  var projects
  window.addEventListener("load", projects = projectData)
  projects ? 
    getOwnProjects(projects)
   : console.log("no projectData");

  const portifolioPageHandler = () => {
    setShowPortifolioFirstPage((prevState) => {
      return !prevState;
    });
  };

  function showModalHandler(text) {
    console.log(text)
  }

  if (userData) {
    return (
      <>
        {loading && <p>Loading...</p>}
        <NavBar />
        <div className="mainScreen">
          

          <div
            className="flex flex-col h-4/5 justify-start"
            style={{ width: "100%" }}
          >
            <div>
              <div className={styles.profileContainer}>
                <div className={styles.profilePictureBx}>
                  <img src={UserPlaceholder} alt="profile" />
                </div>

                <div className={styles.profileInfos}>
                  <h1>{userData.name}</h1>


                  <div className={styles.profileSkillsBx}>
                    {userData.skills && userData.skills.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                  </div>
                </div>
              </div>

              <div className="sm-screen-w-full flex flex-wrap justify-between items-center gap-5">
                <div
                  className="p-3 w-4/6 md-screen-w-full"
                  style={{
                    height: "35rem",
                    maxHeight: "37rem",
                    minWidth: "21rem",
                    background: "var(--base)",
                    borderRadius: "20px",
                  }}
                >
                  <div className={styles.buttonsContainer}>
                    <button
                      onClick={portifolioPageHandler}
                      className={showPortifolioFirstPage && styles.active}
                    >
                      Seus Projetos
                    </button>
                    <button
                      onClick={portifolioPageHandler}
                      className={!showPortifolioFirstPage && styles.active}
                    >
                      Suas Skills
                    </button>
                  </div>
                  <div className={styles.portfolioContent}>
                    {showPortifolioFirstPage && (
                      <ul className={styles.projectList}>

                        {ownProjects && ownProjects.map((e, index) => {return(

                          <li className={styles.projectContainer}>
                            <div className={styles.projectPictureBx}>
                            <img
                              src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                              alt="project"
                            />
                            </div>

                            <div className={styles.projectContent}>
                            <h1>{e.title}</h1>

                            <div className={styles.projectSkillsBx}>
                              {e.skills && e.skills.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--base)", color:"var(--primary-color)", border:"2px solid var(--accent-color)"}} /> </div>)) || "Loading..."}
                            </div>
                            </div>

                            <div className={styles.detailBtnBx}>
                            <Btn text={"Detalhes"} onChange={showModalHandler("123")} width={120}/>
                            </div>
                          </li>

                        )}) || "Loading..."}

                        

                        
                      </ul>
                    )}
                    {!showPortifolioFirstPage && (
                      <div className="flex flex-row w-full justify-center items-start pt-12 gap-40">
                        <div className="flex flex-col justify-center items-center h-fit" style={{width:"15em"}}>
                          <h2>Hard Skills</h2>
                          <br />

                          <div className="flex flex-wrap ">
                            {userData.technologies && userData.technologies.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                          </div>
                        </div>

                        <div className="flex flex-col justify-center items-center h-fit" style={{width:"15em"}}>
                          <h2>Soft Skills</h2>
                          <br />

                          <div className="flex flex-wrap">
                            {userData.skills && userData.skills.map((e, index) => (<div key={index}> <Chip label={e.skill} className="shadow-lg" sx={{minWidth:"5rem", background:"var(--accent-color)", color:"var(--base)"}} /> </div>)) || "Loading..."} 
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.secondColumn}>
                  <Ranking />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {showModal && <Modal projectDescription={"sapequinha esse mateus"} onClose={showModalHandler} />}
      </>
    );
  }
}

export default Profile;
