const router = require("express").Router();

router.get("/test", (req, res) => {
    res.send("node server is running");
});

module.exports = router;