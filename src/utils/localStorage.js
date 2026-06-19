export const saveTransactions = (t) =>
  localStorage.setItem("transactions", JSON.stringify(t));
export const getTransactions = () =>
  JSON.parse(localStorage.getItem("transactions")) || [];
