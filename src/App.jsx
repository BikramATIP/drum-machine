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
  
console.log(power)
   

  return (
    <>
   <div className="drumMachine" id="drum-machine">
    <div id="keys-container" className="keys-container">
      <div className="drum-pad"></div>
    </div>
    <div className="control-panel">
     <div id="display">

     </div>
    </div>
   </div>
    </>
  )
}

export default App

