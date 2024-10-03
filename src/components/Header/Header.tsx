import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* <nav>
        <ul className={styles.navList}>
          <li>
            <Link href={"#footer"}>Про метод</Link>
          </li>
          <li>
            <Link href={"/"}>Записатися до Раїси</Link>
          </li>
          <li>
            <Link href={"/"}>Записатися до регресолога</Link>
          </li>
          <li>
            <Link href={"/"}>Навчання регресії</Link>
          </li>
          <li>
            <Link href={"#footer"}>Контакти</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
