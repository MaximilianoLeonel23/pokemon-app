import { useState, useEffect } from "react";
import { capitalize } from "@/helpers/capitalize";
import { getPokemonByUrl } from "@/lib/getPokemonByUrl";
import Link from "next/link";

const PokemonCard = ({ url }) => {
  const [singlePokemon, setSinglePokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonByUrl(url);
        setSinglePokemon(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="border border-gray-800 p-4">
      {singlePokemon ? (
        <>
          <h4>{capitalize(singlePokemon.name)}</h4>
          <ul>
            {singlePokemon.types.map((type, i) => (
              <li key={i}>{capitalize(type.type.name)}</li>
            ))}
          </ul>
          <span>#{String(singlePokemon.id).padStart(4, "0")}</span>
          <Link href={`/pokedex/${singlePokemon.id}`}>Detalles</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonCard;
