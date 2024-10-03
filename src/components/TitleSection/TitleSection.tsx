import React from "react";
import styles from "./Title.module.css";
import Image from "next/image";

function TitleSection() {
  return (
    <section className={styles.titleSection}>
      <Image
        width={400}
        height={200}
        src={"/images/Raisa.jpg"}
        alt="Foto Raisa"
      />
      <div className={styles.title}>
        <h1 className={styles.author}>Raisa Oberemchuk</h1>
        <p>Професійні послуги регресії</p>
      </div>
    </section>
  );
}

export default TitleSection;
