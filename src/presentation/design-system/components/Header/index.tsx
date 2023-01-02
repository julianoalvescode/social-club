import styles from "./styles.module.css";

import IgniteLogo from "assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Ignite Logo" />
    </header>
  );
}
