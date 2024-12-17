/* eslint-disable react-refresh/only-export-components */
import {  createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
   
   // const [darkMod, setDarkMod] = useState(false);

   const [darkMod, setDarkMod] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    
    return savedMode ? JSON.parse(savedMode) : false; // Converte para boolean
  });
   
    // const handleMod = () => {
    //     setDarkMod(!darkMod);
    // };

    const handleMod = () => {
        setDarkMod((prevMode) => {
          const newMode = !prevMode;
          localStorage.setItem("darkMode", JSON.stringify(newMode)); // Salva no localStorage
          return newMode;
        });
      };

    return (
        <ThemeContext.Provider value = {{darkMod, handleMod}}>
            {children}
        </ThemeContext.Provider>
    )
}

