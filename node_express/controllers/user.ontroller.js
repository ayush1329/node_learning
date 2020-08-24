

exports.userDetail = async function (req, res) {
    try {
		let result = {
            'name': 'Ayush',
            'title': 'Software Enginer',
            'D.O.B': '15-02-1996'
        };
		return res.status(201).json({
			message: result,
			status: true
		})
	} catch (err) {
		return res.status(400).json({
			message: err,
			status: false
		})
	}
}