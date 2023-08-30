"use client";

import { PokemonPage } from "@/components/PokemonPage"
import { Pokemon } from "@/types/Pokemon"
import { useEffect, useState } from "react";
import { fetchPokemon } from "@/api/fetchPokemon";
import { Loading } from "@/components/helper/Loading";

export default function Page({ params }: { params: { slug: string } }) {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        (async () => {
            let response = await fetchPokemon(params.slug)
            setPokemon(response.data);
            setIsLoading(false);
        })();
    }, [params.slug]);

    return (
        <div>
            <div className="main-container">
                {isLoading ? (
                    <Loading />
                ) : (
                    <PokemonPage
                        pokemon={pokemon}
                    />
                )}
            </div>
        </div>
    )
}
