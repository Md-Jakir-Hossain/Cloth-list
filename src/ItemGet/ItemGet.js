export const GetItem = () => {
  const item = localStorage.getItem("FormData");
  if (item) {
    JSON.parse(item);
  }
  return [];
};
