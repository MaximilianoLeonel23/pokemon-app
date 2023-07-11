import { capitalize } from "@/helpers/capitalize";
import React from "react";

const PokedexStatsSection = ({ pokemon }) => {
  return (
    <section className="hidden container text-sm text-zinc-700">
      <div className="grid grid-cols-2 gap-4 text-sm text-zinc-700">
        {pokemon?.stats.map((stat, i) => {
          return (
            <div key={i}>
              <p className="font-medium">
                {capitalize(stat.stat.name)}
                <span className="font-normal"> {stat.base_stat}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PokedexStatsSection;
