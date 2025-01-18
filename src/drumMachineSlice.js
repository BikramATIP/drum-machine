import { createSlice } from "@reduxjs/toolkit";

initialState = {
    value: 0
};

const drumMachineSlice = createSlice({
  name: 'drumMachine',
  initialState
})

const pads = [
    { id: 1, sound: "src/sounds/Heater-1.mp3", active: false},
    { id: 2, sound: "src/sounds/Heater-2.mp3", active: false},
    { id: 3, sound: "src/sounds/Heater-3.mp3", active: false},
    { id: 4, sound: "src/sounds/Heater-4_1.mp3", active: false},
    { id: 5, sound: "src/sounds/clap.mp3", active: false},
    { id: 6, sound: "src/sounds/Dsc_Oh.mp3", active: false},
    { id: 7, sound: "src/sounds/Kick_n_Hat.mp3", active: false},
    { id: 8, sound: "src/sounds/RP4_KICK_1.mp3", active: false},
    { id: 9, sound: "src/sounds/Cev_H2.mp3", active: false},
]
