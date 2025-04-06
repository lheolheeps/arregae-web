import { Indie_Flower } from "next/font/google";
import cx from "classnames";
import { CircleButton } from "@components";
import styles from './header.module.css';

const indie = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type HeaderProps = {
  back: string;
}

export function Header({ back }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.back}>
        <CircleButton href={back} />
      </div>
      <span className={cx(indie.className, styles.name)}>Arregaê</span>
    </div>
  );
}
