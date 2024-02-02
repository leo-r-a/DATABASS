import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Piano } from "react-piano";
import Keyboard from "./components/Keyboard/Keyboard"

function App() {
  return (
    <div>
      <Header />
      <Keyboard />
    </div>
  );
}

export default App;
