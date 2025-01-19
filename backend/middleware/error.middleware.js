const errorHandler = (err, req, res, next) => {
  try {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  } catch (error) {
    console.error('Error handler middleware error:', error);
  }
    
  };
  
  module.exports = { errorHandler };
  