import { useState } from "react";
import Welcome from "../components/Welcome";
import "../App.css";

export default function Home() {
  const [showPokedex, setShowPokedex] = useState(false);

  return (
    <div className="home-page">
      <div
        className="pokeball-container"
        onClick={() => {
          setShowPokedex(!showPokedex);
        }}
      >
        <div className="pokeball">
          <div className="pokeball-button" />
        </div>
        <div className="pokeball-shadow" />
      </div>
      {showPokedex && <Welcome />}
    </div>
  );
}
