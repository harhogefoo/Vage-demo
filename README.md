# Vage
Simple validator

# Usage
```index.js
// validate input text's value if focus out.
$('.validate').blur((e) => {
  const value = $(`input[name=${e.target.name}]`).val()
  const vage = new Vage()
  vage.maxLength(4)
    .minLength(1, {message: 'custom message'})
  if (!vage.validate(value)) {
    console.log(vage.messages)
  }
})
```

