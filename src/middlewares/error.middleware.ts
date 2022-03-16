import { Response, Request, NextFunction } from "express";
import { ErrorExpection } from "../helpers";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new ErrorExpection(`Not Found - ${req.originalUrl}`, "ERROR - RESOURCE NOT FOUND", 404);
  next(error);
};

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log({ err, in: "final" });
  const { message, httpCode, code_message } = err as any;
  const statusCode = httpCode || res.statusCode || 500;

  res.status(statusCode).json({
    error: {
      message: message || "Internal Server Error",
      code: code_message || "ERROR - SERVER ERROR",
    },
  });
};

export { notFound, errorHandler };
