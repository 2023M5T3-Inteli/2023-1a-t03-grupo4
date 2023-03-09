import styles from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <>
      <div className={styles.modalBackdrop} onClick={props.onClose}></div>
      <div className={styles.modalContent}>
        <header className={styles.header}>
          <h1>Título</h1>
          <p>In Progress</p>
          <button onClick={props.onClose}>X</button>
        </header>
        <main className={styles.main}> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            egestas, nibh eget tristique cursus, libero nisi cursus lacus, eu
            tempus lacus tellus at felis. Praesent id malesuada massa. Integer
            vitae gravida nisl. Donec in neque id purus vehicula faucibus. Nam
            auctor justo eu tellus iaculis, ut dictum dolor feugiat. Curabitur
            vitae augue vestibulum magna congue laoreet. Maecenas ut ante sed
            libero dignissim rhoncus. Nunc tristique luctus lectus et gravida.
            Nullam et nisl lacus. Etiam varius nulla ac nibh mattis semper.
            Vestibulum pulvinar nunc sed pellentesque sollicitudin.
          </p>
          <div className={styles.techBox}>
            <p>Tecnologia I</p>
            <p>Tecnologia II</p>
            <p>Tecnologia III</p>
          </div>
          <div className={styles.projectInfos}>
            <p>
              <b>Área: </b>Automations
            </p>
            <p>
              <b>Vagas: </b>Back-end
            </p>
            <p>
              <b>Período: </b>14/02/23 à 25/03/23
            </p>
            <p>
              <b>Local de reunião: </b>Andar 24 - filial SP
            </p>
            <div className={styles.teamRow}>
              <p>
                <b>Time: </b>
              </p>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="profile-picture"
                />
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="profile-picture"
                />
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="profile-picture"
                />
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="profile-picture"
                />
              </div>
            </div>
          </div>
          <button>CANDIDATAR</button>
        </main>
      </div>
    </>
  );
};

export default Modal;
