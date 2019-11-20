export default function reducer(state = {}, action) {
  if (action.type === "SET_REPOS") {
    state = {
      ...state,
      repos: action.repos
    };
  }

  if (action.type === "GET_BOOKMARKS") {
    state = {
      ...state,
      bookmarks: action.bookmarks
    };
  }

  return state;
}
