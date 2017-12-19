/**
 * Created by shino on 2017/12/19.
 */

class MinLengthValidator extends Validator {
  constructor(options) {
    super(options)
    this.minLength = options.minLength || 10
    this.message = options.message || `${options.minLength}文字以上で入力して下さい。`
  }

  validate(text) {
    return this.minLength <= text.length
  }
}
