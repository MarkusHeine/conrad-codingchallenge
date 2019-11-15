import axios from "axios";

export async function getReposByKeyword(keyword, searchLanguage) {
  const resp = await axios.get(`gitapi/searchrepos/q=${keyword}`);
  return {
    type: "SET_REPOS",
    repos: resp.data.repositories
  };
}
