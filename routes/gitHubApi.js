const router = require("express").Router();
const axios = require("axios");

const endPoint = "https://api.github.com/";

// Get Repos from User by name
router.get("/getrepos/:owner", async (req, res) => {
    try {
        const resp = await axios.get(
            `${endPoint}users/${req.params.owner}/repos`
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

// Get repos via search term
// example querystring: q=tetris&language:javascript&sort=stars&order=desc
router.get("/searchrepos/:query", async (req, res) => {
    try {
        const resp = await axios.get(
            `${endPoint}search/repositories?${req.params.query}`
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

// Get repo from owner
router.get("/getsinglerepo/:owner/:repo", async (req, res) => {
    try {
        const resp = await axios.get(
            `${endPoint}repos/${req.params.owner}/${req.params.repo}`
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