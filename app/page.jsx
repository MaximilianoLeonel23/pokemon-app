import Link from "next/link";

export default function Home() {
  const sections = ["type", "pokedex"];

  return (
    <main className="container mx-auto px-4">
      <h1>Página de inicio</h1>
      {sections.map((section, i) => {
        return (
          <Link href={`/${section}`} key={i}>
            {section}
          </Link>
        );
      })}
    </main>
  );
}
