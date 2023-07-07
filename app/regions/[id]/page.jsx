import RegionPokedex from "@/components/RegionPokedex";
import { getSingleRegion } from "@/lib/getGenerations";

const SingleRegionPage = async ({ params }) => {
  const fetchData = getSingleRegion(params.id);
  const singleRegion = await fetchData;
  return (
    <main className="container mx-auto px-4">
      <p>Params: {params.id}</p>
      <p>Region: {singleRegion.name}</p>
      <RegionPokedex regionPokedexUrl={singleRegion.pokedexes[0].url} />
    </main>
  );
};

export default SingleRegionPage;
