import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

// Initial state for the dark mode context
const INTIAL_STATE={
    darkMode:false
}

// Create the dark mode context
export const DarkModeContext=createContext(INTIAL_STATE);

// Dark mode context provider component
export const DarkModeContextProvider=({children})=>{
  // Use reducer to manage state using the dark mode reducer
  const [state, dispatch] = useReducer(DarkModeReducer, INTIAL_STATE);

  return (
    // Provide the dark mode state and dispatch function to children components
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
}