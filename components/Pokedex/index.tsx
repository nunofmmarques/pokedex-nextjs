import { PokemonCard } from "@/components/PokemonCard";
import * as C from "./styles";
import { Loading } from "@/components/helper/Loading";
import { Pokemon } from "@/types/Pokemon";
import { useState } from "react";


type PokedexProps = {
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
};

export const Pokedex = (props: PokedexProps) => {
  const [showPagination, setShowPagination] = useState(true);

  return (
    <C.Wrapper>
      <div className="main-container">
        {props.loading ? (
          <Loading />
        ) : (
          <C.PokemonList>
            {props.pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))}
          </C.PokemonList>
        )}
      </div>
    </C.Wrapper>
  );
};
