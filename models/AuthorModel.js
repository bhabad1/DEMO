var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    firstName: { type: String, required: true, max: 100 },
    familyName: { type: String, required: true, max: 100 },
    dateOfBirth: Date,
    dateOfDeath: Date
});

AuthorSchema.virtual('name').get(() => { return this.firstName + " " + this.familyName });
AuthorSchema.virtual('url').get(() => { return "/catalog/author/" + this._id });

module.exports = mongoose.model('Author', AuthorSchema);