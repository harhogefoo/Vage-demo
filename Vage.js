/**
 * Created by shino on 2017/12/18.
 */

class Validation {
  constructor(options) {
    this.message = options.message || 'invalid'
  }
}

class MaxLengthValidator extends Validation {
  constructor(options) {
    super(options)
      this.maxLength = options.maxLength || 100
      this.message = options.message || `${options.maxLength}文字以下で入力して下さい`
  }

  valid(text) {
    return text.length <= this.maxLength
  }
}

class MinLengthValidator extends Validation {
  constructor(options) {
    super(options)
      this.minLength = options.minLength || 10
      this.message = options.message || `${options.minLength}文字以上で入力して下さい`
  }

  valid(text) {
    return this.minLength <= text.length
  }
}

class MaxNumValidator extends Validation {
  constructor(options) {
    super(options)
      this.max = options.max || 100
      this.message = options.message || `最大値${options.max}を超えています`
  }

  valid(text) {
    return this.max < Number(text)
  }
}

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

