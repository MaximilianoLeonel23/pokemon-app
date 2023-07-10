import NewsSection from "@/components/NewsSection";
import SectionCard from "@/components/SectionCard";

export default function Home() {
  const sections = ["pokedex", "types", "abilities", "regions"];
  const colors = ["grass", "fire", "water", "electric"];
  return (
    <main>
      <section className="container py-8">
        <h1 className="text-3xl text-zinc-700 font-bold mb-4">
          What are you looking for?
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-8">
          {sections.map((section, i) => {
            return <SectionCard key={i} section={section} color={colors[i]} />;
          })}
        </div>
      </section>
      <NewsSection />
    </main>
  );
}
