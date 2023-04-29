import BattleButton from "../components/battle_button/BattleButton";
import AreaCard from "../components/area_card/AreaCard";

export default function World() {
  return (
    <div className="world-page">
      <div className="dummy-header" />
      <div className="areas-content">
        <div className="areas-header">
          <h3 className="areas-title">Pokemon World</h3>
          <BattleButton />
        </div>
        <AreaCard />
      </div>
    </div>
  );
}
