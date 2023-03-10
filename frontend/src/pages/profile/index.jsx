import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import NavBar from "../../components/NavBar";
import Ranking from "../../components/Ranking/Ranking";
import styles from "./Profile.module.scss";

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
      <main className="mainScreen"><div className="flex flex-row">

      
        <div className="flex flex-col h-4/5 justify-start">

          <div>
            <div className={styles.profileContainer}>

              <div className={styles.profilePictureBx}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-973460__340.png"
                  alt="profile"
                />
              </div>

              <div className={styles.profileInfos}>
                <h1>CLARICE MAIA FERNADES</h1>

                <span>Analista de Sistemas</span>
                <p>Operações internacionais</p>

                <div className={styles.profileSkillsBx}>
                  <p>Excel</p>
                  <p>Python</p>
                  <p>PowerBI</p>
                </div>
              </div>
            </div>


            <div className="p-3" style={{height:"35rem",maxHeight:"37rem", background:"var(--base)", borderRadius:"20px"}}>
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
                        <p>Python</p>
                        <p>SQL</p>
                        <p>Excel</p>
                        <p>C#</p>
                        <p>AWS</p>
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
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        <div className={styles.secondColumn}>
          <Ranking />
        </div>
        </div>       
      </main>
      
      {showModal && <Modal onClose={showModalHandler}/>}
    </>);
}

export default Profile;
