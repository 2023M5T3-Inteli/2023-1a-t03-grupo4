import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      const response = await fetch("http://localhost:3000/profile/2")
      const responseData = await response.json()

      setUserData(responseData)

      setLoading(false)
    }

    fetchUserData()

  }, [])

  const portifolioPageHandler = () => {
    setShowPortifolioFirstPage((prevState) => {
      return !prevState;
    });
  };

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  const skill = [
    { idSkill: 1, skill: "indecebte" }, 
    { idSkill: 1, skill: "indecebte" }, 
    { idSkill: 2, skill: "indecente" }

  ]

  if (userData) {
    return (
      <>
        {loading && <p>Loading...</p>}
        <NavBar />
        <div className="mainScreen">

<<<<<<< HEAD
=======
              <div className={styles.profilePictureBx}>
                <img
                  src={UserPlaceholder}
                  alt="profile"
                />
              </div>
>>>>>>> f149d87ab42d43f2b8db649fbe70fae0115c0055

          <div className="flex flex-col h-4/5 justify-start" style={{ width: "100%" }}>

            <div>
              <div className={styles.profileContainer}>

<<<<<<< HEAD
                <div className={styles.profilePictureBx}>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-973460__340.png"
                    alt="profile"
                  />
                </div>

                <div className={styles.profileInfos}>
                  <h1>{userData.name}</h1>


                  <span>Analista de Sistemas</span>
                  <p>Operações internacionais</p>

                  <div className={styles.profileSkillsBx}>
                    <p>Excel</p>
                    <p>Python</p>
                    <p>PowerBI</p>
                  </div>
=======
                <br />

                <div className="flex flex-wrap w-full gap-2">
                  <Chip className="shadow-md" label={"Excel"} color={"primary"}/>
                  <Chip className="shadow-md" label={"Python"} color={"primary"}/>
                  <Chip className="shadow-md" label={"Power BI"} color={"primary"}/> 
>>>>>>> f149d87ab42d43f2b8db649fbe70fae0115c0055
                </div>
              </div>

              <div className="sm-screen-w-full flex flex-wrap justify-between items-center gap-5">
                <div className="p-3 w-4/6 md-screen-w-full" style={{ height: "35rem", maxHeight: "37rem", minWidth: "21rem", background: "var(--base)", borderRadius: "20px" }}>
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
                      <div className={styles.skillColumnsWraper}>

                        <div className={styles.skillsColumn}>
                          <h2>Hard Skills</h2>

                          <div>
                            {skill.map((element) => <p>{element.skill}</p>)}
                          </div>
                        </div>

                        <div className={styles.skillsColumn}>
                          <h2>Soft Skills</h2>

                          <div>
                            <p>Comunicação</p>
                            <p>Liderança</p>
                            <p>Estratégia</p>
                            <p>Adaptabilidade</p>
                            <p>Disciplina</p>
                          </div>
                        </div>
<<<<<<< HEAD
                      </div>
                    )}
                  </div>
=======

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
>>>>>>> f149d87ab42d43f2b8db649fbe70fae0115c0055
                </div>
                <div className={styles.secondColumn}>
                  <Ranking />
                </div>

              </div>

            </div>

          </div>

        </div>

        <Footer />

        {showModal && <Modal onClose={showModalHandler} />}
      </>);
  }


}

export default Profile;
