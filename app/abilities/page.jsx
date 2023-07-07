import { getAbilities } from "@/lib/getAbilities";

const AbilitiesPage = async () => {
  const fetchData = getAbilities();
  const abilitiesList = await fetchData;

  return (
    <main className="container mx-auto px-4">
      <h1>Abilities</h1>
      {abilitiesList.results.map((ability, i) => {
        return <div key={i}>{ability.name}</div>;
      })}
    </main>
  );
};

export default AbilitiesPage;
