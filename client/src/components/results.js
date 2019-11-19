import React from "react";
import { useSelector } from "react-redux";

import "./results.css";

function Results() {
  const repos = useSelector(state => {
    return state.repos;
  });

  const bookmark = id => {
    console.log(`I want to bookmark ${id}`);
  };

  let elem;

  if (repos) {
    if (repos.items.length === 0) {
      elem = <div>no repos</div>;
    } else {
      elem = (
        <span>
          {repos.items.map(item => (
            <div key={item.id} className="result-card">
              <div className="avatar">
                <img src={item.owner.avatar_url} alt="user avatar" />
              </div>
              <div className="info">
                <span className="info-fullname">{item.full_name}</span>
                <span className="info-name">{item.owner.login}</span>
                <span className="info-description">{item.description}</span>
                <span
                  className="link info-bookmark"
                  onClick={() => bookmark(item.id)}
                >
                  bookmark
                </span>
              </div>
            </div>
          ))}
        </span>
      );
    }
  } else {
    elem = <div>no repos</div>;
  }

  return <div className="results-wrapper">{elem}</div>;
}

export default Results;
