import RegionPokedexList from "@/components/RegionPokedexList";
import { capitalize } from "@/helpers/capitalize";
import { getSingleRegion } from "@/lib/getGenerations";

const SingleRegionPage = async ({ params }) => {
  const fetchData = getSingleRegion(params.id);
  const singleRegion = await fetchData;
  return (
    <main className="container">
      <h1 className="text-3xl text-zinc-700 font-bold">
        {capitalize(singleRegion.name)}
      </h1>
      <RegionPokedexList regionPokedexUrl={singleRegion.pokedexes[0].url} />
    </main>
  );
};

export default SingleRegionPage;
