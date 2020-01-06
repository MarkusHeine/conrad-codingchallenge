import axios from "axios";

export async function getReposByKeyword(keyword) {
  const resp = await axios.get(`gitapi/searchrepos/q=${keyword}`);
  return {
    type: "SET_REPOS",
    repos: resp.data.items
  };
}

export async function getCalledBookmark(repoId) {
  const resp = await axios.get(`gitapi/getrepobyid/${repoId}`);
  return {
    type: "SET_REPOS",
    repos: [resp.data]
  };
}

export async function getBookmarks() {
  const resp = await axios.get(`bookmarkapi/getbookmarks`);
  return {
    type: "GET_BOOKMARKS",
    bookmarks: resp.data.bookmarks
  };
}

export async function addNewBookmark(bookmarkData) {
  const resp = await axios.post("bookmarkapi/addbookmark", bookmarkData);
  return {
    type: "GET_BOOKMARKS",
    bookmarks: resp.data.bookmarks
  };
}

export async function delteBookmark(dbId) {
  const resp = await axios.delete(`bookmarkapi/deletebookmark/${dbId}`);
  return {
    type: "GET_BOOKMARKS",
    bookmarks: resp.data.bookmarks
  };
}
