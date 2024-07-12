import "./App.css";
import AllPlayer from "./components/AllPlayer";
import { playerData } from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="head">Basketball Player</h1>
      <AllPlayer playerData={playerData}></AllPlayer>
    </div>
  );
}

export default App;
