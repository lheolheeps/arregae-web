 import cx from "classnames";
import { Indie_Flower } from "next/font/google";

import { CircleButton } from "@components";

import styles from './home.module.css';



const indie = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={indie.className}>Arregaê</span>
          <span className={cx(styles.subtitle, indie.className)}>Arregou, Bebeu!</span>
        </h1>
        <div className={styles.details}>
          <p>
            Aqui se separam os fortes dos que bebem. Quer moleza? Jogue Uno!
          </p>
          <CircleButton href="/categories" />
        </div>
      </div>
    </div>
  );
}
