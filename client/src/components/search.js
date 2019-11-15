import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getReposByKeyword } from "../redux/actions";

import "./search.css";

function Search() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const searchHandler = e => {
    e.preventDefault();
    (async () => {
      dispatch(getReposByKeyword(keyword));
    })();
  };

  return (
    <div className="search-wrapper">
      <div className="search-input">
        {" "}
        <input
          name="repo"
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>search</button>
    </div>
  );
}

export default Search;
