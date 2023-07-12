import TypeCard from "@/components/TypeCard";
import { getTypesPokemon } from "@/lib/getTypesPokemon";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import Link from "next/link";
import Image from "next/image";
const TypePage = async () => {
  const fetchTypeData = getTypesPokemon();
  const data = await fetchTypeData;
  const typeList = data.results.slice(0, -2);

  return (
    <main className="container py-4">
      <div className="flex items-start gap-4">
        <Link href="/" className="bg-zinc-200 rounded-full p-2">
          <Image src={arrowLeft} alt="arrow left" />
        </Link>
        <h1 className="text-3xl text-zinc-700 font-bold mb-4">Types</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {typeList.map((type, i) => {
          return <TypeCard type={type} key={i} />;
        })}
      </div>
    </main>
  );
};

export default TypePage;
