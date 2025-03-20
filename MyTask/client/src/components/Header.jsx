import { Moon, Sun, TrendingUpDown } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import styles from "../styles/Header.module.css";

function Header() {
  const { toggleTheme, isDark } = useTheme();
  const navigateTo = useNavigate();
  const goHome = () => {
    navigateTo("/");
  };
  return (
    <header className={styles.header}>
      <figure className={styles.logo_box} onClick={goHome}>
        <figcaption>
          TRADING
          <span>Hour</span>
        </figcaption>
        <TrendingUpDown className={styles.logo} />
      </figure>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/indicators"> Indicators</a>
          </li>
        </ul>
        <button onClick={toggleTheme} className={styles.toggleMode}>
          {isDark ? (
            <Sun className={styles.mode_icon} />
          ) : (
            <Moon className={styles.mode_icon} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
