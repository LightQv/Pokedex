import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import World from "./pages/World";
import PokemonIndex from "./pages/PokemonIndex";
import PokemonCard from "./pages/PokemonCard";
import NoResults from "./pages/NoResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/pokedex" element={<Home />} />
        <Route path="/pokedex/world" element={<World />} />
        <Route path="/pokedex/index/:area" element={<PokemonIndex />} />
        <Route path="/pokedex/pokemon/:id" element={<PokemonCard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pokedex/no-results" element={<NoResults />} />
        <Route path="/pokedex//not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
