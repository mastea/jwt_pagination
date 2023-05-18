const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const blogSchema = new mongoose.Schema({
    author: String,
    date: Date,
    title: String,
    content: String
});
blogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('blog', blogSchema);