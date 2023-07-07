import { capitalize } from "@/helpers/capitalize";
import { getPokemonByUrl } from "@/lib/getPokemonByUrl";
import Link from "next/link";

const PokemonCard = async ({ pokemon }) => {
  const fetchData = getPokemonByUrl(pokemon.url);
  const singlePokemon = await fetchData;

  return (
    <div className="border border-gray-800 p-4">
      <h4>{capitalize(singlePokemon.name)}</h4>
      <ul>
        {singlePokemon &&
          singlePokemon.types.map((type, i) => {
            return <li key={i}>{capitalize(type.type.name)}</li>;
          })}
      </ul>
      <span>#{String(singlePokemon.id).padStart(4, "0")}</span>
      <Link href={`/pokedex/${singlePokemon.id}`}>Detalles</Link>
    </div>
  );
};

export default PokemonCard;
