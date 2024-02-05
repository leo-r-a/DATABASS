import Slider from "@mui/material/Slider";
import "./Effects.scss";
import * as Tone from "tone";
import { useState, useEffect } from "react";

export default function Effects({ setChorus, setDelay }) {
  const [isChorus, setIsChorus] = useState(0);
  const [isDelay, setIsDelay] = useState(0);

  useEffect(() => {
    if (isChorus === 1) {
      setChorus([3, 1, 1]);
      return;
    }
    setChorus([0, 0, 0]);
  }, [setChorus, isChorus]);

  useEffect(() => {
    if (isDelay === 1) {
      setDelay(["4n", 0.5]);
      return;
    }
    setDelay([0, 0]);
  }, [setDelay, isDelay]);

  return (
    <div className="effects-container">
      <p className="effects-container__header">Add Effects!</p>
      <div className="effects-container__chorus">
        <p className="effects-container--text"> Chorus</p>{" "}
        <Slider
          className="effects-container__switch"
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
        <p className="effects-container--text"> Delay </p>{" "}
        <Slider
          className="effects-container__switch"
          step={1}
          defaultValue={0}
          value={isDelay}
          min={0}
          max={1}
          onChange={(e) => {
            setIsDelay(e.target.value);
          }}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}
