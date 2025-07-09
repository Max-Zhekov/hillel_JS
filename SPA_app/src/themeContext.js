import { createContext } from "react";

export const themes = {
  light: {
    name: "light",
    color: "#212121",
    background: "#FAFAFA",
    accent: "#3F51B5",
    border: "#E0E0E0",
    taskBg: "#FFFFFF",
    taskBorder: "#3F51B5",
    buttonBg: "#3F51B5",
    buttonHoverBg: "#303F9F",
    modalBg: "#FFFFFF",
    modalText: "#212121",
  },
  dark: {
    name: "dark",
    color: "#E0E0E0",
    background: "#121212",
    accent: "#7986CB",
    border: "#333333",
    taskBg: "#1E1E1E",
    taskBorder: "#7986CB",
    buttonBg: "#7986CB",
    buttonHoverBg: "#5C6BC0",
    modalBg: "#1E1E1E",
    modalText: "#E0E0E0",
  },
};

export const ThemeContext = createContext(null);
