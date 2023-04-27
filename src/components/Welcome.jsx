import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome-page">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome, Pokemon Trainer!</h1>
        <Link to="/pokedex/world">
          <button className="ok-button">Let's go !</button>
        </Link>
      </div>
    </div>
  );
}
