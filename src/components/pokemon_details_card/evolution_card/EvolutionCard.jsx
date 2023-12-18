import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EvolutionCard.module.css";

export default function EvolutionCard({ pokemon }) {
  if (
    pokemon.apiEvolutions[0] === undefined &&
    pokemon.apiPreEvolution === "none"
  )
    return null;
  return (
    <div className={styles.evolutionCardContainer}>
      <h3 className={styles.evolutionCardTitle}>
        <span>
          {pokemon.apiEvolutions[0] === undefined ||
          pokemon.apiPreEvolution === "none"
            ? "Évolution"
            : "Évolutions"}
        </span>
      </h3>
      {pokemon.apiPreEvolution !== "none" ? (
        <div className={styles.preEvolutionContainer}>
          <Link to={`/pokemon/${pokemon.apiPreEvolution.pokedexIdd}`}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.apiPreEvolution.pokedexIdd}.png`}
              alt={pokemon.apiPreEvolution.name}
              className={styles.evolutionImg}
            />
          </Link>
          <p className={styles.evolutionName}>
            #{pokemon.apiPreEvolution.pokedexIdd.toString().padStart(3, "0")} -{" "}
            <span>{pokemon.apiPreEvolution.name}</span>
          </p>
        </div>
      ) : null}
      {pokemon.apiEvolutions[0] !== undefined ? (
        <div className={styles.evolutionContainer}>
          <Link to={`/pokemon/${pokemon.apiEvolutions[0].pokedexId}`}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.apiEvolutions[0].pokedexId}.png`}
              alt={pokemon.apiEvolutions[0].name}
              className={styles.evolutionImg}
            />
          </Link>
          <p className={styles.evolutionName}>
            #{pokemon.apiEvolutions[0].pokedexId.toString().padStart(3, "0")} -{" "}
            <span>{pokemon.apiEvolutions[0].name}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
}

EvolutionCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
