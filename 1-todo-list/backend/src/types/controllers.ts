import { Request, Response, NextFunction } from 'express';

export type TodoController = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;
