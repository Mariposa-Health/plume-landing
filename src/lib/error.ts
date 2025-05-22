export type AcErrorCode =
  | 'CONTACT_LOOKUP_FAILED'
  | 'FIELD_SAVE_FAILED'
  | 'SUBSCRIBE_FAILED'
  | 'VALIDATION_ERROR'
  | 'UNKNOWN';

export class AppError extends Error {
  constructor(
    public readonly code: AcErrorCode,
    message?: string,
    public readonly meta?: unknown,
  ) {
    super(message ?? code);
  }
}

export const isAppError = (e: unknown): e is AppError =>
  e instanceof AppError;
