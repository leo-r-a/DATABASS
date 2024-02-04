import Slider from "@mui/material/Slider";
import "./ADSREnvelope.scss";
import { useState, useEffect } from "react";

export default function ADSREnvelope(
  {
    attack,
    setAttack,
    decay,
    setDecay,
    sustain,
    setSustain,
    release,
    setRelease,
  }
) {

  


 

  return (
    <div className="adsrenv-container">
      <div className="adsrenv-container__attack">
        <p className="adsrenv-container--text"> Attack</p> <Slider 
        step={0.1}       
        defaultValue={0.1}
        value={attack}
        min={0.1}
        max={2.0}
        onChange={(e) => {
         setAttack(e.target.value);
        }}
        valueLabelDisplay="auto"
        
        
        />
      </div>
      <div className="adsrenv-container__decay">
        <p className="adsrenv-container--text"> Decay </p> 
        <Slider 
          step={0.1}       
          defaultValue={0.1}
          value={decay}
          min={0.1}
          max={2.0}
          onChange={(e) => {
           setDecay(e.target.value);
          }}
          valueLabelDisplay="auto"
        
        
        />
      </div>
      <div className="adsrenv-container__sustain">
        <p className="adsrenv-container--text">Sustain</p> <Slider
          step={0.1}       
          defaultValue={0.1}
          value={sustain}
          min={0.1}
          max={1.0}
          onChange={(e) => {
           setSustain(e.target.value);
          }}
          valueLabelDisplay="auto"
        
        
        />
      </div>
      <div className="adsrenv-container__release">
        <p className="adsrenv-container--text">Release</p> <Slider
            step={0.5}       
            defaultValue={2.5}
            value={release}
            min={0.5}
            max={5.0}
            onChange={(e) => {
             setRelease(e.target.value);
            }}
            valueLabelDisplay="auto"



        
        />
      </div>
    </div>
  );
}
