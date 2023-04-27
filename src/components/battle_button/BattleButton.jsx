import battle from "../../assets/sound/battle.mp3";
import styles from "./BattleButton.module.css";

export default function BattleButton() {
  const battleSound = new Audio(battle);

  const audioPlayBattle = () => {
    battleSound.play();
  };

  return (
    <div>
      <button className={styles.buttonContent} onClick={audioPlayBattle}>
        !
      </button>
    </div>
  );
}
