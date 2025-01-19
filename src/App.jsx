import { useState } from 'react'
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
  
const activePads = pads.filter((_, index) => 
   activeSet === 1 ? index < 9 : index >= 9
);

const handlePadClick = (pad) => {
    const audio = new Audio(pad.sound);
    audio.play();
}



  return (
    <>
    
   <div className="drumMachine" id="drum-machine">
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
    
   </div>
    </>
  )
}

export default App

