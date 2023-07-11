import { capitalize } from "@/helpers/capitalize";
import { getSinglePokemon } from "@/lib/getSinglePokemon";
import TypeTag from "@/components/TypeTag";
import PokedexSections from "@/components/PokedexSections";

const SinglePokemon = async ({ params }) => {
  const fetchData = getSinglePokemon(params.id);
  const pokemon = await fetchData;

  return (
    <main>
      <section
        className={`w-auto sm:w-1/2 flex flex-col items-center justify-center mx-16 my-8 rounded`}
      >
        <div className="text-center">
          <h1 className="font-bold text-2xl text-zinc-700">
            {capitalize(pokemon.name)}
          </h1>
          <p className="text-zinc-700 tracking-wide">
            {String(pokemon.id).padStart(4, "0")}
          </p>
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
    </main>
  );
};

export default SinglePokemon;
