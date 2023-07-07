import PokemonCard from "@/components/PokemonCard";
import { getAllPokemon } from "@/lib/getAllPokemon";

const PokedexPage = async () => {
  const fetchRequest = getAllPokemon();
  const allPokemon = await fetchRequest;

  return (
    <main className="container mx-auto px-4">
      <h1 className="font-bold text-lg text-gray-800">Pokedex</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {allPokemon &&
          allPokemon.map((pokemon, i) => {
            return <PokemonCard key={i} pokemon={pokemon} />;
          })}
      </div>
    </main>
  );
};

export default PokedexPage;
