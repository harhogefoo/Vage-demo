import Validator from './Validator'

class TelValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `不正な電話番号の形式です。`
    this.regex = new RegExp(/^\+?[\d-]+[\d]$/)
  }

  validate(text) {
    return !text.match(this.regex)
  }
}

export default TelValidator
