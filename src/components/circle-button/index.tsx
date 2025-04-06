import Link from 'next/link';
import styles from './circle-button.module.css';
import cx from "classnames"

type CircleButtonProps = {
  href: string;
};

export function CircleButton({ href }: CircleButtonProps) {
  return (
    <Link className={cx(styles.button, styles.learnMore)} href={href}>
      <span className={styles.circle} aria-hidden="true">
        <span className={cx(styles.icon, styles.arrow)}></span>
      </span>
    </Link>
  );
}
