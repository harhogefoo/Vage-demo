import $ from 'jquery'

import Vage from './lib/vage/Vage'

const formType = {
  text: 'text',
  select: 'select',
  radioSameOrDiff: 'radioSameOrDiff',
}

const validationMap = {
  prefectures: {
    formType: formType.select,
    fn: validateSelectBox,
    messages: {

    }
  },
  last_name: {
    formType: formType.text,
    fn: validateName,
    messages: {
      blank: '姓を入力して下さい'
    },
  },
  first_name: {
    formType: formType.text,
    fn: validateName,
    messages: {
      blank: '名を入力して下さい'
    }
  },
  why_diff: {
    radioName: 'type_same_or_diff',
    formType: formType.text,
    fn: validateName,
    messages: {
      blank: '入力して下さい'
    }
  }
}

$(() => {
  for (const name in validationMap) {
    const $elem = getElement(name)
    $elem.blur(() => {
      const shouldValidate = checkRadioValue(name)
      const value = $elem.val()
      if (shouldValidate) {
        const vage = validationMap[name].fn(validationMap[name].messages)
        if (!vage.validate(value)) {
          console.log(vage.messages)
        }
      }
    })
  }
})

function getElement(name) {
  const type = validationMap[name].formType
  switch (type) {
    case formType.select:
      return $(`select[name=${name}]`)
    case formType.text:
      return $(`input[name=${name}]`)
  }
}

function checkRadioValue(name) {
  // radioによるチェック
  const radioName = validationMap[name].radioName
  let shouldValidate = true
  if (typeof radioName !== 'undefined' && shouldNotValidateByRadio(radioName)) {
    console.log(radioName)
    shouldValidate = false
  }
  return shouldValidate
}

// value: 0が選択されていればvalidationをする必要がない
function shouldNotValidateByRadio(radioName) {
  const val = $(`input[name=${radioName}]:checked`).val()
  console.log(val)
  return val === '0'
}

function validateName(messages) {
  return new Vage()
    .maxLength(4)
    .minLength(1)
    .notBlank( {messages: messages.blank} )
}

function validateSelectBox(messages) {
  return new Vage().isSelectBoxSelected({ message:'選択して下さい'})
}
