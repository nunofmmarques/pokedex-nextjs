import { PokemonType } from "@/components/PokemonType";
import * as C from "./styles";
import { Pokemon } from "@/types/Pokemon";
import { SkeletonLoading } from "@/components/helper/SkeletonLoading";
import Link from 'next/link'
import { formatPokemonId, typeColor } from "@/components/helper/format";

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = (props: PokemonCardProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

  const [{ color }] = typeColor(props.pokemon.types)

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
