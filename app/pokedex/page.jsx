import PokedexList from "../../components/PokedexList";

const PokedexPage = () => {
  return (
    <main className="container py-4">
      <h1 className="text-3xl text-zinc-700 font-bold mb-4">Pokedex</h1>
      <PokedexList />
    </main>
  );
};

export default PokedexPage;
