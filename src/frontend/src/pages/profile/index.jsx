import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Footer from '../../components/Footer';
import NavBar from "../../components/NavBar";
import Ranking from "../../components/Ranking/Ranking";
import UserPlaceholder from '../../assets/images/user_placeholder.jpeg';
import styles from "./Profile.module.scss";
import { Chip } from "@mui/material";

function Profile() {
  const [showPortifolioFirstPage, setShowPortifolioFirstPage] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const portifolioPageHandler = () => {
    setShowPortifolioFirstPage((prevState) => {
      return !prevState;
    });
  };

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  return (<>
      <NavBar />
      <div className="mainScreen">

      
        <div className="flex flex-col h-4/5 justify-start" style={{width:"100%"}}>

          <div>
            <div className={styles.profileContainer}>

              <div className={styles.profilePictureBx}>
                <img
                  src={UserPlaceholder}
                  alt="profile"
                />
              </div>

              <div className={styles.profileInfos}>
                <h1>CLARICE MAIA FERNADES</h1>

                <span>Analista de Sistemas</span>
                <p>Operações internacionais</p>

                <br />

                <div className="flex flex-wrap w-full gap-2">
                  <Chip className="shadow-md" label={"Excel"} color={"primary"}/>
                  <Chip className="shadow-md" label={"Python"} color={"primary"}/>
                  <Chip className="shadow-md" label={"Power BI"} color={"primary"}/> 
                </div>
              </div>
            </div>

            <div className="sm-screen-w-full flex flex-wrap justify-between items-center gap-5">
              <div className="p-3 w-4/6 md-screen-w-full" style={{height:"35rem",maxHeight:"37rem",minWidth:"21rem", background:"var(--base)", borderRadius:"20px"}}>
                <div className={styles.buttonsContainer}>
                  <button
                    onClick={portifolioPageHandler}
                    className={showPortifolioFirstPage && styles.active}>

                    Seus Projetos

                  </button>
                  <button
                    onClick={portifolioPageHandler}
                    className={!showPortifolioFirstPage && styles.active}>

                    Suas Skills
                    
                  </button>
                </div>
                <div className={styles.portfolioContent}>
                  {showPortifolioFirstPage && (
                    <ul className={styles.projectList}>
                      <li className={styles.projectContainer}>

                        <div className={styles.projectPictureBx}>
                          <img
                            src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                            alt="project"
                          />
                        </div>

                        <div className={styles.projectContent}>
                          <h1>Título 1 2 3</h1>

                          <span>Analista de Sistemas</span>
                          <p>Operações internacionais</p>

                          <div className={styles.projectSkillsBx}>
                            <p>Python</p>
                            <p>Excel</p>
                            <p>JavaScript</p>
                          </div>
                        </div>

                        <div className={styles.detailBtnBx}>
                          <button onClick={showModalHandler}>Detalhes</button>
                        </div>
                      </li>
                      <li className={styles.projectContainer}>
                        <div className={styles.projectPictureBx}>
                          
                          <img
                            src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                            alt="project"
                          />

                        </div>
                        <div className={styles.projectContent}>
                          <h1>Título 1 2 3</h1>

                          <span>Analista de Sistemas</span>
                          <p>Operações internacionais</p>

                          <div className={styles.projectSkillsBx}>
                            <p>Python</p>
                            <p>Excel</p>
                            <p>JavaScript</p>
                          </div>
                        </div>

                        <div className={styles.detailBtnBx}>
                          <button onClick={showModalHandler}>Detalhes</button>
                        </div>
                      </li>
                      <li className={styles.projectContainer}>

                        <div className={styles.projectPictureBx}>
                          <img
                            src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                            alt="project"
                          />
                        </div>

                        <div className={styles.projectContent}>
                          <h1>Título 1 2 3</h1>

                          <span>Analista de Sistemas</span>
                          <p>Operações internacionais</p>

                          <div className={styles.projectSkillsBx}>
                            <p>Python</p>
                            <p>Excel</p>
                            <p>JavaScript</p>
                          </div>
                        </div>

                        <div className={styles.detailBtnBx}>
                          <button onClick={showModalHandler}>Detalhes</button>
                        </div>
                      </li>
                      <li className={styles.projectContainer}>

                        <div className={styles.projectPictureBx}>
                          <img
                            src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                            alt="project"
                          />
                        </div>

                        <div className={styles.projectContent}>
                          <h1>Título 1 2 3</h1>

                          <span>Analista de Sistemas</span>
                          <p>Operações internacionais</p>

                          <div className={styles.projectSkillsBx}>
                            <p>Python</p>
                            <p>Excel</p>
                            <p>JavaScript</p>
                          </div>
                        </div>

                        <div className={styles.detailBtnBx}>
                          <button onClick={showModalHandler}>Detalhes</button>
                        </div>
                      </li>
                      <li className={styles.projectContainer}>

                        <div className={styles.projectPictureBx}>
                          <img
                            src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg"
                            alt="project"
                          />
                        </div>

                        <div className={styles.projectContent}>
                          <h1>Título 1 2 3</h1>

                          <span>Analista de Sistemas</span>
                          <p>Operações internacionais</p>

                          <div className={styles.projectSkillsBx}>
                            <p>Python</p>
                            <p>Excel</p>
                            <p>JavaScript</p>
                          </div>
                        </div>

                        <div className={styles.detailBtnBx}>
                          <button onClick={showModalHandler}>Detalhes</button>
                        </div>
                      </li>
                    </ul>
                  )}
                  {!showPortifolioFirstPage && (
                    <div className="sm-screen-no-padding-x flex flex-row justify-between items-start space-x-10 pt-10 px-24">

                      <div className="flex flex-col justify-center items-center">
                        <h2>Hard Skills</h2>

                        <br />
                        
                        <div className="profile-tagBox flex flex-wrap gap-2 justify-between items-start" style={{maxWidth:"15rem"}}>
                          <Chip className="shadow-md" label={"Python"} color={"primary"} style={{minWidth:"7rem"}}/>
                          <Chip className="shadow-md" label={"SQL"} color={"primary"} style={{minWidth:"7rem"}}/> 
                          <Chip className="shadow-md" label={"Excel"} color={"primary"} style={{minWidth:"7rem"}}/> 
                          <Chip className="shadow-md" label={"C#"} color={"primary"} style={{minWidth:"7rem"}}/> 
                          <Chip className="shadow-md" label={"AWS"} color={"primary"} style={{minWidth:"7rem"}}/> 
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <h2>Soft Skills</h2>

                        <br />
                        
                        <div className="profile-tagBox flex flex-wrap gap-2 justify-between items-start" style={{maxWidth:"15rem"}}>
                          <Chip className="shadow-md" label={"Comunicação"} color={"primary"} style={{minWidth:"7rem"}}/>
                          <Chip className="shadow-md" label={"Liderança"} color={"primary"} style={{minWidth:"7rem"}}/> 
                          <Chip className="shadow-md" label={"Estratégia"} color={"primary"} style={{minWidth:"7rem"}}/> 
                          <Chip className="shadow-md" label={"Adaptabilidade"} color={"primary"} style={{minWidth:"7rem"}}/> 
                          <Chip className="shadow-md" label={"Disciplina"} color={"primary"} style={{minWidth:"7rem"}}/> 
                        </div>
                      </div>

                      {/* <div className={styles.skillsColumn}>
                        <h2>Soft Skills</h2>
                      
                        <div>
                          <p>Comunicação</p>
                          <p>Liderança</p>
                          <p>Estratégia</p>
                          <p>Adaptabilidade</p>
                          <p>Disciplina</p>
                        </div>
                      </div> */}
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
      
        <Footer/>
        
      {showModal && <Modal onClose={showModalHandler}/>}
    </>);
}

export default Profile;
