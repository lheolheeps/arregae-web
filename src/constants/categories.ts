import { Category } from "@types";

export const CATEGORIES: Category[] = [
  {
    name: 'Leves',
    description: 'Desafios divertidos, fáceis de realizar. Perfeito pra começar o jogo e aquecer a galera.',
    color: 'white',
    selected: false
  },
  {
    name: 'Pesadas',
    description: 'Desafios mais dificeis, mexem com coragem e autoestima. Pra sair da zona de conforto.',
    color: 'grey',
    selected: false
  },
  {
    name: 'Ousadas',
    description: 'Desafios com um toque sensual, mas sempre na brincadeira e sem passar do limite.',
    color: 'orange',
    selected: false
  },
  {
    name: 'Picantes',
    description: 'Provocações quentes e intensas, só pra quem tá no clima! Com consentimento e respeito.',
    color: 'red',
    selected: false
  },
]
