import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { NavLink } from "react-router-dom";

const Link = ({ href, children }) => {
  const theme = useContext(ThemeContext)[0];

  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? "navlink-active" : "navlink")}
      style={{ color: theme.color, textDecoration: "none" }}>
      {children}
    </NavLink>
  );
};

export default Link;
