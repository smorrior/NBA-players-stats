const express = require('express');
const axios = require('axios');

const router = express.Router();

//get
router.get("/", (req, res) => {
    axios.get("http://data.nba.net/data/10s/prod/v1/2019/players.json")
        .then(response => res.json(response.data.league))
        .catch(err => res.send(err));
})

router.get('/:id/:firstName/:lastName', (req, res) => {
    const id = Number(req.params.id);
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    axios.get("http://data.nba.net/data/10s/prod/v1/2019/players/" + id + "_gamelog.json")
      .then(response => res.json(response.data.league))
      .catch(err => res.send(err));
  });

module.exports = router;