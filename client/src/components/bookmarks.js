import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookmarks,
  delteBookmark,
  getCalledBookmark
} from "../redux/actions";

import "./css/bookmarks.css";

function Bookmarks() {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => {
    return state.bookmarks;
  });

  const removeBookmark = dbId => {
    dispatch(delteBookmark(dbId));
  };

  const callBookmark = repoId => {
    dispatch(getCalledBookmark(repoId));
  };

  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  return (
    <div className="bookmarks-wrapper">
      {bookmarks &&
        bookmarks.map(bookmark => (
          <div key={bookmark._id} className="bookmark-card">
            <p className="link" onClick={() => callBookmark(bookmark.repo_id)}>
              {bookmark.user_name} {bookmark.repo_name}
            </p>
            <p className="link" onClick={() => removeBookmark(bookmark._id)}>
              remove
            </p>
          </div>
        ))}
    </div>
  );
}

export default Bookmarks;
