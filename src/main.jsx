import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import drumMachineReducer from './drumMachineSlice.js'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    drumMachine: drumMachineReducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)

