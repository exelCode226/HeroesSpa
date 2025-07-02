import { heroes } from "../data/heroes"

export const getHeroByName = (name = "") => {
    const nameCleaned = name.toLocaleLowerCase().trim();

    if (nameCleaned.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(nameCleaned)
    );
};
