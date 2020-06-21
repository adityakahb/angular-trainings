// routes/search.routes.js

const express = require('express');
const filters = require('./../search-filters.json') || [];
const results = require('./../search-results.json') || [];
const router = express.Router();

// Get Search Results
router.route('/').get((req, res) => {
  res.send({
    status: 200,
    filters,
    results
  });
});

module.exports = router;