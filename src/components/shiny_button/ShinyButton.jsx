import PropTypes from "prop-types";
import styles from "./ShinyButton.module.css";

export default function ShinyButton({ shiny, setShiny }) {
  return (
    <div>
      <button
        className={shiny ? styles.buttonContentShiny : styles.buttonContent}
        onClick={() => {
          setShiny(!shiny);
        }}
      />
    </div>
  );
}

ShinyButton.PropTypes = {};
