import { ValidatorFn, Validators } from '@angular/forms'

import { CustomValidationError } from '@core/models'

const NATURAL_NUMBER_REGEX = new RegExp(/^[0-9]*$/)

export const naturalNumberValidator: ValidatorFn = (control) => {
  const invalid = Boolean(Validators.pattern(NATURAL_NUMBER_REGEX)(control))

  return invalid ? { [CustomValidationError.NATURAL_NUMBER]: true } : null
}
