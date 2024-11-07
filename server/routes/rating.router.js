const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here

    const sqlText = `
    SELECT * FROM "booking"
    `

    pool.query(sqlText).then((results) => res.send(results.rows)).catch((err) => {
        console.error('Error Making GET Rating Req', err)
        res.sendStatus(500);
    })

});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('incoming rating data', req.body);
  const {type, user_id, rating, artist_id, venue_id} = req.body;
  let params = [];
  let sqlText;
  switch (type){
    case 'Artist': {
      let sqlText = `
      INSERT INTO "booking" (user_id, rating, artist_id)
        VALUES ($1, $2, $3)
        RETURNING "ratingId";
    `
      let params = [user_id, rating, artist_id];
      pool.query(sqlText, params).then((result) => {

        const ratingId = result.rows;
        console.log('rating ID', ratingId)
    
        res.sendStatus(201)
      }).catch((err) => {
        console.error("Error Inserting Rating", err);
        res.sendStatus(500);
      })
      break;
    } 
    case 'Venue': {
      let sqlText = `
        INSERT INTO "booking" (user_id, rating, venue_id)
          VALUES ($1, $2, $3)
          RETURNING "ratingId";
        `
      let params = [user_id, rating, venue_id];
      pool.query(sqlText, params).then((result) => {

        const ratingId = result.rows;
        console.log('rating ID', ratingId)
    
        res.sendStatus(201)
      }).catch((err) => {
        console.error("Error Inserting Rating", err);
        res.sendStatus(500);
      })
      break;
    }
  }
});

// DELETE

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const {id, artist_id, venue_id, type} = req.body;

  console.log('DELETE ID', id)

  switch (type){
    case 'Artist':{
      const sqlText = `
      DELETE FROM "booking" 
      WHERE user_id = $1 AND artist_id = $2
  `;
    const params = [id, artist_id]
    pool.query(sqlText, params).then().catch((error) => {
      console.error('Error Deleting Rating', error)
      if(!res.headersSent){
        res.status(500).send('Internal Server Error');
      }
     
    });
    };
    case 'Venue': {
      const sqlText = `
    DELETE FROM "booking" 
    WHERE user_id = $1 AND venue_id = $2
    `;
    const params = [id, venue_id]
    pool.query(sqlText, params).then().catch((error) => {
      console.error('Error Deleting Rating', error)
      if(!res.headersSent){
        res.status(500).send('Internal Server Error');
      }
    });
    };
  }
})

router.put('/', rejectUnauthenticated, (req, res) => {
  console.log('incoming rating PUT', req.body)
  const {type, user_id, rating, artist_id, venue_id} = req.body
  let params = [];
  let sqlText;

  switch (type) {
    case 'Artist': {
      sqlText = `
      UPDATE "booking"
      SET rating = $1
      WHERE user_id = $2 AND artist_id = $3
      RETURNING "ratingId";
      `;
      params = [rating, user_id, artist_id];
      break;
    }
    case 'Venue': {
      sqlText = `
      UPDATE "booking"
      SET rating = $1
      WHERE user_id = $2 AND venue_id = $3
      RETURNING "ratingId";
      `;
      params = [rating, user_id, venue_id];
      break;
  }

  }

  pool.query(sqlText, params).then((result) => {
    if(result.rows === 0){
      return res.status(404).send('Rating Not Found');
    }

  }).catch((err) => {
    res.sendStatus(500);
  })

})



module.exports = router;
