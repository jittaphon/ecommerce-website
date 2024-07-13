import "./App.css";
import RouterALL from "./Component/Router";
import Navbar from "./Component/Navbar";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RouterALL />
      </Router>
    </div>
  );
}

export default App;
