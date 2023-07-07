import Link from "next/link";

const RegionCard = async ({ region, id }) => {
  return (
    <article>
      <p>{region.name}</p>
      <Link href={`/regions/${id}`}>Ver</Link>
    </article>
  );
};

export default RegionCard;
