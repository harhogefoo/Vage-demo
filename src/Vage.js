/**
 * Created by harhogefoo on 2017/12/18.
 */


// バリデーション文字列を定義
const iniError = {
  c01: '半角数字',
  c02: '半角英字',
  c03: '半角記号',
  c04: '半角カナ',
  c05: '全角文字',
  z01: '全角カタカナ',
  z02: 'メールアドレス',
  pw: 'パスワード',
}

class Validator {
  constructor(options) {
    this.message = options.message || 'invalid'
  }
}

class MaxLengthValidator extends Validator {
  constructor(options) {
    super(options)
    this.maxLength = options.maxLength || 100
    this.message = options.message || `${options.maxLength}文字以内で入力して下さい。`
  }

  valid(text) {
    return text.length <= this.maxLength
  }
}

class MinLengthValidator extends Validator {
  constructor(options) {
    super(options)
    this.minLength = options.minLength || 10
    this.message = options.message || `${options.minLength}文字以上で入力して下さい。`
  }

  valid(text) {
    return this.minLength <= text.length
  }
}

class NotBlankValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `入力値が空です`
  }

  valid(text) {
    return text.length !== 0
  }
}

class HalfSymbolValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `「${iniError.c01} 」「${iniError.c02}」「${iniError.c03}」「${iniError.c05}」で入力してください。`
    this.has = options.has || false  // デフォルト: 半角記号を含んでいないこと
    this.regex = new RegExp(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g)
  }

  // 半角記号を含む
  valid(text) {
    return this.regex.test(text) === this.has
  }
}

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

class TelValidator extends Validator {
  constructor(options) {
    super(options)
    this.message = options.message || `不正な電話番号の形式です。`
    this.regex = new RegExp(/^\+?[\d-]+[\d]$/)
  }

  valid(text) {
    return !text.match(this.regex)
  }
}

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
