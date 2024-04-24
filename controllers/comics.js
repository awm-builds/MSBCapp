const Comic = require('../models/comic');

module.exports = {
    searchApi,
    index,
    create,
    show
};

const BASEURL = 'https://gateway.marvel.com/v1/public';

async function searchApi(req, res) {
    const data = await fetch(`${BASEURL}/comics?title=${req.query.search}&limit=100&ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`).then(res=>res.json());
    const comicData = data.data.results;
    // console.log(comicData[0].images);
    console.log(typeof (comicData[45].dates[1].date));
    res.render('comics/index', { comicData });
}

async function index(req, res) {
    res.render('comics/index', {comicData: []});
}

async function create(req, res) {
    let date = new Date(req.body.dates);
    req.body.date = date;
    let comic = await Comic.findOne({ apiId: req.body.apiId });
    if (!comic) {
        comic = await Comic.create(req.body);
        await comic.save();
    }
    res.redirect(`/comics/${comic._id}`);
}
 
async function show(req, res) {
    let comic = await Comic.findOne({ _id: req.params.id });
    res.render('comics/show', {comic});
 }