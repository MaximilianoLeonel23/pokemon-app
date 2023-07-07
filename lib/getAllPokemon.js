export const getAllPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  return data.results;
};
