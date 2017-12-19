/**
 * Created by shino on 2017/12/19.
 */

class HalfNumValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || '「半角数字」で入力してください。'
    this.has = options.has || false // デフォルト: 半角数字を含んでいないこと
    this.regex = new RegExp(/^\+?[\d-]+[\d]$/)
  }

  valid(text) {
    return this.regex.test(text)
  }
}
