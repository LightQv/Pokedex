import { Link, useParams } from "react-router-dom";
import styles from "./PrevNextButtons.module.css";

export default function PrevNextButtons() {
  const { id } = useParams();
  return (
    <div>
      <Link to={`/pokemon/${parseInt(`${id}`) - 1}`}>
        <button
          type="button"
          className={styles.buttonContent}
          disabled={parseInt(id) === 1}
        >
          -
        </button>
      </Link>
      <Link to={`/pokemon/${parseInt(`${id}`) + 1}`}>
        <button
          type="button"
          className={styles.buttonContent}
          disabled={parseInt(id) === 898}
        >
          +
        </button>
      </Link>
    </div>
  );
}
