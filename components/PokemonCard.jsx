import { useState, useEffect } from "react";
import { capitalize } from "@/helpers/capitalize";
import { getPokemonByUrl } from "@/lib/getPokemonByUrl";
import Link from "next/link";
import TypeTag from "./TypeTag";

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
    <Link href={`/pokedex/${singlePokemon?.id}`}>
      <article className="bg-zinc-200 p-4 rounded-lg text-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          {singlePokemon ? (
            <>
              <div className="p-2">
                <img
                  src={
                    singlePokemon.sprites.other["official-artwork"]
                      .front_default
                  }
                  alt={singlePokemon.name}
                />
              </div>
              <h4 className="font-semibold text-zinc-800 ">
                {capitalize(singlePokemon.name)}
              </h4>
              <span className="font-normal text-sm text-zinc-800 tracking-wide">
                {String(singlePokemon.id).padStart(4, "0")}
              </span>
              <div className="flex flex-wrap gap-2 justify-center">
                {singlePokemon.types.map((type, i) => (
                  <TypeTag key={i} type={type.type} />
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default PokemonCard;
