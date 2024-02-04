import ADSREnvelope from "../ADSREnvelope/ADSREnvelope";
import BeatSelector from "../BeatSelector/BeatSelector";
import Effects from "../Effects/Effects";
import "./Controls.scss";

export default function Controls({
  attack,
  setAttack,
  decay,
  setDecay,
  sustain,
  setSustain,
  release,
  setRelease,
  setChorus
}) {
  return (
    <div className="controls-container">
      <ADSREnvelope
        attack={attack}
        setAttack={setAttack}
        decay={decay}
        setDecay={setDecay}
        sustain={sustain}
        setSustain={setSustain}
        release={release}
        setRelease={setRelease}
      />
      <BeatSelector />
      <Effects
      setChorus={setChorus}
      
      />
    </div>
  );
}
