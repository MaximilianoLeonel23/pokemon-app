import { capitalize } from "@/helpers/capitalize";
import { getSinglePokemon } from "@/lib/getSinglePokemon";
import TypeTag from "@/components/TypeTag";
import PokedexSections from "@/components/PokedexSections";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/assets/icons/arrowRight.svg";
import arrowRightLock from "@/assets/icons/arrowRightLock.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import arrowLeftLock from "@/assets/icons/arrowLeftLock.svg";
const SinglePokemon = async ({ params }) => {
  const fetchData = getSinglePokemon(params.id);
  const pokemon = await fetchData;

  return (
    <main>
      <div className="md:container flex flex-col md:flex-row items-center md:items-start md:gap-16 lg:gap-32">
        <section
          className={`md:sticky md:top-8 w-auto sm:w-1/2 flex flex-col items-center justify-center mx-16 my-8 rounded`}
        >
          <div className="flex items-center justify-between w-full">
            {Number(params.id) === 1 ? (
              <Image src={arrowLeftLock} alt="arrow left lock" />
            ) : (
              <Link
                href={`/pokedex/${Number(params.id) - 1}`}
                className="bg-zinc-200 rounded-full p-2"
              >
                <Image src={arrowLeft} alt="arrow left" />
              </Link>
            )}
            <div className="text-center">
              <h1 className="font-bold text-2xl text-zinc-700">
                {capitalize(pokemon.name)}
              </h1>
              <p className="text-zinc-700 tracking-wide">
                {String(pokemon.id).padStart(4, "0")}
              </p>
            </div>
            {Number(params.id) === 1010 ? (
              <Image src={arrowRightLock} alt="arrow right lock" />
            ) : (
              <Link
                href={`/pokedex/${Number(params.id) + 1}`}
                className="bg-zinc-200 rounded-full p-2"
              >
                <Image src={arrowRight} alt="arrow right" />
              </Link>
            )}
          </div>

          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <div className="flex gap-2 py-4">
            {pokemon.types.map((type, i) => (
              <TypeTag key={i} type={type.type} />
            ))}
          </div>
        </section>
        <PokedexSections pokemon={pokemon} />
      </div>
    </main>
  );
};

export default SinglePokemon;
