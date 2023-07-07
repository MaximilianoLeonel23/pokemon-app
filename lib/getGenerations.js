export const getRegions = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/region");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = res.json();
  return data;
};

export const getSingleRegion = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/region/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = res.json();
  return data;
};

export const getRegionPokedex = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = res.json();
  return data;
};
