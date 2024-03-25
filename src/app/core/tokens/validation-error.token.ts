import { InjectionToken } from '@angular/core'

import { CustomValidationError } from '@core/models'

type errorMessageFn = (options: { fieldName: string; value: unknown; requiredLength?: number; min?: number }) => string

const validationErrors: Record<string, errorMessageFn> = {
  required: ({ fieldName }) => `${fieldName} is required`,
  email: ({ fieldName }) => `${fieldName} must be in the format name@example.com`,
  pattern: ({ fieldName }) => `${fieldName} has invalid format`,
  minlength: ({ fieldName, requiredLength }) => `${fieldName} is less than ${requiredLength} characters long`,
  min: ({ fieldName, min }) => `${fieldName} must be greater than or equal to ${min}`,
  [CustomValidationError.YOUTUBE_URL]: ({ fieldName }) => `${fieldName} is not valid Youtube link`,
  [CustomValidationError.NATURAL_NUMBER]: ({ fieldName }) => `${fieldName} must be a whole number`,
}

export const VALIDATION_ERRORS = new InjectionToken('VALIDATION_ERRORS', {
  providedIn: 'root',
  factory: () => validationErrors,
})
