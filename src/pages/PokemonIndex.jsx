import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ShinyButton from "../components/shiny_button/ShinyButton";
import PokemonIndexCard from "../components/pokemon_index_card/PokemonIndexCard";
import LoadingScreen from "../components/loading_screen/LoadingScreen";

export default function PokemonIndex() {
  const { area } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemonsList, setPokemonsList] = useState(null);
  const [shiny, setShiny] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${area}`)
      .then((query) => {
        if (query.data.length > 0) {
          setPokemonsList(query.data);
        } else navigate("/noresults");
      })
      .catch((err) => {
        if (err.response.status === 404) navigate("/notfound");
      })
      .finally(() => setIsLoaded(true));
  }, []);

  if (!pokemonsList) return <LoadingScreen />;
  return (
    <div className="pokemon-index-page">
      <div className="dummy-header" />
      <div className="index-content">
        <div className="index-header">
          <h3 className="index-title">{`Génération ${area}`}</h3>
          <ShinyButton shiny={shiny} setShiny={setShiny} />
        </div>
        <PokemonIndexCard pokemonsList={pokemonsList} shiny={shiny} />
      </div>
    </div>
  );
}
