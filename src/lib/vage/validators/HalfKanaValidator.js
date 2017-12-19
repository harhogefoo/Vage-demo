/**
 * Created by shino on 2017/12/19.
 */


class HalfKanaValidator extends Validator {
  constructor(options) {
    super(options)// 半角カナ
    this.message = options.message || `「${iniError.c01} 」「${iniError.c02}」「${iniError.c03}」「${iniError.c05}」で入力してください。`
    this.has = options.has || false  // デフォルト: 半角カナを含んでいないこと
    this.regex = new RegExp(/[ｱ-ﾝ]/g)
  }

  valid(text) {
    return this.regex.test(text) === this.has
  }
}
