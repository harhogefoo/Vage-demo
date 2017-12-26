# Vage
Simple validator

# Usage
```index.js
const vage = new Vage()
vage.maxLength(4)
  .minLength(1, {message: 'custom message'})
if (!vage.validate(value)) {
  console.log(vage.messages)
}
```

# Demo
[Vage-demo](https://github.com/harhogefoo/Vage-demo.git)
