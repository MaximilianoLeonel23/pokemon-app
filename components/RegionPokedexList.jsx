import { getRegionPokedex } from "@/lib/getGenerations";
import RegionPokedexItem from "./RegionPokedexItem";

const RegionPokedex = async ({ regionPokedexUrl }) => {
  const fetchData = getRegionPokedex(regionPokedexUrl);
  const regionPokedex = await fetchData;

  return (
    <>
      <h3 className="font-medium text-lg text-zinc-700">Pokedex Regional</h3>
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 py-4">
          {regionPokedex.pokemon_entries.map((entry, i) => {
            return <RegionPokedexItem key={i} pokemon={entry} />;
          })}
        </div>
      </section>
    </>
  );
};

export default RegionPokedex;
