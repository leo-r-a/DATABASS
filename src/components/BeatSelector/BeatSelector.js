import { useEffect, useState, useRef } from "react";
import "./BeatSelector.scss";
import * as Tone from "tone";

const beatUrls = [
  "http://localhost:8080/static/90s-beat.wav",
  "http://localhost:8080/static/indie.wav",
  "http://localhost:8080/static/house.wav",
  "http://localhost:8080/static/glitch.wav",
];

export default function BeatSelector() {
  const beatsFileRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [beat, setBeat] = useState(1);

  if (!beatsFileRef.current) {
    beatsFileRef.current = new Tone.Player(beatUrls[beat]).toDestination();
  }

  useEffect(() => {
    beatsFileRef.current.onLoad = () => {
      console.log("Audio file loaded successfully");
      setIsLoading(false);
    };

    beatsFileRef.current.onLoad("error", (error) => {
      console.error("Error loading audio file:", error);
      setIsLoading(false);
    });

    // ...
  }, [beatsFileRef.current]);

  const togglePlay = () => {
    Tone.loaded().then(() => {
      if (!isPlaying) {
        beatsFileRef.current.stop();
        beatsFileRef.current.loop = true;
        beatsFileRef.current.start();
        setIsPlaying(true);
      } else {
        beatsFileRef.current.loop = false;
        beatsFileRef.current.stop();
        setIsPlaying(false);
      }
    });
  };
  return (
    <div className="beat-selector-container">
      <form className="beat-selector-form">
        <label className="beat-selector-form__label">Select a beat!</label>
        <select
          className="beat-selector-form__select"
          value={beat}
          onChange={(e) => {
            beatsFileRef.current = 0;
            setBeat(e.target.value);
          }}
        >
          <option className="beat-selector-form__option" value={0}>
            hip hop
          </option>
          <option className="beat-selector-form__option" value={1}>
            chill
          </option>
          <option className="beat-selector-form__option" value={2}>
            house
          </option>
          <option className="beat-selector-form__option" value={3}>
            glitch
          </option>
        </select>
      </form>
      <div className="beat-selector-buttons">
        <button
          className="beat-selector-buttons__play-beat"
          onClick={togglePlay}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : isPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}
