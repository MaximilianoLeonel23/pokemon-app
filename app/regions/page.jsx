import RegionCard from "@/components/RegionCard";
import { getRegions } from "@/lib/getGenerations";

const RegionsPage = async () => {
  const fetchData = getRegions();
  const regions = await fetchData;

  return (
    <main className="container">
      <h1 className="text-3xl text-zinc-700 font-bold">Regions</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4">
        {regions.results.map((region, i) => {
          return <RegionCard key={i} region={region} id={i + 1} />;
        })}
      </div>
    </main>
  );
};

export default RegionsPage;
