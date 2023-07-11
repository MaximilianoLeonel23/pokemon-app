import { getPokemonSpecies } from "@/lib/getSinglePokemon";

const PokedexEvolutionSection = async ({ pokemon }) => {
  const fetchData = await getPokemonSpecies(pokemon.species.url);
  const pokemonSpecies = await fetchData;

  console.log(pokemonSpecies);
  return <section className="container text-sm text-zinc-700"></section>;
};

export default PokedexEvolutionSection;
