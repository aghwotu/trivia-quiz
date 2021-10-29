export const BASE_URL = 'https://opentdb.com/';

export const API_GET_TRIVIA = {
  REQUEST: (noOfRecords, category) => `${BASE_URL}api.php?amount=${noOfRecords}&category=${category}`,
};
export const API_RETRIEVE_SESSION_TOKEN = `${BASE_URL}api_token.php?command=request`;
export const API_RESET_SESSION_TOKEN = {
  TOKEN: (token) => `${BASE_URL}api_token.php?command=reset&token=${token}`,
};

export const API_GET_ALL_CATEGORIES = `${BASE_URL}api_category.php`;
