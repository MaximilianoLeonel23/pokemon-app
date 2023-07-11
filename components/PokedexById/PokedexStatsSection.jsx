import { capitalize } from "@/helpers/capitalize";

const PokedexStatsSection = ({ pokemon }) => {
  return (
    <section className=" container text-sm text-zinc-700 pb-8 border-b-[1px] border-zinc-200">
      <h2 className="font-bold text-base pb-4">Stats</h2>
      <div className="grid grid-cols-2 gap-4 text-sm text-zinc-700">
        {pokemon?.stats.map((stat, i) => {
          return (
            <div key={i}>
              <p className="font-medium">
                {capitalize(stat.stat.name)}
                <span className="font-normal">: {stat.base_stat}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PokedexStatsSection;
