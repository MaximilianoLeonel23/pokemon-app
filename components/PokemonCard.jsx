import { useState, useEffect } from "react";
import { capitalize } from "@/helpers/capitalize";
import { getPokemonByUrl } from "@/lib/getPokemonByUrl";
import Link from "next/link";
import TypeTag from "./TypeTag";
import { getBgColor } from "@/helpers/getColorClass";
import Loading from "./Loading";

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
      <article
        className={`border border-zinc-200 bg-zinc-100 p-4 rounded-lg text-center`}
      >
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
              <h4 className="font-semibold text-zinc-700 ">
                {capitalize(singlePokemon.name)}
              </h4>
              <span className="font-medium text-sm text-zinc-700 tracking-wide">
                {String(singlePokemon.id).padStart(4, "0")}
              </span>
              <div className="flex flex-wrap gap-2 justify-center">
                {singlePokemon.types.map((type, i) => (
                  <TypeTag key={i} type={type.type} />
                ))}
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </article>
    </Link>
  );
};

export default PokemonCard;
