import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create Context
export const DarkModeContext = createContext();

// Create provider
export const DarkModeProvider = ({ children }) => {
     const [isDarkMode, setIsDarkMode] = useState(false);

     const toggleDarkMode = () => {
          setIsDarkMode((prevMode) => !prevMode);
     };

     return (
          <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
               {children}
          </DarkModeContext.Provider>
     );
};

DarkModeProvider.propTypes = {
     children: PropTypes.node.isRequired,
};