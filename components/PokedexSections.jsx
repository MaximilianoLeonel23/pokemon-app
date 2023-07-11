import PokedexAboutSection from "@/components/PokedexById/PokedexAboutSection";
import PokedexStatsSection from "@/components/PokedexById/PokedexStatsSection";
import PokedexMoveSection from "@/components/PokedexById/PokedexMoveSection";
import PokedexEvolutionSection from "@/components/PokedexById/PokedexEvolutionSection";

const PokedexSections = ({ pokemon }) => {
  return (
    <section className="container bg-zinc-100 rounded-t-3xl py-8">
      <div className="flex flex-col gap-4">
        <PokedexAboutSection pokemon={pokemon} />
        <PokedexStatsSection pokemon={pokemon} />
        <PokedexEvolutionSection pokemon={pokemon} />
        <PokedexMoveSection pokemon={pokemon} />
      </div>
    </section>
  );
};

export default PokedexSections;
