import Link from "next/link";

export default function Home() {
  const sections = ["type", "pokedex", "abilities"];

  return (
    <main className="container mx-auto px-4">
      <h1>Página de inicio</h1>
      <ul>
        {sections.map((section, i) => {
          return (
            <li key={i}>
              <Link href={`/${section}`}>{section}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
