const router = require("express").Router();
const axios = require("axios");

const endPoint = "https://api.github.com/users";

// Get Repos from User

router.get("/getrepos/:user", async (req, res) => {
    try {
        const resp = await axios.get(
            `${endPoint}/${req.params.user}/repos`
        );
        const repos = JSON.stringify(resp.data);
        res.json({
            error: false,
            repositories: JSON.parse(repos)
        });
    } catch (err) {
        res.json({
            error: true,
            errormsg: err
        })
    }
})

module.exports = router;