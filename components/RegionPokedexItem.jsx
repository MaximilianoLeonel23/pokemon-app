import { capitalize } from "@/helpers/capitalize";

const RegionPokedexItem = ({ pokemon }) => {
  return (
    <article className="bg-zinc-100 border-zinc-200 text-zinc-700 px-2 py-0.5 text-sm">
      <div className="flex items-center gap-4">
        <span>{pokemon.entry_number}</span>
        <p>{capitalize(pokemon.pokemon_species.name)}</p>
      </div>
    </article>
  );
};

export default RegionPokedexItem;
