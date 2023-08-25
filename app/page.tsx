import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Pokemon } from "../types/Pokemon";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Pokedex
      </h2>
      <ModeToggle></ModeToggle>
    </main>
  )
}
