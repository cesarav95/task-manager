import { NextFunction, Request, Response } from 'express';
import { validationResult, body } from 'express-validator';

export const taskValidator = [
  body('title').exists().notEmpty(),
  body('description').exists().notEmpty(),
  body('status').exists().isIn(['completed', 'pendding'])
];

export const handlerTaskValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error: any) {
    res.status(403).json({ errors: error.array() });
  }
};