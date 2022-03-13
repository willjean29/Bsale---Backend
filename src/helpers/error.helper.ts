class ErrorExpection extends Error {
  httpCode: number;
  code_message: string;
  constructor(message: string, code_message: string, httpCode: number) {
    super(message);
    this.httpCode = httpCode;
    this.code_message = code_message;
  }
}

export default ErrorExpection;
