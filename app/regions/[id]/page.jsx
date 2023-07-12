import RegionPokedexList from "@/components/RegionPokedexList";
import { capitalize } from "@/helpers/capitalize";
import { getSingleRegion } from "@/lib/getGenerations";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import Link from "next/link";
import Image from "next/image";
const SingleRegionPage = async ({ params }) => {
  const fetchData = getSingleRegion(params.id);
  const singleRegion = await fetchData;
  return (
    <main className="container py-4">
      <div className="flex items-start gap-4">
        <Link href="/regions" className="bg-zinc-200 rounded-full p-2">
          <Image src={arrowLeft} alt="arrow left" />
        </Link>
        <h1 className="text-3xl text-zinc-700 font-bold mb-4">
          {capitalize(singleRegion.name)}
        </h1>
      </div>
      <RegionPokedexList regionPokedexUrl={singleRegion.pokedexes[0].url} />
    </main>
  );
};

export default SingleRegionPage;
