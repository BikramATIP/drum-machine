import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pads: [
        { id: 1, name: "Heater 1", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", active: false, key: "q" },
        { id: 2, name: "Heater 2", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", active: false, key: "w" },
        { id: 3, name: "Heater 3", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", active: false, key: "e" },
        { id: 4, name: "Heater 5", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", active: false, key: "a" },
        { id: 5, name: "Clap", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", active: false, key: "s" },
        { id: 6, name: "Open HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", active: false, key: "d" },
        { id: 7, name: "Kick n' Hat", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", active: false, key: "z" },
        { id: 8, name: "Kick", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", active: false, key: "x" },
        { id: 9, name: "Closed HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", active: false, key: "c" },
        { id: 10, name: "Chord 1", sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", active: false, key: "q" },
        { id: 11, name: "Chord 2", sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", active: false, key: "w" },
        { id: 12, name: "Chord 3", sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3", active: false, key: "e" },
        { id: 13, name: "Shaker", sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", active: false, key: "a" },
        { id: 14, name: "Open HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", active: false, key: "s" },
        { id: 15, name: "Closed HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", active: false, key: "d" },
        { id: 16, name: "Punchy Kick", sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", active: false, key: "z" },
        { id: 17, name: "Side Stick", sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", active: false, key: "x" },
        { id: 18, name: "Snare", sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", active: false, key: "c" }
    ],
    activeSet: 1,
    volume: 0.8,
    power: true
    }

const drumMachineSlice = createSlice({
    name: 'drumMachine',
    initialState,
    reducers: {
        toggleSet: (state) => {
            state.activeSet = state.activeSet === 1 ? 2 : 1;
        },
        togglePad: (state, action) => {
         const pad = state.pads.find((p) => p.id === action.payload);
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        powerSwitch: (state) => {
         state.power = !state.power;
        }
        
    }
})

export const { toggleSet, togglePad, setVolume, powerSwitch } = drumMachineSlice.actions;
export default drumMachineSlice.reducer;

