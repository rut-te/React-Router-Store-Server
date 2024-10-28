const express = require('express');
const dal = require('./dal');
const router = express.Router();

router.get('/', async (req, res) => {
    dal.getAll()
        .then((results) => {
            console.log("All books retrieved:", results);
            res.status(200).json(results);
        })
        .catch((err) => {
            console.error("Error retrieving all books:", err);
            res.status(404).json({ error: "An error occurred while retrieving POSTS" });
        });
});

module.exports = router;