

const success = (res, statusCode, data) => {
    res.status(statusCode).json({
        status: "Success",
        data: data
    })
}

const failed = (res, statusCode, data) => {
    console.log(statusCode)
    const status = `${statusCode}`.startsWith(4) ? "Failed" : "Error";
    res.status(statusCode).json({
        status: status,
        data: data
    })
}

module.exports = {
    success,
    failed
}