import { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleSet, setVolume, powerSwitch } from './drumMachineSlice'

function App() {
 const dispatch = useDispatch();
 const pads = useSelector((state) => state.drumMachine.pads);
 const activeSet = useSelector((state) => state.drumMachine.activeSet)
 const volume = useSelector((state) => state.drumMachine.volume);
 const power = useSelector((state) => state.drumMachine.power);
 const [currentSound, setCurrentSound] = useState('');
 const [displayText, setDisplayText] = useState('');
const activePads = pads.filter((_, index) => 
   activeSet === 1 ? index < 9 : index >= 9
);
useEffect(() => {
  const kitName = activeSet === 1 ? "Heater Kit" : "Smooth Piano Kit";
  setDisplayText(kitName);
}, [activeSet]);

const handlePadClick = (pad) => {
  if (!power) return;
  const audio =  document.getElementById(pad.key.toUpperCase());
  audio.currentTime = 0;
  audio.volume = volume;W
  audio.play();
  setDisplayText(pad.name);
}


const handleToggleSet = () => {
  if (!power) return;
  const nextSet = activeSet === 1 ? 2 : 1;
  const kitName = nextSet === 1 ? "Heater Kit" : "Smooth Piano Kit";
  setDisplayText(kitName);
  dispatch(toggleSet());
}

const handleKeyPress = (event) => {
  const pad = pads.find(p => p.key.toUpperCase() === event.key.toUpperCase());
  if (pad) {
    handlePadClick(pad);
  }
};

useEffect(() => {
  const handleKeyDown = (event) => handleKeyPress(event);
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [pads, power, volume]);


const handlePowerSwitch = () => {
    dispatch(powerSwitch());
    setDisplayText(!power ? "Power On" : "Power Off");
}
  return (
    <>
    
   <div className="drumMachine" id="drum-machine">
    <div className="top-container">
    <div id="keys-container" className="keys-container">
     {activePads.map((pad) => {
       return (<div
      id={pad.name}
      className="drum-pad"
      key={pad.id}
      onClick={() => handlePadClick(pad)}
      >
      {pad.key.toUpperCase()}
      <audio
                 className="clip"
                 id={pad.key.toUpperCase()}
                 src={pad.sound}
               />
      </div>)
     })}
    </div>
    <div className="volume-container">
     <input value={volume * 100} className="volume-bar" type="range" min="0" max="100" step="1" onChange={(e) => { const scaledVolume = Number(e.target.value) / 100; // Scale the value back to 0-1
               dispatch(setVolume(scaledVolume));
               setDisplayText(`Volume: ${e.target.value}`);
       }
    }/>
     </div>
    </div>
    <div className="bottom-container">
      <div className="display" id="display">
      {displayText}
      </div>
      <div className="controls-container">
     
        <button className="power-button control-button" onClick={handlePowerSwitch}>Power</button>
    
   
        <button className="set-button control-button" onClick={handleToggleSet}>Bank</button>
   
      </div>
    </div>
   </div>
    </>
  )
}

export default App

