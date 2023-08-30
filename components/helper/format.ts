import { pokemonTypes } from "@/utils/pokemonTypes";

export const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
};

export const typeColor = (types: []) => {
    return pokemonTypes.filter(
        (type) => types[0].type.name.indexOf(type.name) !== -1
    )
};

export const formatStatName = (statName: string) => {
    switch (statName) {
        case "hp":
            return "HP";
        case "attack":
            return "Attack";
        case "defense":
            return "Defense";
        case "special-attack":
            return "Sp. Atk";
        case "special-defense":
            return "Sp. Def";
        case "speed":
            return "Speed";
    }
};
