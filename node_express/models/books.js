const mongoose = require('mongoose');

const bookShema = mongoose.Schema({
    bookId: {
        type: Number,
        require: true
    },
    bookName: {
        type: String,
        require: true
    },
    bookTitle: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('bookModel', bookShema);