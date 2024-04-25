var express = require('express');
var router = express.Router();
const comicsCtrl = require('../controllers/comics');

/* GET users listing. */
router.get('/', comicsCtrl.index);
router.get('/search', comicsCtrl.searchApi);

router.post('/', comicsCtrl.create);

router.get('/:id', comicsCtrl.show);

module.exports = router;
