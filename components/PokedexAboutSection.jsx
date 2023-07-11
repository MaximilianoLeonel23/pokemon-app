const PokedexAboutSection = ({ pokemon }) => {
  const notHiddenAbility = pokemon?.abilities.filter(
    (ability) => !ability.is_hidden
  );
  const isHiddenAbility = pokemon?.abilities.filter(
    (ability) => ability.is_hidden
  );
  return (
    <section className="container">
      <div>
        <h2>Abilidad normal </h2>
        {notHiddenAbility?.map((ability) => {
          return <p>{ability.ability.name}</p>;
        })}
      </div>
      <div>
        <h2>Abilidad oculta</h2>
        {isHiddenAbility?.map((ability) => {
          return <p>{ability.ability.name}</p>;
        })}
      </div>
      <div className="flex items-center justify-between">
        <p>Height : {pokemon.height / 10} m</p>
        <p>Weight : {pokemon.weight / 10} kg</p>
      </div>
    </section>
  );
};

export default PokedexAboutSection;
