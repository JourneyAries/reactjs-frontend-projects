import { SuccessResponseHandler } from '../types';
export class HttpSuccess<T> {
	constructor(
		public statusCode: number,
		public data: T,
		public message?: string,
	) {}
}

export const sendSuccess: SuccessResponseHandler = (
	res,
	data,
	message,
	statusCode,
) => {
	const code = statusCode ?? 200;
	const msg = message || 'Success';
	const response = new HttpSuccess(code, data, msg);
	return res.status(code).json(response);
};
