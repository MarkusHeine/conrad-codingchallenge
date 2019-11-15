import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getReposByUser } from "../redux/actions";

import "./search.css";

function Search() {
  const dispatch = useDispatch();

  const [searchFor, setSearchFor] = useState("user");
  const [user, setUser] = useState("markusheine");
  const [repo, setRepo] = useState("3d-effect-letters");
  const [searchLanguage, setSearchLanguage] = useState("javascript");

  const searchForHandler = e => {
    setSearchFor(e.target.value);
    setUser("");
    setRepo("");
    setSearchLanguage("javascript");
  };

  const searchHandler = e => {
    e.preventDefault();
    if (searchFor === "user") {
      (async () => {
        // const repos = await axios.get(`/gitapi/getrepos/${user}`);
        // console.log(repos);

        dispatch(getReposByUser(user));
      })();
    } else if (searchFor === "repos") {
      //search for repos
    } else if (searchFor === "userRepos") {
      //search for user repos
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
        value={repo}
        onChange={e => setRepo(e.target.value)}
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
  } else if (searchFor === "repos") {
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
        <option value="repos">repos</option>
        <option value="userRepos">user repos</option>
      </select>
      <div className="search-input">{elem}</div>
      <button onClick={searchHandler}>search</button>
    </div>
  );
}

export default Search;
