import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "../redux/actions";

import "./css/bookmarks.css";

function Bookmarks() {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => {
    return state.bookmarks;
  });

  console.log("bookmarks", bookmarks);

  const removeBookmark = dbId => {
    console.log(`remove bookmark with id ${dbId}`);
  };

  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  return (
    <div className="bookmarks-wrapper">
      {bookmarks &&
        bookmarks.map(bookmark => (
          <div key={bookmark._id} className="bookmark-card">
            <p>
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
