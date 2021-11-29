import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </>
  );
}

export default App;
