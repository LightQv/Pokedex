import PropTypes from "prop-types";
import styles from "./ShinyButton.module.css";

export default function ShinyButton({ shiny, setShiny }) {
  return (
    <div>
      <button
        type="button"
        className={shiny ? styles.buttonContentShiny : styles.buttonContent}
        onClick={() => {
          setShiny(!shiny);
        }}
      />
    </div>
  );
}

ShinyButton.propTypes = { shiny: PropTypes.bool, setShiny: PropTypes.func };
