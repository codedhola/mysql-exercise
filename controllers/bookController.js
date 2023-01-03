const getBooks = async(req, res, next) => {

    res.status(200).json({
        status: "Success",
        data: "Loading"
    })
}

module.exports = {
    getBooks
}