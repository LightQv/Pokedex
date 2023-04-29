import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Help from "./Help";

export default function Header() {
  const [helpIsActive, setHelpIsActive] = useState(false);
  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 898));

  function handleRandom() {
    let randomPokemon = Math.floor(Math.random() * 898);
    setRandomId(randomPokemon);
  }

  return (
    <div className="header-container">
      <h3 className="header-title">
        Pokedex <span>by LightQv.</span>
      </h3>
      <Link to="/pokedex">
        <button className="back-button" />
      </Link>
      <Link to="/pokedex/world">
        <button className="world-button" />
      </Link>
      <Link to="/pokedex/index/1">
        <button className="index-button" />
      </Link>
      <Link to="/pokedex/pokemon/1">
        <button className="id-button" />
      </Link>
      <Link to={`/pokedex/pokemon/${randomId}`}>
        <button className="random-button" onClick={handleRandom} />
      </Link>
      <button
        className="help-button"
        onClick={() => {
          setHelpIsActive(!helpIsActive);
        }}
      />
      {helpIsActive && (
        <Help helpIsActive={helpIsActive} setHelpIsActive={setHelpIsActive} />
      )}
    </div>
  );
}
