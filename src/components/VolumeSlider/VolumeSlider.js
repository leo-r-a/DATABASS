import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function VolumeSlider({ volume, setVolume }) {
    return (
        <Box sx={{ height: 250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          orientation="vertical"
          defaultValue={-20}
          max={-10}
          min={-30}
          value={volume}
          onChange={(e) => {
            setVolume(e.target.value);
          }}
          aria-label="Volume"
          valueLabelDisplay="auto"
        />
      </Box>

    )
  
  

}

export default VolumeSlider;
