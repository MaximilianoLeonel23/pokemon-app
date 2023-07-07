import { capitalize } from "@/helpers/capitalize";
import { getSinglePokemon } from "@/lib/getSinglePokemon";

const SinglePokemon = async ({ params }) => {
  const fetchData = getSinglePokemon(params.id);
  const pokemon = await fetchData;

  return (
    <main className="container mx-auto px-4">
      <div>
        <p>{params.id}</p>
        <h1>{capitalize(pokemon?.name)}</h1>
      </div>
    </main>
  );
};

export default SinglePokemon;
