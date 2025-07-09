import { useContext } from "react";
import { ThemeContext, themes } from "../themeContext";
import { Switch, FormControlLabel } from "@mui/material";

export default function ChangeThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);

  const isDark = theme.name === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? themes.light : themes.dark);
  };

  return (
    <FormControlLabel
      control={<Switch checked={isDark} onChange={toggleTheme} />}
      label="Dark mode"
    />
  );
}
