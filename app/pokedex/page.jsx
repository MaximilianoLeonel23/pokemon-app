import PokedexList from "../../components/PokedexList";

const PokedexPage = () => {
  return (
    <main className="container mx-auto px-4">
      <h1 className="font-bold text-lg text-gray-800">Pokedex</h1>
      <PokedexList />
    </main>
  );
};

export default PokedexPage;
