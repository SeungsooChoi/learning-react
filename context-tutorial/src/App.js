import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    //  Provider는 사용했는데 value를 명시하지 않는다면 오류가 발생한다!!
    <ColorContext.Provider value={{ color: "red" }}>
      <ColorBox />
    </ColorContext.Provider>
  );
}

export default App;
