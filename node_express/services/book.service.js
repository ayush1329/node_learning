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

exports.deleteBook = async (id) => {
    return new Promise((resolve, reject) => {
        let result = bookModel.remove({ _id: id });
        resolve(result);
    })
}

exports.updateBook = async (id, title) => {
    return new Promise((resolve, reject) => {
        let result = bookModel.updateOne({ _id: id }, { $set: { bookTitle: title } });
        resolve(result);
    })
}

exports.saveBooks = async (name, title, id) => {
    return new Promise((resolve, reject) => {
        const book = new bookModel({
            bookId: id,
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