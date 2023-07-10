import { capitalize } from "@/helpers/capitalize";
import { getBgColor } from "@/helpers/getColorClass";
import { getSinglePokemon } from "@/lib/getSinglePokemon";

const SinglePokemon = async ({ params }) => {
  const fetchData = getSinglePokemon(params.id);
  const pokemon = await fetchData;

  return (
    <main>
      <section className={`${getBgColor(pokemon?.types[0].type.name)} rounded`}>
        <div className="p-4">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon image"
          />
        </div>
      </section>
      <section className="container">
        <p>{params.id}</p>
        <h1>{capitalize(pokemon?.name)}</h1>
      </section>
    </main>
  );
};

export default SinglePokemon;
