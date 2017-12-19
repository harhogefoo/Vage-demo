/**
 * Created by shino on 2017/12/19.
 */

class Validator {
  constructor(options) {
    this.const = {
      c01: '半角数字',
      c02: '半角英字',
      c03: '半角記号',
      c04: '半角カナ',
      c05: '全角文字',
      z01: '全角カタカナ',
      z02: 'メールアドレス',
      pw: 'パスワード',
    }
    this.message = options.message || 'invalid'
  }

  validate() {

  }
}
