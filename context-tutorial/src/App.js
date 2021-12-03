import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <ColorBox />
    </ColorContext.Provider>
  );
}

export default App;
