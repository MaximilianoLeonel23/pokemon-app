export const formattedDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    newDate
  );
  const year = newDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
};
