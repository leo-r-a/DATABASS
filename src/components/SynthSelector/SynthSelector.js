import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState,useEffect } from "react";

export default function SynthSelector({ setWaveForm}) {

const [waveNumber, setWaveNumber] = useState(1)

useEffect(() => {
    if (waveNumber === 1) {
        setWaveForm("triangle");
      }
      if (waveNumber === 2) {
        setWaveForm("square");
      }
      if (waveNumber === 3) {
        setWaveForm("sawtooth");
      }
}, [waveNumber, setWaveForm])
    const marks = [
        {
          value: 1,
          label: "triangle"
        },
        {
          value: 2,
          label: "square"
        },
        {
          value: 3,
          label: "sawtooth"
        },
      ];
 
  return (
    <Box sx={{ height: 250 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        defaultValue={1}
        value={waveNumber}
        marks={marks}
        min={1}
        max={3}
        onChange={(e) => {
          setWaveNumber(e.target.value);
        }}
        aria-label="Volume"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
