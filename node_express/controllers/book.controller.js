const bookService = require('../services/book.service');

exports.getAllbooks = async function (req, res) {
	try {
		let allBooks = await bookService.getAllBooks();
		return res.status(200).json({
			body: allBooks,
			status: true
		})
	} catch (err) {
		return res.status(400).json({
			message: err,
			status: false
		})
	}
}

exports.getBookById = async function (req, res) {
	try {
		let book = await bookService.getBookById(req.params.bookId);
		return res.status(200).json({
			body: book,
			status: true
		})
	} catch (err) {
		return res.status(400).json({
			message: err,
			status: false
		})
	}
}

exports.deleteBookById = async function (req, res) {
	try {
		let book = await bookService.deleteBook(req.params.bookId);
		return res.status(200).json({
			body: book,
			status: true
		})
	} catch (err) {
		return res.status(400).json({
			message: err,
			status: false
		})
	}
}

exports.updateBook = async function (req, res) {
	try {
		let book = await bookService.updateBook(req.params.bookId, req.body.bookTitle);
		return res.status(200).json({
			body: book,
			status: true
		})
	} catch (err) {
		return res.status(400).json({
			message: err,
			status: false
		})
	}
}

exports.addBooks = async (req, res) => {
	try {
		const id = req.body.id;
		const title = req.body.bookTitle;
		const name = req.body.bookName;
		let result = await bookService.saveBooks(title, name, id);
		if (result) {
			return res.status(201).json({
				body: result,
				status: true
			});
		}
	} catch (err) {
		return res.status(400).json({
			message: err,
			status: false
		});
	}
}