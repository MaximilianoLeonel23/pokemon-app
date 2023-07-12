import PokedexList from "../../components/PokedexList";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import Link from "next/link";
import Image from "next/image";
const PokedexPage = () => {
  return (
    <main className="container py-4">
      <div className="flex items-start gap-4">
        <Link href="/" className="bg-zinc-200 rounded-full p-2">
          <Image src={arrowLeft} alt="arrow left" />
        </Link>
        <h1 className="text-3xl text-zinc-700 font-bold mb-4">Pokedex</h1>
      </div>

      <PokedexList />
    </main>
  );
};

export default PokedexPage;
