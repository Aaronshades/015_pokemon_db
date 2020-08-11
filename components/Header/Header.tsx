import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img className={styles.headerImg} src="/pikachu.png" alt="Pikachu" />
        </a>
      </Link>
      <nav>
        <ul className={styles.navigationContainer}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/pokemon/firstGen">
              <a>1. Gen</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
