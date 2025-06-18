const errorHandler = (err, req, res, next) => {
    console.error('Error', err.message);

    const statusCode = res.statusCode && res.statusCode!=200 ? res.statusCode : 200;

    res.status(statusCode).json({
        sucess: false,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    }); 
}

module.exports = errorHandler;