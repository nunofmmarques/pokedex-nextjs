import { Pokemon } from "@/types/Pokemon";
import { API_baseURL } from "@/utils/constants";

export const fetchPokemon = async (pokemon: string) => {
  const URL = `${API_baseURL}/pokemon/${pokemon}`;

  let response;
  let data: Pokemon | null = null;
  let error;

  try {
    response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};
