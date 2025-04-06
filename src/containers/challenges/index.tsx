"use client"
import cx from "classnames";
import { Indie_Flower } from "next/font/google";
import { CircleButton, Header} from '@/components';

import styles from './challenges.module.css';
import { useCategoriesAtom } from "@/hooks";
import { useEffect, useState } from "react";
import { Challenge, ChallengeMerged } from "@/types";
import { CHALLENGES } from "@/constants";

const indie = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export function Challenges() {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challenge, setChallenge] = useState<ChallengeMerged>();

  const { categories } = useCategoriesAtom();

  const getChallengeInfo = (list?: Challenge[]) => {
    list = list ? list : challengeList;
    const idx = Math.floor(Math.random() * list?.length);
    const category = categories.find((category) => category.name === list[idx]?.type);
    console.log(list, idx);

    setChallenge({
      color: category?.color || 'grey',
      description: list[idx]?.description || 'Deu ruim'
    })
  }

  useEffect(() => {
    const selectetCategories = categories
                                .filter((category) => category.selected)
                                .map((category) => category.name);
    const list = CHALLENGES.filter((challenge) => selectetCategories.includes(challenge.type))
    setChallengeList(list);
    getChallengeInfo(list);
  }, [])

  return (
    <div className={styles.container}>
      <Header back='/categories' />
      {challenge && (
        <div className={styles.content}>
          <div className={cx(styles.circle, styles[`bg-${challenge.color}`])}></div>
          <h1 className={cx(styles.text, indie.className, styles[`color-${challenge.color}`])}>
            {challenge?.description}
          </h1>
        </div>
      )}
      <div className={styles.footer} onClick={() => getChallengeInfo()}>
        <CircleButton href='#' />
      </div>
    </div>
  );
}
