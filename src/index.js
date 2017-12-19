/**
 * Created by shino on 2017/12/19.
 */

import $ from 'jquery'

import Vage from './lib/vage/Vage'

$(() => {
  $('.validate').blur((e) => {
    const value = $(`input[name=${e.target.name}]`).val()
    const vage = new Vage()
    vage.maxLength(4)
      .minLength(1, {message: 'カスタムメッセージ'})
    if (!vage.validate(value)) {
      console.log(vage.messages)
    }
  })
})
