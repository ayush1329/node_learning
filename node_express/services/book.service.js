const bookModel = require('../models/books');
// const ShortUniqueId = require('short-unique-id');
// const uid = new ShortUniqueId();


exports.getAllBooks = async () => {
    return new Promise((resolve, reject) => {
        let books = bookModel.find();
        resolve(books);
    }, error => {
        reject(error);
    })
}

exports.getBookById = async (id) => {
    return new Promise((resolve, reject) => {
        let book = bookModel.findById(id);
        resolve(book);
    })
}

exports.saveBooks = async (name, title) => {
    return new Promise((resolve, reject) => {
        const book = new bookModel({
            bookId: 74575,
            bookName: name,
            bookTitle: title
        });
        book.save((err, data) => {
            if (err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        })
    });
}