import cx from "classnames";
import styles from "./toggle.module.css";

type ToggleProps = {
  color?: 'red' | 'orange' | 'white' | 'grey'
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Toggle({ color = 'white', handleChecked }: ToggleProps) {
  return (
    <input
      className={cx(styles.switch, styles[color])}
      onChange={handleChecked}
      type="checkbox"
    />
  );
}
