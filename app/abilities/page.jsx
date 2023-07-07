import AbilityCard from "@/components/AbilityCard";
import { getAbilities } from "@/lib/getAbilities";

const AbilitiesPage = async () => {
  const fetchData = getAbilities();
  const abilitiesList = await fetchData;
  console.log(abilitiesList);
  return (
    <main className="container mx-auto px-4">
      <h1>Abilities</h1>
      <div className="grid gap-4">
        {abilitiesList.results.map((ability, i) => {
          return <AbilityCard key={i} ability={ability} />;
        })}
      </div>
    </main>
  );
};

export default AbilitiesPage;
