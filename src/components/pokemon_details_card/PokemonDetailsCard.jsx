import React from "react";
import PropTypes from "prop-types";
import RadarChart from "./radar_chart/RadarChart";
import EvolutionCard from "./evolution_card/EvolutionCard";
import styles from "./PokemonDetailsCard.module.css";

export default function PokemonDetailsCard({ pokemon, shiny }) {
  function setColorType() {
    const getType = pokemon.apiTypes[1]
      ? pokemon.apiTypes[1].name
      : pokemon.apiTypes[0].name;
    if (getType === "Acier") return styles.isSteel;
    if (getType === "Ténèbres") return styles.isDark;
    if (getType === "Dragon") return styles.isDragon;
    if (getType === "Glace") return styles.isIce;
    if (getType === "Spectre") return styles.isGhost;
    if (getType === "Roche") return styles.isRock;
    if (getType === "Psy") return styles.isPsy;
    if (getType === "Combat") return styles.isFighting;
    if (getType === "Sol") return styles.isGround;
    if (getType === "Fée") return styles.isFairy;
    if (getType === "Électrik") return styles.isElectric;
    if (getType === "Poison") return styles.isPoison;
    if (getType === "Normal") return styles.isNormal;
    if (getType === "Vol") return styles.isFlying;
    if (getType === "Insecte") return styles.isBug;
    if (getType === "Eau") return styles.isWater;
    if (getType === "Feu") return styles.isFire;
    if (getType === "Plante") return styles.isGrass;
  }

  return (
    <div className={styles.detailsContainer}>
      <section className={styles.pokemonInfos}>
        <div className={setColorType()} style={{ background: "none" }}>
          <div className={styles.infoCard}>
            <RadarChart pokemon={pokemon} />
            <EvolutionCard pokemon={pokemon} />
          </div>
        </div>
      </section>
      <section className={styles.pokemonCard}>
        <div className={setColorType()}>
          <div className={styles.cardContent}>
            <img
              src={
                shiny
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`
                  : pokemon.image
              }
              alt={pokemon.name}
              className={styles.pokemonImg}
            />
            <div className={styles.pokemonStatsContainer}>
              <p className={styles.pokemonStats}>
                Type{" "}
                <span>
                  {pokemon.apiTypes[1]
                    ? `${pokemon.apiTypes[0].name}/${pokemon.apiTypes[1].name}`
                    : `${pokemon.apiTypes[0].name}`}
                </span>
              </p>
              <p className={styles.pokemonStats}>
                HP : <span>{pokemon.stats.HP}</span>
              </p>
              <p className={styles.pokemonStats}>
                Attaque : <span>{pokemon.stats.attack}</span>
              </p>
              <p className={styles.pokemonStats}>
                Défense : <span>{pokemon.stats.defense}</span>
              </p>
              <p className={styles.pokemonStats}>
                Attaque spéciale : <span>{pokemon.stats.special_attack}</span>
              </p>
              <p className={styles.pokemonStats}>
                Défense spéciale : <span>{pokemon.stats.special_defense}</span>
              </p>
              <p className={styles.pokemonStats}>
                Vitesse : <span>{pokemon.stats.speed}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PokemonDetailsCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  shiny: PropTypes.bool,
};
