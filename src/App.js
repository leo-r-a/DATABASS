import "./App.css";
import Header from "./components/Header/Header";
import { Piano } from "react-piano";
import Keyboard from "./components/Keyboard/Keyboard"
import Controls from "./components/Controls/Controls";
import { useState } from "react";

function App() {

  const [attack, setAttack] = useState(0.1)
  const [decay, setDecay] = useState(0.2)
  const [sustain, setSustain] = useState(0.5)
  const [release, setRelease] = useState(1.0)
  const [chorus, setChorus] = useState([0,0,0])
  const [delay, setDelay] = useState([0,0])






  return (
    <div>
      <Header />
      <Controls 
        attack ={attack}
        setAttack={setAttack}
        decay = {decay}
        setDecay={setDecay}
        sustain={sustain}
        setSustain={setSustain}
        release={release}
        setRelease={setRelease}
        setChorus={setChorus}
        setDelay={setDelay}
      />
      <Keyboard 
       attack ={attack}
       decay = {decay}
       sustain={sustain}
       release={release}
       chorus ={chorus}
       delay={delay}
      />
    </div>
  );
}

export default App;
