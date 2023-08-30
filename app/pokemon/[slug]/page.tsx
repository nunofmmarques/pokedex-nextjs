"use client";

import { PokemonPage } from "@/components/PokemonPage"
import { Pokemon } from "@/types/Pokemon"
import { useEffect, useState } from "react";
import { fetchPokemon } from "@/api/fetchPokemon";

export default function Page({ params }: { params: { slug: string } }) {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        (async () => {
            let response = await fetchPokemon(params.slug)
            setPokemon(response.data);
            setIsLoading(false);
        })();
    }, [params.slug]);

    return (
        <div>
            {!isLoading && (
                <div>
                    <PokemonPage
                        pokemon={pokemon}
                    />
                </div>
            )}
        </div>
    )
}
