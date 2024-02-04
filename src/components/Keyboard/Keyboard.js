import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import { useState } from "react";
import "react-piano/dist/styles.css";
import "./Keyboard.scss";
import * as Tone from "tone";
import VolumeSlider from "../VolumeSlider/VolumeSlider";
import SynthSelector from "../SynthSelector/SynthSelector";

function Keyboard({ attack, decay, sustain, release, chorus}) {
  const [octave, setOctave] = useState([2, 3]);
  const [volume, setVolume] = useState(-10);
  const [waveForm, setWaveForm] = useState("triangle");

  const firstNote = MidiNumbers.fromNote(`c${octave[0]}`);
  const lastNote = MidiNumbers.fromNote(`f${octave[1]}`);
  const KeyboardShorties = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const chorusEffect = new Tone.Chorus(chorus[0], chorus[1], chorus[2]).toDestination().start();
  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: waveForm,
      volume: volume
    },
    reverb: {
      decay: 1
    },
    envelope: {
      attack: attack,
      decay: decay,
      sustain: sustain,
      release: release,
    },
  }).connect(chorusEffect);
      


  const playNote = (midiNumber) => {
    const frequency = Tone.Frequency(midiNumber, "midi").toFrequency();
    synth.triggerAttack(frequency);
  };
  const stopNote = (midiNumber) => {
    const frequency = Tone.Frequency(midiNumber, "midi").toFrequency();
    synth.triggerRelease(frequency);
  };

  function handleOctaveUp() {
    synth.releaseAll();
    setOctave([octave[0] + 1, octave[1] + 1]);
  }
  function handleOctaveDown() {
    synth.releaseAll();
    setOctave([octave[0] - 1, octave[1] - 1]);
  }
  const lowestPoint = octave[0] == 2;
  const highestPoint = octave[0] == 4;

  const handleKeyDown = (e) => {
    if (highestPoint) {
      return;
    }
    if (e.key === "x") {
      setOctave([octave[0] + 1, octave[1] + 1]);
    }
    return;
  };

  return (
    <div className="keyboard-container">
      <button
        className="octave-button"
        onClick={handleOctaveDown}
        onKeyDown={(e) => {
          if (e.key === "z") {
            synth.releaseAll();
            setOctave([octave[0] - 1, octave[1] - 1]);
          }
        }}
        disabled={lowestPoint}
      >
        octave down
      </button>
      <VolumeSlider volume={volume} setVolume={setVolume} />
      <div className="piano-container">
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={playNote}
          stopNote={stopNote}
          width={900}
          keyboardShortcuts={KeyboardShorties}
        />
      </div>
      <SynthSelector setWaveForm={setWaveForm} />
      <button
        className="octave-button"
        onClick={handleOctaveUp}
        onKeyDown={handleKeyDown}
        disabled={highestPoint}
      >
        octave up
      </button>
    </div>
  );
}
export default Keyboard;
