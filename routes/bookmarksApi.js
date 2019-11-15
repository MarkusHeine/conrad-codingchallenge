const router = require("express").Router();
const mongoose = require("mongoose");
const Bookmark = require("../model/Bookmark");

/** 
 * connects to mongoose database
 * @param {string} DB_CONNECT Login Data for the database
 */

mongoose.connect(
  process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("connected to db")
);
mongoose.set("useFindAndModify", false);

/**
 * Adds a new bookmark in the database
 * @param {string} req.body.type Type of the Bookmark "repos" or "user"
 * @param {string} req.body.userName Username to put in Database provided by the Github Api
 * @param {number} req.body.userId UserId provided by the Github Api
 * @param {string} req.body.repoName Name of the repository provided by the Github Api
 * @param {number} req.body.repoId Id of the repository provided by the Github Api
 */

router.post("/addbookmark", async (req, res) => {
  const newBookmark = new Bookmark({
    type: req.body.type,
    user_name: req.body.userName,
    user_id: req.body.userId,
    repo_name: req.body.repoName,
    repo_id: req.body.repoId
  });

  try {
    await newBookmark.save();
    const resp = await Bookmark.find();
    res.json({
      error: false,
      bookmarks: resp
    });
  } catch (err) {
    res.json({
      error: true,
      errormsg: err
    });
  }
});

/**
 * Deletes a bookmarkt in the datase
 * @param {number} req.params.id The Id of the object in the database
 */

router.delete("/deletebookmark/:id", async (req, res) => {
  try {
    await Bookmark.deleteOne({
      _id: req.params.id
    })
    const resp = await Bookmark.find();
    res.json({
      error: false,
      bookmarks: resp
    });
  } catch (err) {
    res.json({
      error: true,
      errormsg: err
    });
  }
})

module.exports = router;