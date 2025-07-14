export class HttpError extends Error {
	constructor(public statusCode: number, message: string) {
		super(message);
		// agar instanceof tetap valid
		Object.setPrototypeOf(this, HttpError.prototype);
	}
}
