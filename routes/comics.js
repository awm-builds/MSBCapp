var express = require('express');
var router = express.Router();
const comicsCtlr = require('../controllers/comics');

/* GET users listing. */
router.get('/', comicsCtlr.index);
router.get('/search', comicsCtlr.searchApi);

module.exports = router;