import { useContext } from "react";
import { ThemeContext } from "../contexts/ToggleThemeContext";

const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};

export default useTheme;
