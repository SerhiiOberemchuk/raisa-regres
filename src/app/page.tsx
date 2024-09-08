import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.author}>Раїса Оберемчук</h1>
        <ol className={styles.servicesList}>
          <li>Регресія</li>
          <li>Прогресія</li>
          <li>Веселка</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Замов своє світле майбутнє
          </a>
          <button type="button" className={styles.secondary}>
            Читати умови
          </button>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
