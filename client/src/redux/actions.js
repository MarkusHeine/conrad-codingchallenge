import axios from "axios";

export async function getReposByKeyword(keyword) {
  const resp = await axios.get(`gitapi/searchrepos/q=${keyword}`);
  return {
    type: "SET_REPOS",
    repos: resp.data.repositories
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
