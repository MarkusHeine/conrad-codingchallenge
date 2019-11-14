const router = require("express").Router();
const mongoose = require("mongoose");
const Bookmark = require("../model/Bookmark");

mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("connected to db")
);
mongoose.set("useFindAndModify", false);

router.post("/addbookmark", async (req, res) => {
    console.log("req.body:", req.body.repoName);
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
        res.json(resp)
    } catch (err) {
        res.json({
            error: true,
            errormsg: err
        });
    }
});

module.exports = router;