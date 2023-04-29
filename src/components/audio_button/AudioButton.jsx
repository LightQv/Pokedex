import PropTypes from "prop-types";
import pikachu from "../../assets/sound/pikachu.mp3";
import mewtwo from "../../assets/sound/mewtwo.mp3";
import mew from "../../assets/sound/mew.mp3";
import styles from "./AudioButton.module.css";

export default function AudioButtons({ pokemon }) {
  const pikaSound = new Audio(pikachu);
  const mewtwoSound = new Audio(mewtwo);
  const mewSound = new Audio(mew);

  const audioPlayPika = () => {
    pikaSound.play();
  };

  const audioPlayMewtwo = () => {
    mewtwoSound.play();
  };

  const audioPlayMew = () => {
    mewSound.play();
  };

  return (
    <div>
      {pokemon.name === "Pikachu" ? (
        <button
          type="button"
          className={styles.buttonContent}
          onClick={audioPlayPika}
        >
          !
        </button>
      ) : null}
      {pokemon.name === "Mewtwo" ? (
        <button
          type="button"
          className={styles.buttonContent}
          onClick={audioPlayMewtwo}
        >
          !
        </button>
      ) : null}
      {pokemon.name === "Mew" ? (
        <button
          type="button"
          className={styles.buttonContent}
          onClick={audioPlayMew}
        >
          !
        </button>
      ) : null}
    </div>
  );
}

AudioButtons.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
