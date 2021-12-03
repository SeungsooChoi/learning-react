import "./App.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <ColorBox />
    </ColorProvider>
  );
}

export default App;
