/**
 * Created by shino on 2017/12/19.
 */

class MaxNumValidator extends Validator {
  constructor(options) {
    super(options)
    this.max = options.max || 100
    this.message = options.message || `最大値${options.max}を超えています`
  }

  valid(text) {
    return this.max < Number(text)
  }
}
