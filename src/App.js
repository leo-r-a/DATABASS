import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Piano } from "react-piano";
import Keyboard from "./components/Keyboard/Keyboard"
import Controls from "./components/Controls/Controls";

function App() {
  return (
    <div>
      <Header />
      <Controls />
      <Keyboard />
    </div>
  );
}

export default App;
