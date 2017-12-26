/**
 * Created by shino on 2017/12/19.
 */


import Validator from './Validator'

class HalfSymbolValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `「${iniError.c01} 」「${iniError.c02}」「${iniError.c03}」「${iniError.c05}」で入力してください。`
    this.has = options.has || false  // デフォルト: 半角記号を含んでいないこと
    this.regex = new RegExp(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g)
  }

  // 半角記号を含む
  validate(text) {
    return this.regex.test(text) === this.has
  }
}

export default HalfSymbolValidator
