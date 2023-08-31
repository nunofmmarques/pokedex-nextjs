import { fetchPokemon } from "./fetchPokemon";
import { API_baseURL } from "@/utils/constants";

export const fetchPokemonList = async (page: number) => {
  const offset = 20 * (page - 1);
  const URL = `${API_baseURL}/pokemon?offset=${offset}&limit=20`;


  const response = await fetch(URL);
  const data = await response.json();

  const promises = data.results.map(
    async (pokemon: { name: string }) => (await fetchPokemon(pokemon.name)).data
  );

  return Promise.all(promises);
};
