const Comic = require('../models/comic');

module.exports = {
  create,
  //delete: deleteReview
};

async function create(req, res) {
  const comic = await Comic.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  comic.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await comic.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/comics/${comic._id}`);
}


/*

async function deleteReview(req, res) {
  const comic = await Comic.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  if (!comic) return res.redirect('/comics');
  comic.reviews.remove(req.params.id);
  await comic.save();
  res.redirect(`/comics/${comic._id}`);
}

*/