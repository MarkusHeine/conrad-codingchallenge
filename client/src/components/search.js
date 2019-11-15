import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getReposByUser,
  getReposByKeyword,
  getReposByUserAndKeyword
} from "../redux/actions";

import "./search.css";

function Search() {
  const dispatch = useDispatch();

  const [searchFor, setSearchFor] = useState("user");
  const [user, setUser] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("javascript");

  const searchForHandler = e => {
    setSearchFor(e.target.value);
    setUser("");
    setKeyword("");
    setSearchLanguage("javascript");
  };

  const searchHandler = e => {
    e.preventDefault();
    if (searchFor === "user") {
      (async () => {
        dispatch(getReposByUser(user));
      })();
    } else if (searchFor === "keyword") {
      dispatch(getReposByKeyword(keyword, searchLanguage));
    } else if (searchFor === "userRepos") {
      dispatch(getReposByUserAndKeyword(user, keyword));
    }
  };

  let userSearch = (
    <input
      name="user"
      type="text"
      value={user}
      onChange={e => setUser(e.target.value)}
    />
  );

  let repoSearch = (
    <span>
      <input
        name="repo"
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <select
        value={searchLanguage}
        onChange={e => setSearchLanguage(e.target.value)}
      >
        <option value="all">all</option>
        <option value="javascript">javascript</option>
        <option value="typescript">typescript</option>
        <option value="ruby">ruby</option>
        <option value="c">c</option>
        <option value="c++">c++</option>
      </select>
    </span>
  );

  let elem;

  if (searchFor === "user") {
    elem = userSearch;
  } else if (searchFor === "keyword") {
    elem = repoSearch;
  } else if (searchFor === "userRepos") {
    elem = (
      <span>
        {userSearch}
        {repoSearch}
      </span>
    );
  }

  return (
    <div className="search-wrapper">
      <select value={searchFor} onChange={searchForHandler}>
        <option value="user">user</option>
        <option value="keyword">keyword</option>
        <option value="userRepos">user repos</option>
      </select>
      <div className="search-input">{elem}</div>
      <button onClick={searchHandler}>search</button>
    </div>
  );
}

export default Search;
