import { getRegionPokedex } from "@/lib/getGenerations";

const RegionPokedex = async ({ regionPokedexUrl }) => {
  const fetchData = getRegionPokedex(regionPokedexUrl);
  const regionPokedex = await fetchData;

  return (
    <>
      <h3>Pokedex Regional: </h3>
      <section>
        <ul>
          {regionPokedex.pokemon_entries.map((entry, i) => {
            return <li key={i}>{entry.pokemon_species.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default RegionPokedex;
