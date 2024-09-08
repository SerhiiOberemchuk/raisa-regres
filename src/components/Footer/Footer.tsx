import styles from "./footer.module.css";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.linkedin.com/in/serhii-oberemchuk/">
        Created by OBEREMCHUK
      </a>
    </footer>
  );
};
