# Vage
Simple validator

# Usage
```index.js
// validate input text's value if focus out.
const vage = new Vage()
vage.maxLength(4)
  .minLength(1, {message: 'custom message'})
if (!vage.validate(value)) {
  console.log(vage.messages)
}
```
