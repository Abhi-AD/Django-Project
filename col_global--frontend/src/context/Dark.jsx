import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create Context
export const DarkModeContext = createContext();

// Create provider
export const DarkModeProvider = ({ children }) => {
     const [DarkMode, setDarkMode] = useState(false);

     const toggleDarkMode = () => {
          setDarkMode((prevMode) => !prevMode);
     };

     return (
          <DarkModeContext.Provider value={{ DarkMode, toggleDarkMode }}>
               {children}
          </DarkModeContext.Provider>
     );
};

DarkModeProvider.propTypes = {
     children: PropTypes.node.isRequired,
};