export const getSinglePokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = res.json();
  return data;
};
