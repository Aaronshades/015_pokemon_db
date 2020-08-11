import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Aaronshades/015_pokemon_db"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project found on{" "}
        <img src="/github.svg" alt="Github Logo" className={styles.logo} />
      </a>
      <a
        href="https://twitter.com/HaakonHelmen"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Twitter{" "}
        <img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
      </a>
    </footer>
  );
};

export default Footer;
