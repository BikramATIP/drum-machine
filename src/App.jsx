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


const handlePadClick = (pad) => {
  if (!power) return;
  const audio = new Audio(pad.sound);
  audio.volume = volume;
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
      </div>)
     })}
    </div>
    <div className="volume-container">
     <input className="volume-bar" type="range" min="0" max="1" step="0.1" onChange={(e) => dispatch(setVolume(Number(e.target.value)))}/>
     <span className="volume" id="volume">{volume}</span>
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

