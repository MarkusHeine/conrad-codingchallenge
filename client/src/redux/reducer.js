export default function reducer(state = {}, action) {
  if (action.type === "SET_REPOS") {
    state = {
      ...state,
      repos: action.repos,
      error: action.error
    };
  }

  return state;
}
