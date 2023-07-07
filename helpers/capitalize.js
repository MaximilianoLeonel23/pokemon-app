export const capitalize = (str) => {
  if (!str) {
    return str;
  }
  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalizedStr;
};
