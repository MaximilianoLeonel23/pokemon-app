import { capitalize } from "@/helpers/capitalize";
import { getEvolutionChain, getPokemonSpecies } from "@/lib/getSinglePokemon";
import arrowDown from "@/assets/icons/arrowDown.svg";
import Image from "next/image";
const PokedexEvolutionSection = async ({ pokemon }) => {
  const fetchSpeciesData = await getPokemonSpecies(pokemon.species.url);
  const pokemonSpecies = await fetchSpeciesData;
  const fetchEvolutionData = await getEvolutionChain(
    pokemonSpecies.evolution_chain.url
  );
  const evolutionChain = await fetchEvolutionData;

  const renderEvolutions = (evolutions) => {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {evolutions.map((evolution) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <Image src={arrowDown} alt="arrow down" />
              <p className="font-medium border border-zinc-300 rounded py-1 px-6">
                {capitalize(evolution.species.name)}
              </p>
              {evolution.evolves_to.length > 0 &&
                renderEvolutions(evolution.evolves_to)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="container text-sm text-zinc-700 pb-8 border-b-[1px] border-zinc-200">
      <h2 className="font-bold text-base text-center pb-4">Evolution chart</h2>
      <div className="flex flex-col items-center gap-4 text-zinc-700">
        <p className="font-medium border border-zinc-300 rounded py-1 px-6">
          {capitalize(evolutionChain.chain.species.name)}
        </p>
        {evolutionChain.chain.evolves_to.length > 0 &&
          renderEvolutions(evolutionChain.chain.evolves_to)}
      </div>
    </section>
  );
};

export default PokedexEvolutionSection;
