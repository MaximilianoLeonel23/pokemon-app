import RegionCard from "@/components/RegionCard";
import { getRegions } from "@/lib/getGenerations";

const RegionsPage = async () => {
  const fetchData = getRegions();
  const regions = await fetchData;

  return (
    <main className="container mx-auto px-4">
      <div>
        {regions.results.map((region, i) => {
          return <RegionCard key={i} region={region} id={i + 1} />;
        })}
      </div>
    </main>
  );
};

export default RegionsPage;
