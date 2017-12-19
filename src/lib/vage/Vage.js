/**
 * Created by harhogefoo on 2017/12/18.
 */
class Vage {
  constructor() {
    this.validators = []
  }

  maxLength(max, options) {
    this.validators.push(new MaxLengthValidator(Object.assign(
      {maxLength: max},
      options
    )))
    return this
  }

  minLength(min, options) {
    this.validators.push(new MinLengthValidator(Object.assign(
      {minLength: min},
      options
    )))
    return this
  }

  maxNum(max, options) {
    this.validators.push(new MaxNumValidator(Object.assign(
      {max: max},
      options
    )))
    return this
  }

  notBlank(options) {
    this.validators.push(new NotBlankValidator(options))
    return this
  }

  hasNotHalfSymbol(options) {
    this.validators.push(new HalfSymbolValidator(Object.assign(
      {has: false},
      options
    )))
    return this
  }

  hasNotHalfKana(options) {
    this.validators.push(new HalfKanaValidator(Object.assign(
      {has: false},
      options
    )))
    return this
  }

  hasHalfKana(options) {
    this.validators.push(new HalfKanaValidator(Object.assign(
      {has: true},
      options
    )))
    return this
  }

  hasHalfNum(options) {
    this.validators.push(new HalfNumValidator(Object.assign(
      {has: true},
      options
    )))
    return this
  }

  hasNotHalfNum(options) {
    this.validators.push(new HalfNumValidator(Object.assign(
      {has: false},
      options
    )))
    return this
  }

  // TODO: 未完成Validator
  typeOfTel(options) {
    this.validators.push(new TelValidator(options))
    return this
  }

  validate(target) {
    this.messages = []
    this.validators.forEach((validator) => {
      if (!validator.valid(target)) {
        this.messages.push(validator.message)
      }
    })
    return this.messages.length <= 0
  }
}

export default Vage
