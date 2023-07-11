import { capitalize } from "@/helpers/capitalize";
import { getBgColor } from "@/helpers/getColorClass";

const TypeTag = ({ type }) => {
  return (
    <div className={`${getBgColor(type.name)} rounded-full px-3 py-1`}>
      <p className={`text-xs text-zinc-700`}>{capitalize(type.name)}</p>
    </div>
  );
};

export default TypeTag;
