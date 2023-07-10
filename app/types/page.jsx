import TypeCard from "@/components/TypeCard";
import { getTypesPokemon } from "@/lib/getTypesPokemon";

const TypePage = async () => {
  const fetchTypeData = getTypesPokemon();
  const data = await fetchTypeData;
  const typeList = data.results.slice(0, -2);

  return (
    <main className="container py-4">
      <h1 className="text-3xl text-zinc-700 font-bold mb-4">Types</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {typeList.map((type, i) => {
          return <TypeCard type={type} key={i} />;
        })}
      </div>
    </main>
  );
};

export default TypePage;
