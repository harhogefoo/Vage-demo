import $ from 'jquery'

import Vage from './lib/vage/Vage'

const formType = {
  text: 'text',
  select: 'select',
}

const validationMap = {
  prefectures: {
    formType: formType.select,
    fn: validateSelectBox,
    message: {

    }
  }
}

$(() => {
  for (const name in validationMap) {
    const $elem = getElement(name)
    $elem.blur(() => {
      const value = $elem.val()
      const vage = validationMap[name].fn()
      if (!vage.validate(value)) {
        console.log(vage.messages)
      }
    })
  }

  $('.validate').blur((e) => {
    const value = $(`input[name=${e.target.name}]`).val()
    const vage = new Vage()
    vage.maxLength(4)
      .minLength(1)
      .notBlank()
    if (!vage.validate(value)) {
      console.log(vage.messages)
    }
  })
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

function validateSelectBox(messages) {
  const vage = new Vage()
  return vage.isSelectBoxSelected({ message:'選択して下さい'})
}
