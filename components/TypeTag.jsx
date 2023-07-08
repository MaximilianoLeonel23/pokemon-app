import { capitalize } from "@/helpers/capitalize";

const TypeTag = ({ type }) => {
  return (
    <div className="bg-zinc-300 rounded px-2 py-1">
      <p className="text-xs">{capitalize(type.name)}</p>
    </div>
  );
};

export default TypeTag;
