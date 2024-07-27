import { useContext } from "react";
import { DarkModeContext } from "../context/Dark";

// Custom hook for dark mode
const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default useDarkMode;