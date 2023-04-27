import React from "react";
import styles from "./NoResultsMessage.module.css";

export default function NoResultsMessage() {
  return (
    <>
      <div className="not-found-page">
        <div className="dummy-header" />
        <div className={styles.noResultsContent}>
          <h3 className={styles.noResultsTitle}>204 : Sorry, no results.</h3>
          <p className={styles.noResultsText}>
            This generation doesn't exist yet !
          </p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif"
            alt="204 : No Results"
            className={styles.noResultsImg}
          />
        </div>
      </div>
    </>
  );
}
