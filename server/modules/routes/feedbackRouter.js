const express = require('express');
const router = express.Router();
const pool = require('../pool');


router.post('/', (req, res) => {
    let feedback = req.body;
    console.log(feedback);
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, feedback)
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY id DESC`;
    pool.query(sqlText)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
})

router.delete('/:id', (req,res) => {
    let id = req.params.id;
    console.log(id);
    const sqlText = `DELETE FROM "feedback" WHERE id=$1`;
    pool.query(sqlText, [id])
    .then( (response) => {
        res.sendStatus(200);
    })
    .catch( (error) => {
        res.sendStatus(500);
    })

})

module.exports = router;