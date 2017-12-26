// TODO: gt, lt, ge, le
// TODO: tel, email, customPasswordValidator
import MaxLengthValidator from './validators/MaxLengthValidator'
import MinLengthValidator from './validators/MinLengthValidator'
import HalfNumValidator from './validators/HalfNumValidator'
import HalfSymbolValidator from './validators/HalfSymbolValidator'
import HalfKanaValidator from './validators/HalfKanaValidator'
import MaxNumValidator from './validators/MaxNumValidator'
import NotBlankValidator from './validators/NotBlankValidator'
import TelValidator from './validators/TelValidator'
import SelectBoxValidator from './validators/SelectBoxValidator'

class Vage {
  constructor() {
    this.validators = []
    this.messages = []
  }

  maxLength(max, options = {}) {
    this.validators.push(new MaxLengthValidator(Object.assign(
      {maxLength: max},
      options
    )))
    return this
  }

  minLength(min, options = {}) {
    this.validators.push(new MinLengthValidator(Object.assign(
      {minLength: min},
      options
    )))
    return this
  }

  maxNum(max, options = {}) {
    this.validators.push(new MaxNumValidator(Object.assign(
      {max: max},
      options
    )))
    return this
  }

  notBlank(options = {}) {
    this.validators.push(new NotBlankValidator(options))
    return this
  }

  hasNotHalfSymbol(options = {}) {
    this.validators.push(new HalfSymbolValidator(Object.assign(
      {has: false},
      options
    )))
    return this
  }

  hasNotHalfKana(options = {}) {
    this.validators.push(new HalfKanaValidator(Object.assign(
      {has: false},
      options
    )))
    return this
  }

  hasHalfKana(options = {}) {
    this.validators.push(new HalfKanaValidator(Object.assign(
      {has: true},
      options
    )))
    return this
  }

  hasHalfNum(options = {}) {
    this.validators.push(new HalfNumValidator(Object.assign(
      {has: true},
      options
    )))
    return this
  }

  hasNotHalfNum(options = {}) {
    this.validators.push(new HalfNumValidator(Object.assign(
      {has: false},
      options
    )))
    return this
  }

  // TODO: 未完成Validator
  typeOfTel(options = {}) {
    this.validators.push(new TelValidator(options))
    return this
  }

  isSelectBoxSelected(options = {}) {
    this.validators.push(new SelectBoxValidator(options))
    return this
  }

  validate(target) {
    this.validators.forEach((validator) => {
      if (!validator.validate(target)) {
        this.messages.push(validator.message)
      }
    })
    return this.messages.length <= 0
  }
}

export default Vage
