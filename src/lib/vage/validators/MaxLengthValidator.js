/**
 * Created by shino on 2017/12/19.
 */

import Validator from './Validator'

class MaxLengthValidator extends Validator {
  constructor(options) {
    super(options)
    this.maxLength = options.maxLength || 100
    this.message = options.message || `${options.maxLength}文字以内で入力して下さい。`
  }

  validate(text) {
    return text.length <= this.maxLength
  }
}

export  default MaxLengthValidator
