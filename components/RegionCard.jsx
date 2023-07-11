import Link from "next/link";
import { capitalize } from "@/helpers/capitalize";
const RegionCard = async ({ region, id }) => {
  return (
    <Link href={`/regions/${id}`}>
      <article className="border border-zinc-200 bg-zinc-100 rounded-xl px-4 py-8 text-center hover:scale-110 transition">
        <h2 className="font-semibold text-zinc-600">
          {capitalize(region.name)}
        </h2>
      </article>
    </Link>
  );
};

export default RegionCard;
