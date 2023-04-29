export default function Help({ helpIsActive, setHelpIsActive }) {
  return (
    <div className="helping-page">
      <div className="helping-box">
        <div>
          <h2 className="helping-title">Need any help ?</h2>
          <section className="helping-navigation">
            <h4 className="helping-sub-title">Navigation :</h4>
            <p>Use the top bar to navigate throught the application.</p>
            <p>Pokeball : go back to home-screen.</p>
            <p>Map : go to the areas selection page.</p>
            <p>Pokemon : go to the Pokemon Index of the first generation.</p>
            <p>Random : go to the Pokemon Index of the first generation.</p>
          </section>
          <section className="helping-features">
            <h4 className="helping-sub-title">Features :</h4>
            <p>
              Use the button on the top right corner to show "shiny" versions.
            </p>
            <p>
              Directly navigate to the previous or next Pokemon of the index
              with the "-" or "+" button.
            </p>
            <p>
              Also, there is some surprise towards specifics Pokemons (look in
              the feature bar)...
            </p>
          </section>
        </div>
        <button
          className="close-button"
          onClick={() => {
            setHelpIsActive(!helpIsActive);
          }}
        >
          Thank you !
        </button>
      </div>
    </div>
  );
}
