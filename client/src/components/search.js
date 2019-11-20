import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getReposByKeyword } from "../redux/actions";

import "./css/search.css";

function Search() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const searchHandler = e => {
    e.preventDefault();
    (async () => {
      dispatch(getReposByKeyword(keyword));
    })();
  };

  const keyPress = e => {
    if (e.key === "Enter") {
      setKeyword(e.target.value);
      (async () => {
        dispatch(getReposByKeyword(keyword));
      })();
    }
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        name="repo"
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onKeyPress={e => keyPress(e)}
        placeholder="search"
      />

      <button className="search-button" onClick={searchHandler}>
        search
      </button>
    </div>
  );
}

export default Search;
