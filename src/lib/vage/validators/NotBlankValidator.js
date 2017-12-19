/**
 * Created by shino on 2017/12/19.
 */

class NotBlankValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `入力値が空です`
  }

  valid(text) {
    return text.length !== 0
  }
}
