"use client"
import cx from "classnames";
import { CircleButton, Header, Toggle } from '@/components';
import { CATEGORIES } from "@/constants/categories";

import styles from './categories.module.css';
import { useCategoriesAtom } from "@/hooks";

export function Categories() {
  const { categories, setCategories } = useCategoriesAtom(CATEGORIES);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    categories[idx].selected = e.target.checked;
    setCategories(categories);
  }

  return (
    <div className={styles.container}>
      <Header back='/' />
      <div className={styles.content}>
        <p>Escolha as categorias desejadas</p>
        <br />
        {categories.map((category, idx) => (
          <div key={category.name} className={cx(styles.card, { [styles[category.color]]: false })}>
            <div className={styles.info}>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <Toggle handleChecked={(e) => handleChecked(e, idx)} color={category.color} />
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <CircleButton href='/challenges' />
      </div>
    </div>
  );
}
