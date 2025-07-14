import { Response } from 'express';

export type SuccessResponseHandler = <T>(
	res: Response,
	data: T,
	message?: string,
	statusCode?: number,
) => Response;
