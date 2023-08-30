import React from "react";
import { PokemonType } from "@/components/PokemonType";
import { Pokemon } from "@/types/Pokemon";
import { pokemonTypes } from "@/utils/pokemonTypes";
import { SkeletonLoading } from "@/components/helper/SkeletonLoading";
import { formatPokemonId, formatStatName, typeColor } from "@/components/helper/format";
import * as C from "./styles";

type PokemonPageProps = {
    pokemon: Pokemon | null;
};

export const PokemonPage = (props: PokemonPageProps) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

    const [{ color }] = typeColor(props.pokemon.types)

    return (
        <C.Wrapper>
            <C.Modal>
                <C.PokemonData>
                    <C.CardOverlay color={color} />
                    <C.PokemonImg>
                        <SkeletonLoading src={imgUrl} alt={props.pokemon.name} />
                    </C.PokemonImg>
                    <C.PokemonNumber>{formatPokemonId(props.pokemon.id)}</C.PokemonNumber>
                    <C.PokemonName>{props.pokemon.name}</C.PokemonName>
                    <C.PokemonType>
                        {props.pokemon.types.map(({ type }) => (
                            <PokemonType key={type.name} type={type.name} tabIndex={false} />
                        ))}
                    </C.PokemonType>
                    <C.PokemonFeatures>
                        <C.PokemonWeight>
                            <div>
                                <span>{`${props.pokemon.weight / 10}`} kg</span>
                            </div>
                            <span>Peso</span>
                        </C.PokemonWeight>
                        <C.PokemonHeight>
                            <div>
                                <span>{`${props.pokemon.height / 10}`} m</span>
                            </div>
                            <span>Altura</span>
                        </C.PokemonHeight>
                    </C.PokemonFeatures>
                </C.PokemonData>

                <C.Divider>
                </C.Divider>

                <C.PokemonStats>
                    <C.StatsTitle>Stats</C.StatsTitle>
                    <C.StatsList>
                        {props.pokemon.stats.map(({ stat, base_stat }) =>
                            React.Children.toArray(
                                <li>
                                    <span>{formatStatName(stat.name)}</span>
                                    <span>{base_stat}</span>
                                    <C.ProgressBar>
                                        <C.ProgressBarFill
                                            base_stat={base_stat}
                                        ></C.ProgressBarFill>
                                    </C.ProgressBar>
                                </li>
                            )
                        )}
                    </C.StatsList>
                </C.PokemonStats>
            </C.Modal>
        </C.Wrapper>
    );
};
