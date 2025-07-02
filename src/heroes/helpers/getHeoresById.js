import { heroes } from '../data/heroes'

export const getHeoresById = (id) => {
  return heroes.find(hero => hero.id == id)
}
