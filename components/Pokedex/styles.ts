import styled from "styled-components";
import tw from "tailwind-styled-components"

export const Wrapper = tw.div`
  mb-10
`;

export const PokemonList = tw.div`
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>div:last-child]:col-span-full lg:[&>div:last-child]:col-span-1 gap-y-[12.5rem] gap-x-8 mt-[12.75rem] mb-10 mx-auto
`;
