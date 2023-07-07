import { getTypesProps } from "@/lib/getTypesPokemon";
const TypeCard = async ({ type }) => {
  const fetchPropsData = getTypesProps(type.url);
  const props = await fetchPropsData;
  return (
    <div className="flex gap-4 border border-gray-800 p-4">
      <p>{type.name}</p>
      <div>
        <h4>Weak to</h4>
        {props.damage_relations.double_damage_from.map((tag) => {
          return <p>{tag.name}</p>;
        })}
      </div>
      <div>
        <h4>Strong to</h4>
        {props.damage_relations.double_damage_to.map((tag) => {
          return <p>{tag.name}</p>;
        })}
      </div>
      <div>
        <h4>Half damage from</h4>
        {props.damage_relations.half_damage_from.map((tag) => {
          return <p>{tag.name}</p>;
        })}
      </div>
      <div>
        <h4>Half damage to</h4>
        {props.damage_relations.half_damage_to.map((tag) => {
          return <p>{tag.name}</p>;
        })}
      </div>
      <div>
        <h4>No damage from</h4>
        {props.damage_relations.no_damage_from.map((tag) => {
          return <p>{tag.name}</p>;
        })}
      </div>
      <div>
        <h4>No damage to</h4>
        {props.damage_relations.no_damage_to.map((tag) => {
          return <p>{tag.name}</p>;
        })}
      </div>
    </div>
  );
};

export default TypeCard;
