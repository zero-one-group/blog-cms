import { DataError } from 'objection';

export function throwDataError(message: string): never {
  // @ts-expect-error: the signature for DataError is wrong.
  const error = new DataError({ nativeError: message });
  error.message = message;
  throw error;
}

export function throwAuthenticationError(): never {
  const message = 'Authentication failed!';
  const error = new Error(message);
  error.name = 'AuthenticationError';
  error.message = message;
  throw error;
}

export function throwAuthorizationError(errMessage?: string): never {
  const message = errMessage ?? 'Authorisation failed!';
  const error = new Error(message);
  error.name = 'AuthorisationError';
  error.message = message;
  throw error;
}
