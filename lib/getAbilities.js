export const getAbilities = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/ability/");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const getAbility = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  return data;
};
