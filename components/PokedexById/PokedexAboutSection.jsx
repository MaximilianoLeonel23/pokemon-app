import { capitalize } from "@/helpers/capitalize";
import TypeTag from "../TypeTag";
import { getPokemonSpecies } from "@/lib/getSinglePokemon";

const PokedexAboutSection = async ({ pokemon }) => {
  const fetchData = await getPokemonSpecies(pokemon.species.url);
  const information = await fetchData;
  const notHiddenAbility = pokemon?.abilities.filter(
    (ability) => !ability.is_hidden
  );
  const isHiddenAbility = pokemon?.abilities.filter(
    (ability) => ability.is_hidden
  );
  return (
    <section className="container text-sm text-zinc-700 pb-8 border-b-[1px] border-zinc-200">
      <h2 className="font-bold text-base pb-4">About</h2>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-medium">Description</h2>
          <p>
            {information.flavor_text_entries
              .filter((entrie) => entrie.language.name === "en")[0]
              .flavor_text.replace(/\n/g, " ")
              .replace(/\f/g, " ")
              .replace(/POKéMON/g, "Pokemon")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Type/s :</h2>
          {pokemon.types.map((type, i) => (
            <TypeTag key={i} type={type.type} />
          ))}
        </div>
        <div>
          <h2 className="font-medium">Normal Ability </h2>
          {notHiddenAbility?.map((ability) => {
            return <p>{capitalize(ability.ability.name)}</p>;
          })}
        </div>
        <div>
          <h2 className="font-medium">Hidden Ability</h2>
          {isHiddenAbility?.map((ability) => {
            return <p>{capitalize(ability.ability.name)}</p>;
          })}
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">
            Height :{" "}
            <span className="font-normal">{pokemon.height / 10} m</span>
          </p>
          <p className="font-medium">
            Weight :{" "}
            <span className="font-normal">{pokemon.weight / 10} kg</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PokedexAboutSection;
