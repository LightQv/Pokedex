import styles from "./NotFoundMessage.module.css";

export default function NotFoundMessage() {
  return (
    <>
      <div className="not-found-page">
        <div className="dummy-header" />
        <div className={styles.notFoundContent}>
          <h3 className={styles.notFoundTitle}>404 : Not Found.</h3>
          <p className={styles.notFoundText}>
            Please use the navigation to go back on track !
          </p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
            alt="404 Not Found"
            className={styles.notFoundImg}
          />
        </div>
      </div>
    </>
  );
}
