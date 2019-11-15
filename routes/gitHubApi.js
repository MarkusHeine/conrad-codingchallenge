const router = require("express").Router();
const axios = require("axios");

const endPoint = "https://api.github.com/";

/**
 * Get repos from GitHub Api with the owner name
 * @param {string} req.params.owner Username
 */

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

/**
 * Search GitHubb Api via a search term
 * example querystring: q=tetris&language:javascript&sort=stars&order=desc
 * @param {string} req.params.query Querystring to search GitHub Api
 */

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

/**
 * Get a specific Repo from owner
 * @param {string} req.params.owner Owner of the repository
 * @param {string} req.params.repo Reponame
 */

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