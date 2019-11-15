import axios from "axios";

export async function getReposByUser(user) {
  const resp = await axios.get(`/gitapi/getrepos/${user}`);
  console.log(resp);
  return {
    type: "GET_REPOS_BY_USER",
    repos: resp.data.repositories,
    error: resp.data.error
  };
}
