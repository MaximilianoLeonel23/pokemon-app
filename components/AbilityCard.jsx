import { getAbility } from "@/lib/getAbilities";

const AbilityCard = async ({ ability }) => {
  const fetchData = getAbility(ability.url);
  const singleAbility = await fetchData;

  return (
    <article className="border border-gray-800 p-4">
      <h4>{singleAbility.name}</h4>
      <p>{singleAbility.effect_entries[1].effect}</p>
    </article>
  );
};

export default AbilityCard;
