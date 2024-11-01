const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // GET route code here

    const sqlText = `
    SELECT * FROM "booking;"
    `

    pool.query(sqlText).then((results) => res.send(results.rows)).catch((err) => {
        console.error('Error Making GET Rating Req', err)
        res.sendStatus(500);
    })


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});


// DELETE



module.exports = router;
