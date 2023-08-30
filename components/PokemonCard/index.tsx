import { PokemonType } from "@/components/PokemonType";
import * as C from "./styles";
import { Pokemon } from "@/types/Pokemon";
import { pokemonTypes } from "@/utils/pokemonTypes";
import { SkeletonLoading } from "@/components/helper/SkeletonLoading";
import Link from 'next/link'

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = (props: PokemonCardProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <C.Container>
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
      </C.PokemonFeatures>
      <Link href={`/pokemon/${props.pokemon.name}`} className="w-full">
        <C.MoreDetailsButton color={color}>
          Mais Detalhes
        </C.MoreDetailsButton>
      </Link>
    </C.Container>
  );
};
