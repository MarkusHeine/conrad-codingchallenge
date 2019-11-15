const router = require("express").Router();
const axios = require("axios");

const endPoint = "https://api.github.com/";

/**
 * Search GitHubb Api via a search term
 * example querystring: q=tetris&language:javascript&sort=stars&order=desc
 * @param {string} req.params.query Querystring to search GitHub Api
 */

router.get("/searchrepos/:query", async (req, res) => {
  console.log(req.params.query);
  try {
    const resp = await axios.get(
      `${endPoint}search/repositories?${req.params.query}`
    );
    const repos = JSON.stringify(resp.data);
    res.json({
      repositories: JSON.parse(repos)
    });
  } catch (err) {
    res.json({
      error: true
    });
  }
});

module.exports = router;
