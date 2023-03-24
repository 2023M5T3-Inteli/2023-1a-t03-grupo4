import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Ranking from "../../components/Ranking/Ranking";
import UserPlaceholder from "../../assets/images/user_placeholder.jpeg";
import styles from "./Profile.module.scss";
import { Chip } from "@mui/material";

function Profile() {
  const [showPortifolioFirstPage, setShowPortifolioFirstPage] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [skillData, setSkillData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3000/profile/2");
      const responseData = await response.json();

      setUserData(responseData);

      setLoading(false);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchSkillData = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3000/skills/2");
      const responseData = await response.json();

      setSkillData(responseData);

      setLoading(false);
    };

    fetchSkillData();
  }, []);

  const portifolioPageHandler = () => {
    setShowPortifolioFirstPage((prevState) => {
      return !prevState;
    });
  };

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  if (userData) {
    return (
      <>
        {loading && <p>Loading...</p>}
        <NavBar />
        <div className="mainScreen">
          <div className={styles.profilePictureBx}>
            <img src={UserPlaceholder} alt="profile" />
          </div>

          <div
            className="flex flex-col h-4/5 justify-start"
            style={{ width: "100%" }}
          >
            <div>
              <div className={styles.profileContainer}>
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
                            {skillData.map((element) => (
                              <p>{element.skill}</p>
                            ))}
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
                <div className={styles.secondColumn}>
                  <Ranking />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {showModal && <Modal onClose={showModalHandler} />}
      </>
    );
  }
}

export default Profile;
