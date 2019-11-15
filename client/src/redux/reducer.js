export default function reducer(state = {}, action) {
  if (action.type === "GET_REPOS_BY_USER") {
    state = {
      ...state,
      repos: action.repos,
      error: action.error
    };
  }

  return state;
}
