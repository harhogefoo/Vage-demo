/**
 * Created by shino on 2017/12/19.
 */

import Validator from './Validator'

class TelValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `不正な電話番号の形式です。`
    this.regex = new RegExp(/^\+?[\d-]+[\d]$/)
  }

  valid(text) {
    return !text.match(this.regex)
  }
}

export default TelValidator
