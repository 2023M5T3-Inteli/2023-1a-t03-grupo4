import styles from "./Ranking.module.scss";

const Ranking = (props) => {
  return (
    <div className={styles.rankingContainer}>
      <p className={styles.rankingTitle}>Ranking</p>
      <ul className={styles.rankingList}>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>1º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>2º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>3º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>4º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>5º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>6º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>7º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>8º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
        <li>
          <div className={styles.imgBx}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="profile-picture"
            />
          </div>
          <div className={styles.infos}>
            <h1>9º Gabriel Garcia</h1>
            <p>Sala de produção</p>
          </div>
        </li>
      </ul>
        <div className={styles.seeMoreContainer}>
            <button>
                Ver Mais
            </button>
        </div>
    </div>
  );
};

export default Ranking;
