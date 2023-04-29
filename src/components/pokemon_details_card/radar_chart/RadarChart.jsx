import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import PropTypes from "prop-types";
import styles from "./RadarChart.module.css";

ChartJS.register(
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler
);

export default function RadarChart({ pokemon }) {
  function setBackgroundColorType() {
    const getType = pokemon.apiTypes[1]
      ? pokemon.apiTypes[1].name
      : pokemon.apiTypes[0].name;
    if (getType === "Acier") return "rgba(148, 160, 177, 0.2)";
    if (getType === "Ténèbres") return "rgba(96, 96, 96, 0.2)";
    if (getType === "Dragon") return "rgba(224, 171, 91, 0.2)";
    if (getType === "Glace") return "rgba(169, 227, 232, 0.2)";
    if (getType === "Spectre") return "rgba(119, 107, 147, 0.2)";
    if (getType === "Roche") return "rgba(71, 67, 60, 0.2)";
    if (getType === "Psy") return "rgba(72, 70, 74, 0.2)";
    if (getType === "Combat") return "rgba(140, 118, 116, 0.2)";
    if (getType === "Sol") return "rgba(155, 133, 101, 0.2)";
    if (getType === "Fée") return "rgba(243, 185, 185, 0.2)";
    if (getType === "Électrik") return "rgba(221, 159, 59, 0.2)";
    if (getType === "Poison") return "rgba(136, 122, 166, 0.2)";
    if (getType === "Normal") return "rgba(207, 186, 146, 0.2)";
    if (getType === "Vol") return "rgba(207, 186, 146, 0.2)";
    if (getType === "Insecte") return "rgba(156, 202, 92, 0.2)";
    if (getType === "Eau") return "rgba(88, 136, 200, 0.2)";
    if (getType === "Feu") return "rgba(244, 147, 56, 0.2)";
    if (getType === "Plante") return "rgba(120, 183, 53, 0.2)";
  }

  function setColorType() {
    const getType = pokemon.apiTypes[1]
      ? pokemon.apiTypes[1].name
      : pokemon.apiTypes[0].name;
    if (getType === "Acier") return "rgba(148, 160, 177, 1)";
    if (getType === "Ténèbres") return "rgba(96, 96, 96, 1)";
    if (getType === "Dragon") return "rgba(224, 171, 91, 1)";
    if (getType === "Glace") return "rgba(169, 227, 232, 1)";
    if (getType === "Spectre") return "rgba(119, 107, 147, 1)";
    if (getType === "Roche") return "rgba(71, 67, 60, 1)";
    if (getType === "Psy") return "rgba(72, 70, 74, 1)";
    if (getType === "Combat") return "rgba(140, 118, 116, 1)";
    if (getType === "Sol") return "rgba(155, 133, 101, 1)";
    if (getType === "Fée") return "rgba(243, 185, 185, 1)";
    if (getType === "Électrik") return "rgba(221, 159, 59, 1)";
    if (getType === "Poison") return "rgba(136, 122, 166, 1)";
    if (getType === "Normal") return "rgba(207, 186, 146, 1)";
    if (getType === "Vol") return "rgba(207, 186, 146, 1)";
    if (getType === "Insecte") return "rgba(156, 202, 92, 1)";
    if (getType === "Eau") return "rgba(88, 136, 200, 1)";
    if (getType === "Feu") return "rgba(244, 147, 56, 1)";
    if (getType === "Plante") return "rgba(120, 183, 53, 1)";
  }

  const data = {
    labels: [
      `${pokemon.apiResistances[0].name}`,
      `${pokemon.apiResistances[1].name}`,
      `${pokemon.apiResistances[2].name}`,
      `${pokemon.apiResistances[3].name}`,
      `${pokemon.apiResistances[4].name}`,
      `${pokemon.apiResistances[5].name}`,
      `${pokemon.apiResistances[6].name}`,
      `${pokemon.apiResistances[7].name}`,
      `${pokemon.apiResistances[8].name}`,
      `${pokemon.apiResistances[9].name}`,
      `${pokemon.apiResistances[10].name}`,
      `${pokemon.apiResistances[11].name}`,
      `${pokemon.apiResistances[12].name}`,
      `${pokemon.apiResistances[13].name}`,
      `${pokemon.apiResistances[14].name}`,
      `${pokemon.apiResistances[15].name}`,
      `${pokemon.apiResistances[16].name}`,
      `${pokemon.apiResistances[17].name}`,
    ],
    datasets: [
      {
        label: "# Résistances",
        data: [
          `${pokemon.apiResistances[0].damage_multiplier}`,
          `${pokemon.apiResistances[1].damage_multiplier}`,
          `${pokemon.apiResistances[2].damage_multiplier}`,
          `${pokemon.apiResistances[3].damage_multiplier}`,
          `${pokemon.apiResistances[4].damage_multiplier}`,
          `${pokemon.apiResistances[5].damage_multiplier}`,
          `${pokemon.apiResistances[6].damage_multiplier}`,
          `${pokemon.apiResistances[7].damage_multiplier}`,
          `${pokemon.apiResistances[8].damage_multiplier}`,
          `${pokemon.apiResistances[9].damage_multiplier}`,
          `${pokemon.apiResistances[10].damage_multiplier}`,
          `${pokemon.apiResistances[11].damage_multiplier}`,
          `${pokemon.apiResistances[12].damage_multiplier}`,
          `${pokemon.apiResistances[13].damage_multiplier}`,
          `${pokemon.apiResistances[14].damage_multiplier}`,
          `${pokemon.apiResistances[15].damage_multiplier}`,
          `${pokemon.apiResistances[16].damage_multiplier}`,
          `${pokemon.apiResistances[17].damage_multiplier}`,
        ],
        backgroundColor: setBackgroundColorType(),
        borderColor: setColorType(),
        borderWidth: 1,
        pointRadius: 2.5,
      },
    ],
  };

  return (
    <div className={styles.radarStats}>
      <Radar data={data} />
    </div>
  );
}

RadarChart.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
