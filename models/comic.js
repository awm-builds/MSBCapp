 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

const comicSchema = new Schema({
    title: String,
    apiId: {
        type: String,
        required: true
    },
    description: String,
    isbn: String,
    images: [],
    dates: Date,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Comic', comicSchema);
