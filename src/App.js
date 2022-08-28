import "./App.css";
import { EthProvider } from "./contexts/EthContext";
import Home from "./Home";

function App() {
  return (
    <EthProvider>
      <div className="App">
        <Home />
      </div>
    </EthProvider>
  );
}

export default App;
