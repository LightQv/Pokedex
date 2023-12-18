import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonDetailsCard from "../components/pokemon_details_card/PokemonDetailsCard";
import PrevNextButtons from "../components/pokemon_details_nav/PrevNextButtons";
import AudioButton from "../components/audio_button/AudioButton";
import ShinyButton from "../components/shiny_button/ShinyButton";
import LoadingScreen from "../components/loading_screen/LoadingScreen";

export default function PokemonCard() {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [shiny, setShiny] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((query) => {
        setPokemon(query.data);
      })
      .catch((err) => {
        if (err.response.status === 404) navigate("/not-found");
      })
      .finally(() => setIsLoaded(true));
  }, [id, navigate]);

  if (!pokemon) return <LoadingScreen />;
  return (
    <div className="pokemon-page">
      <div className="dummy-header" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">
            #{pokemon.id.toString().padStart(3, "0")} -{" "}
            <span>{pokemon.name}</span>
          </h3>
          <div className="card-features">
            <AudioButton pokemon={pokemon} />
            <PrevNextButtons />
            <ShinyButton shiny={shiny} setShiny={setShiny} />
          </div>
        </div>
        <PokemonDetailsCard pokemon={pokemon} shiny={shiny} />
      </div>
    </div>
  );
}
