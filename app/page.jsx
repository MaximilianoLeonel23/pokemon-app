import SectionCard from "@/components/SectionCard";

export default function Home() {
  const sections = ["pokedex", "types", "abilities", "regions"];

  return (
    <main className="container">
      <h1 className="text-3xl text-zinc-700 font-bold">
        What are you looking for?
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-8">
        {sections.map((section, i) => {
          return <SectionCard key={i} section={section} />;
        })}
      </div>
    </main>
  );
}
