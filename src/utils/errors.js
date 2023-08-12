export class ExtendableError extends Error {}

export class ApiRequestError extends ExtendableError {
  constructor(message = 'Api Request Error', args) {
    super(message);
    this.code = 'EAPIREQUEST';
    this.callArgs = args;
  }
}

export class NotFoundError extends ExtendableError {
  constructor(message = 'Not found') {
    super(message);
    this.code = 'ENOTFOUND';
  }
}
