import React from "react";
import { Link } from "react-router-dom";
import styles from "./AreaCard.module.css";
import kanto from "../../assets/image/kanto.png";
import johto from "../../assets/image/johto.png";
import hoenn from "../../assets/image/hoenn.png";
import sinnoh from "../../assets/image/sinnoh.png";
import unova from "../../assets/image/isshu.png";
import kalos from "../../assets/image/kalos.png";
import alola from "../../assets/image/alola.png";
import galar from "../../assets/image/galar.png";

export default function AreaCard() {
  return (
    <div className={styles.areaContainer}>
      <Link key="kanto" to="/pokedex/index/1">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${kanto})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Kanto
        </button>
      </Link>
      <Link key="johto" to="/pokedex/index/2">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${johto})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Johto
        </button>
      </Link>
      <Link key="hoenn" to="/pokedex/index/3">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${hoenn})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Hoenn
        </button>
      </Link>
      <Link key="sinnoh" to="/pokedex/index/4">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${sinnoh})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Sinnoh
        </button>
      </Link>
      <Link key="unova" to="/pokedex/index/5">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${unova})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Unova
        </button>
      </Link>
      <Link key="kalos" to="/pokedex/index/6">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${kalos})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Kalos
        </button>
      </Link>
      <Link key="alola" to="/pokedex/index/7">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${alola})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Alola
        </button>
      </Link>
      <Link key="galar" to="/pokedex/index/8">
        <button
          className={styles.buttonContainer}
          style={{
            backgroundImage: `url(${galar})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          Galar
        </button>
      </Link>
    </div>
  );
}
