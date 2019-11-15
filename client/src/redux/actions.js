import axios from "axios";

export async function getReposByUser(user) {
  const resp = await axios.get(`/gitapi/getrepos/${user}`);
  return {
    type: "SET_REPOS",
    repos: resp.data.repositories,
    error: resp.data.error
  };
}

export async function getReposByKeyword(keyword, searchLanguage) {
  const resp = await axios.get(
    `gitapi/searchrepos/q=${keyword}+language:${searchLanguage}&sort=stars&order=desc`
  );
  return {
    type: "SET_REPOS",
    repos: resp.data.repositories,
    error: resp.data.error
  };
}

export async function getReposByUserAndKeyword(user, keyword) {
  const resp = await axios.get(
    `gitapi/searchrepos/q=${keyword}+user:${user}&sort=stars&order=desc`
  );
  return {
    type: "SET_REPOS",
    repos: resp.data.repositories,
    error: resp.data.error
  };
}
