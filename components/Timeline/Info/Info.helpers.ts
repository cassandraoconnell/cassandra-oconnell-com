export const formatDate = (ms: number) => {
  const date = new Date(ms);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];

  return `${month} ${date.getFullYear()}`;
};
