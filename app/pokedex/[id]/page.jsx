import { capitalize } from "@/helpers/capitalize";
import { getSinglePokemon } from "@/lib/getSinglePokemon";
import TypeTag from "@/components/TypeTag";
import PokedexAboutSection from "@/components/PokedexById/PokedexAboutSection";
import PokedexStatsSection from "@/components/PokedexById/PokedexStatsSection";
import PokedexMoveSection from "@/components/PokedexById/PokedexMoveSection";
import PokedexEvolutionSection from "@/components/PokedexById/PokedexEvolutionSection";
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
      <section className="container bg-zinc-100 rounded-t-3xl">
        <nav className="container py-4">
          <ul className="flex items-center justify-between border-b-[1px] border-zinc-200">
            <li className="border-b-2 border-zinc-300 py-1 text-sm">About</li>
            <li className="text-sm py-1">Stats</li>
            <li className="text-sm py-1">Evolution</li>
            <li className="text-sm py-1">Moves</li>
          </ul>
        </nav>
        <PokedexAboutSection pokemon={pokemon} />
        <PokedexStatsSection pokemon={pokemon} />
        <PokedexEvolutionSection pokemon={pokemon} />
        <PokedexMoveSection pokemon={pokemon} />
      </section>
    </main>
  );
};

export default SinglePokemon;
