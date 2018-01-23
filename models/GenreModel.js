var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: {
        required: true,
        type: String,
        max: 100,
        min: 3,
        enum: [
            "fiction",
            "non-fiction",
            "romance",
            "military history",
            "Fantasy",
            "Science Fiction",
            "French Poetry"
        ]
    }
});
GenreSchema.virtual('url').get(() => {
    return "/catalog/genre/" + this._id;
})

module.exports = mongoose.model('Genre', GenreSchema);