# date-encrypt
Encrypt and Decrypt Date

```
const dateEncrypt = require('date-encrypt');

var dt = new Date(
  1992,
  1, //It's Feb
  29,
  23,
  57,
  15
);

var enDf = dateEncrypt.encryptFullDate(dt)
console.log("encryptFullDate: ", enDf)
console.log("decryptFullDate: ", dateEncrypt.decryptFullDate(enDf))

//Below functions dont work for year and month
var enD = dateEncrypt.encryptDate(dt)
console.log("encryptDate: ", enD)
console.log("decryptDate: ", dateEncrypt.decryptDate(enD))
```