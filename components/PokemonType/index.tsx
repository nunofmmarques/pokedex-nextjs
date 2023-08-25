import { SyntheticEvent } from "react";
import { pokemonTypes } from "@/utils/pokemonTypes";
import * as C from "./styles";
import Image from 'next/image'

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

  const imgUrl = `/pokemonTypes/${name}.svg`

  return name && color ? (
    <C.Type
      color={color}
      value={name}
      onClick={props.handleClick}
      tabIndex={props.tabIndex ? 0 : -1}
    >
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={name}
      />
      {name}
    </C.Type>
  ) : (
    <C.ErrorMessage>
      Ops, não foi possível encontrar o tipo desse pokémon.
    </C.ErrorMessage>
  );
};
