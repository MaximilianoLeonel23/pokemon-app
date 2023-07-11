import { capitalize } from "@/helpers/capitalize";
import { getTypesProps } from "@/lib/getTypesPokemon";
import TypeTag from "./TypeTag";
import { getBgColor } from "@/helpers/getColorClass";

const TypeCard = async ({ type }) => {
  const fetchPropsData = getTypesProps(type.url);
  const props = await fetchPropsData;

  const none = {
    name: "none",
  };
  return (
    <div className="border border-zinc-200 bg-zinc-100 px-4 rounded py-4 text-zinc-700">
      <table className="w-full">
        <tbody>
          <caption
            className={`text-center font-semibold tracking-wide rounded py-2 ${getBgColor(
              type.name
            )} `}
          >
            {capitalize(type.name)}
          </caption>
          <tr>
            <td>Weak to :</td>
            <td>
              {props.damage_relations.double_damage_from.length > 0 ? (
                props.damage_relations.double_damage_from.map((type) => {
                  return <TypeTag type={type} />;
                })
              ) : (
                <TypeTag type={none} />
              )}
            </td>
          </tr>
          <tr>
            <td>Strong to :</td>
            <td>
              {props.damage_relations.double_damage_to.length > 0 ? (
                props.damage_relations.double_damage_to.map((type) => {
                  return <TypeTag type={type} />;
                })
              ) : (
                <TypeTag type={none} />
              )}
            </td>
          </tr>
          <tr>
            <td>Half damage from :</td>
            <td>
              {props.damage_relations.half_damage_from.length > 0 ? (
                props.damage_relations.half_damage_from.map((type) => {
                  return <TypeTag type={type} />;
                })
              ) : (
                <TypeTag type={none} />
              )}
            </td>
          </tr>
          <tr>
            <td>Half damage to :</td>
            <td>
              {props.damage_relations.half_damage_to.length > 0 ? (
                props.damage_relations.half_damage_to.map((type) => {
                  return <TypeTag type={type} />;
                })
              ) : (
                <TypeTag type={none} />
              )}
            </td>
          </tr>
          <tr>
            <td>No damage from :</td>
            <td>
              {props.damage_relations.no_damage_from.length > 0 ? (
                props.damage_relations.no_damage_from.map((type) => {
                  return <TypeTag type={type} />;
                })
              ) : (
                <TypeTag type={none} />
              )}
            </td>
          </tr>
          <tr>
            <td>No damage to :</td>
            <td>
              {props.damage_relations.no_damage_to.length > 0 ? (
                props.damage_relations.no_damage_to.map((type) => {
                  return <TypeTag type={type} />;
                })
              ) : (
                <TypeTag type={none} />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TypeCard;
