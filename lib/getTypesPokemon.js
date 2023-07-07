export const getTypesPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type/");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const getTypesProps = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  return data;
};
