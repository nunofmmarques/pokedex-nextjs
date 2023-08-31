import React from "react";
import { PokemonType } from "@/components/PokemonType";
import { Pokemon } from "@/types/Pokemon";
import { pokemonTypes } from "@/utils/pokemonTypes";
import { SkeletonLoading } from "@/components/helper/SkeletonLoading";
import { formatPokemonId, formatStatName, typeColor } from "@/components/helper/format";
import * as C from "./styles";
import Image from 'next/image'
import Pokeball from "@/public/pokeball.svg";
import { Scale, Ruler } from "lucide-react"
import { API_IMG_baseURL } from "@/utils/constants";

type PokemonPageProps = {
    pokemon: Pokemon | null;
};

export const PokemonPage = (props: PokemonPageProps) => {
    const imgUrl = API_IMG_baseURL + props.pokemon.id + '.png';

    const [{ color }] = typeColor(props.pokemon.types)

    return (
        <C.Wrapper>
            <C.Card>
                <C.CardOverlay color={color} />

                <C.PokemonData>
                    <C.PokemonImg>
                        <SkeletonLoading src={imgUrl} alt={props.pokemon.name} />
                        <C.PokeballContainer>
                            <Image
                                src={Pokeball}
                                width={16}
                                height={16}
                                alt="pokeball"
                            />
                        </C.PokeballContainer>
                    </C.PokemonImg>
                    <C.PokemonNumber>{formatPokemonId(props.pokemon.id)}</C.PokemonNumber>
                    <C.PokemonName>{props.pokemon.name}</C.PokemonName>
                    <C.PokemonType>
                        {props.pokemon.types.map(({ type }) => (
                            <PokemonType key={type.name} type={type.name} tabIndex={false} />
                        ))}
                    </C.PokemonType>
                </C.PokemonData>

                <C.PokemonStats>
                    <C.PokemonFeatures>
                        <C.PokemonWeight>
                            <div className="flex items-center gap-x-3">
                                <Scale className="h-5 w-5 opacity-90" />
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-80">Peso</span>
                                    <span className="font-bold">{`${props.pokemon.weight / 10}`} kg</span>
                                </div>
                            </div>
                        </C.PokemonWeight>
                        <C.PokemonHeight>
                            <div className="flex items-center gap-x-3">
                                <Ruler className="h-5 w-5 opacity-90" />
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-80">Altura</span>
                                    <span className="font-bold">{`${props.pokemon.height / 10}`} m</span>
                                </div>
                            </div>
                        </C.PokemonHeight>
                    </C.PokemonFeatures>
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
            </C.Card>
        </C.Wrapper>
    );
};
