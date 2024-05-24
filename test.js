const dateEncrypt = require('.');

var dt = new Date(
  1992,
  1, //It's Feb
  29,
  23,
  57,
  15
);

var enDf = dateEncrypt.encryptFullDate(dt)
console.log("encryptFullDate: ", enDf) //uLJ7Xs9
console.log("decryptFullDate: ", dateEncrypt.decryptFullDate(enDf)) //1992-02-29T23:57:15.000Z

//Below functions dont work for year and month
var enD = dateEncrypt.encryptDate(dt)
console.log("encryptDate: ", enD) //7Xs9
console.log("decryptDate: ", dateEncrypt.decryptDate(enD)) //2023-05-29T23:57:15.000Z

var enCmpDf = dateEncrypt.encryptCompackDate(dt)
console.log("encryptCmpDate: ", enCmpDf) //s1T
console.log("decryptCmpDate: ", dateEncrypt.decryptCompackDate(enCmpDf)) //1992-02-29
