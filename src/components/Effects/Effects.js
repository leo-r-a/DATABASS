import Slider from "@mui/material/Slider";
import "./Effects.scss";
import * as Tone from "tone";
import { useState, useEffect } from "react";

export default function Effects({ setChorus }) {
  const [isChorus, setIsChorus] = useState(0);

  useEffect(() => {
    if (isChorus === 1) {
      setChorus([3, 1, 1]);
      return;
    }
    setChorus([0, 0, 0]);
  }, [setChorus, isChorus]);

  return (
    <div className="effects-container">
      <div className="effects-container__chorus">
        <p className="effects-container--text"> Chorus</p>{" "}
        <Slider
          step={1}
          defaultValue={0}
          value={isChorus}
          min={0}
          max={1}
          onChange={(e) => {
            setIsChorus(e.target.value);
          }}
          valueLabelDisplay="auto"
        />
      </div>
      <div className="effects-container__delay">
        <p className="effects-container--text"> Delay </p> <Slider />
      </div>
      <div className="effects-container__reverb">
        <p className="effects-container--text">Reverb</p> <Slider />
      </div>
      <div className="effects-container__distortion">
        <p className="effects-container--text">Distortion</p> <Slider />
      </div>
    </div>
  );
}
