const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).sendFile('projects.html', {root: '.'});
});

module.exports = router;