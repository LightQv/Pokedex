import { useEffect, useState, useRef } from "react";
import battle from "../../assets/sound/battle.mp3";
import styles from "./BattleButton.module.css";

export default function BattleButton() {
  const battleRef = useRef(new Audio(battle));
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayBattle = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? battleRef.current.play() : battleRef.current.pause();
  }, [isPlaying]);

  return (
    <div>
      <button
        type="button"
        className={styles.buttonContent}
        onClick={() => audioPlayBattle()}
      >
        !
      </button>
    </div>
  );
}
