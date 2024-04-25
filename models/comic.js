 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const comicSchema = new Schema({
    title: String,
    apiId: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    date: Date,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    reviews: [reviewsSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Comic', comicSchema);
