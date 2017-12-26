import Validator from './Validator'

class SelectBoxValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `選択して下さい。`
  }

  // 半角記号を含む
  validate(text) {
    return text !== '0'
  }
}

export default SelectBoxValidator
