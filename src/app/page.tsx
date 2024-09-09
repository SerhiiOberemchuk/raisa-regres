import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.author}>
          Raisa Oberemchuk - Професійні послуги регресії
        </h1>
        <ol className={styles.servicesList}>
          <li>Регресія</li>
          <li>Прогресія</li>
          <li>Веселка</li>
        </ol>

        <div className={styles.ctas}>
          <a className={styles.primary} href="tel:+380971768196">
            Замов своє світле майбутнє
          </a>

          <button type="button" className={styles.secondary}>
            Читати умови
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
