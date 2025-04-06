export type Challenge = {
  type: 'Leves' | 'Pesadas' | 'Ousadas' | 'Picantes',
  description: string;
}

export type ChallengeMerged = {
  color: "red" | "orange" | "white" | "grey",
  description: string;
}
