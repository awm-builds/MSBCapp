const Comic = require('../models/comic');

module.exports = {
    searchApi,
    index,
};

const BASEURL = 'https://gateway.marvel.com/v1/public';

async function searchApi(req, res) {
    const data = await fetch(`${BASEURL}/comics?title=${req.query.search}&limit=100&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`).then(res=>res.json());
    const comicData = data.data.results;
    console.log(comicData[0].images);
    res.render('comics/index', { comicData });
}

async function index(req, res) {
    res.render('comics/index', {comicData: []});
}
