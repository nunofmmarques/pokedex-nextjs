"use client";

import Image from 'next/image'
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Pokemon } from "@/types/Pokemon";
import { Pokedex } from "@/components/Pokedex";
import { fetchPokemonList } from "@/api/fetchPokemonList";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setPokemonList(await fetchPokemonList(1));
      setLoading(false);
    })();
  }, []);

  return (
    <main className="p-5">
      <div className='flex flex-col items-center justify-between'>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Pokedex
        </h2>
        <ModeToggle></ModeToggle>
      </div>
      <Pokedex
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
      />
    </main>
  )
}
