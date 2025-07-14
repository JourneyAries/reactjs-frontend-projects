import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.error(err);
	const statusCode = err.statusCode ?? 500;
	const message = err.message || 'Internal Server Error';

	res.status(statusCode).json({
		status: 'error',
		statusCode,
		message,
	});
};
