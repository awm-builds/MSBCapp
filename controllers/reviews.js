const Comic = require('../models/comic');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const comic = await Comic.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!comic) return res.redirect('/comics');
  comic.reviews.remove(req.params.id);
  await comic.save();
  res.redirect(`/comics/${comic._id}`);
}

async function create(req, res) {
  const comic = await Comic.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

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