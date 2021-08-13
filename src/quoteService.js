const URL = "https://api.quotable.io";

export const getRandomQuote = async () => {
  return await (await fetch(`${URL}/random`)).json();
};
export const getAllQuotesByAuthor = async (author) => {
  return await (await fetch(`${URL}/quotes?author=${author}`)).json();
};
