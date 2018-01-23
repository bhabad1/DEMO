var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
    book: { type: Schema.ObjectId, ref: "Book", required: true },
    imprint: { type: String, required: true },
    status: { type: String, required: true, default: "Maintenance", enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'] },
    dueBack: { type: Date, default: Date.now }
});
BookInstanceSchema.virtual("url").get(function() {
    return "/catalog/bookinstance/" + this._id;
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);