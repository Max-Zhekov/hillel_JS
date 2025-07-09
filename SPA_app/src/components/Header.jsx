import ChangeThemeButton from "./ChangeThemeButton";
import Link from "./Link";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Header = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <header className="header">
      <h1 style={{ color: theme.color }}>My first SPA app</h1>
      <ul className="header__logo">
        <li>
          <Link href="/">Головна</Link>
        </li>
        <li>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li>
          <Link href="/aboutMe">Про мене</Link>
        </li>
      </ul>
      <ChangeThemeButton />
    </header>
  );
};

export default Header;
