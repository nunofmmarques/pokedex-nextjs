import { PokemonCard } from "@/components/PokemonCard";
import * as C from "./styles";
import { Loading } from "@/components/helper/Loading";
import { Pokemon } from "@/types/Pokemon";
import { useEffect, useState, useCallback } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { fetchPokemonList } from "@/api/fetchPokemonList";

type PokedexProps = {
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
};


export const Pokedex = (props: PokedexProps) => {
  const [fetching, setFetching] = useState(false);

  const handleChange = useCallback(
    async () => {
      if (fetching) {
        return;
      }

      setFetching(true);

      try {
        const items = await fetchPokemonList(props.page);
        props.setPokemonList([...props.pokemonList, ...items]);
        props.setPage(props.page + 1)
      } finally {
        setFetching(false);
      }
    }
    , [fetching]);

  return (
    <C.Wrapper>
      <div className="main-container">
        {props.loading ? (
          <Loading />
        ) : (
          <InfiniteScroll
            pageStart={props.page}
            loadMore={handleChange}
            hasMore={true}
            loader={<Loading />}
          >
            <C.PokemonList>
              {props.pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                />
              ))}
            </C.PokemonList>
          </InfiniteScroll>
        )}
      </div>
    </C.Wrapper>
  );
};
