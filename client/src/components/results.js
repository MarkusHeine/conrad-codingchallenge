import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewBookmark } from "../redux/actions";

import "./css/results.css";

function Results() {
  const dispatch = useDispatch();

  const repos = useSelector(state => {
    return state.repos;
  });

  const bookmark = bookmarkData => {
    dispatch(addNewBookmark(bookmarkData));
  };

  let elem;

  if (repos) {
    if (repos.length === 0) {
      elem = <div>no repos to show</div>;
    } else {
      elem = (
        <span>
          {repos.map(item => (
            <div key={item.id} className="result-card">
              <div className="avatar">
                <img src={item.owner.avatar_url} alt="user avatar" />
              </div>
              <div className="info">
                <div className="result-card-headline">
                  <span className="info-fullname">{item.full_name}</span>
                  <span
                    className="link info-bookmark"
                    onClick={() =>
                      bookmark({
                        ownerName: item.owner.login,
                        ownerId: item.owner.id,
                        repoName: item.name,
                        repoId: item.id
                      })
                    }
                  >
                    bookmark
                  </span>
                </div>
                <span className="info-name">{item.owner.login}</span>
                <span className="info-description">{item.description}</span>
              </div>
            </div>
          ))}
        </span>
      );
    }
  } else {
    elem = <div>no repos to show</div>;
  }

  return <div className="results-wrapper">{elem}</div>;
}

export default Results;
