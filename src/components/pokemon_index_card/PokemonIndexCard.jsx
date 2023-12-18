import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PokemonIndexCard.module.css";

export default function PokemonIndexCard({ pokemonsList, shiny }) {
  return (
    <div className={styles.indexContainer}>
      {pokemonsList.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}/`}>
          <button
            key={pokemon.name}
            type="button"
            className={styles.buttonContainer}
          >
            <img
              src={
                shiny
                  ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
                  : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
              }
              alt={pokemon.name}
            />
            <p className={styles.pokemonName}>
              {`#${pokemon.id.toString().padStart(3, "0")} ${pokemon.name}`}
            </p>
          </button>
        </Link>
      ))}
    </div>
  );
}

PokemonIndexCard.propTypes = {
  pokemonList: PropTypes.array,
  shiny: PropTypes.bool,
};
