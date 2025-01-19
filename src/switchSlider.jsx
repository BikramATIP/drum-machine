import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSet } from "./drumMachineSlice";

function SetSwitchSlider() {
  const dispatch = useDispatch();
  const activeSet = useSelector((state) => state.drumMachine.activeSet);

  const handleSetChange = (event) => {
    const selectedSet = Number(event.target.value);
    if (selectedSet !== activeSet) {
      dispatch(toggleSet());
    }
  };

  return (
    <div className="set-slider-container">
      <div className="slider-labels">
        <span className={`slider-label ${activeSet === 1 ? "active" : ""}`}>Set 1</span>
        <span className={`slider-label ${activeSet === 2 ? "active" : ""}`}>Set 2</span>
      </div>
      <input
        type="range"
        min="1"
        max="2"
        value={activeSet}
        onChange={handleSetChange}
        className="set-slider"
      />
    </div>
  );
}

export default SetSwitchSlider;