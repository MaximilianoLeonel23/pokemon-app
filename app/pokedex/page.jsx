import PokedexList from "../../components/PokedexList";

const PokedexPage = () => {
  return (
    <main className="container">
      <h1 className="text-3xl text-zinc-700 font-bold">Pokedex</h1>
      <PokedexList />
    </main>
  );
};

export default PokedexPage;
