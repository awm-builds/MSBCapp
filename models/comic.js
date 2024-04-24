 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    
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
