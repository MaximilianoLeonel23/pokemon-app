import TypeCard from "@/components/TypeCard";
import { getTypesPokemon } from "@/lib/getTypesPokemon";

const TypePage = async () => {
  const fetchTypeData = getTypesPokemon();
  const types = await fetchTypeData;
  const typeList = types.results.filter((type) => type.name !== "unknown");
  return (
    <main className="container mx-auto px-4">
      <h1>Tipos pokemon</h1>
      <ul className="flex flex-col gap-4">
        {typeList.map((type, i) => {
          return <TypeCard type={type} key={i} />;
        })}
      </ul>
    </main>
  );
};

export default TypePage;
