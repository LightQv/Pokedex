import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <>
      <div className="loading-page">
        <div className="dummy-header" />
        <div className={styles.loadingContent}>
          <h3 className={styles.loadingTitle}>Loading...</h3>
          <p className={styles.loadingText}>Please wait !</p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif"
            alt="Please wait"
            className={styles.waitImg}
          />
        </div>
      </div>
    </>
  );
}
