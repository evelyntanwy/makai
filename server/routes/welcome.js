const express = require("express");

const router = express.Router();

// GET /api/v1/welcome/
router.get("/", (req, res) => {
  try {
    res.json({ statement: "What is your name?" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
