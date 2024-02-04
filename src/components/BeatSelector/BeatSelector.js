import { useState } from "react";
import "./BeatSelector.scss";
import * as Tone from "tone";

export default function BeatSelector() {
  const [isPlaying, setIsPlaying] = useState(false);
  const beatFile = new Tone.Player("path to server with file").toDestination();
  const togglePlay = () => {
    if (!isPlaying) {
      beatFile.loop = true;
      beatFile.start();
    } else {
      beatFile.stop();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="beat-selector-container">
      <form className="beat-selector-form">
        <label className="beat-selector-form__label"> select a beat! </label>
        <select className="beat-selector-form__select">
          <option className="beat-selector-form__option">1</option>
          <option className="beat-selector-form__option">2</option>
          <option className="beat-selector-form__option">3</option>
          <option className="beat-selector-form__option">4</option>
        </select>
      </form>
      <div className="beat-selector-buttons">
        <button
          className="beat-selector-buttons__play-beat"
          onClick={togglePlay}
        >
          {isPlaying ? "Stop Loop" : "Play Loop"}
        </button>
      </div>
    </div>
  );
}
