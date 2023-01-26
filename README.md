# date-encrypt
Encrypt and Decrypt Date

[![date-encrypt](https://img.shields.io/badge/validator-plain_javascript-green)](https://github.com/uzrnem/date-encrypt)
[![npm version](https://img.shields.io/npm/v/date-encrypt.svg)](https://www.npmjs.com/package/date-encrypt)
[![Bundle Zip Size](https://img.shields.io/bundlephobia/minzip/date-encrypt)](https://www.npmjs.com/package/date-encrypt)
[![Bundle Size](https://img.shields.io/bundlephobia/min/date-encrypt)](https://www.npmjs.com/package/date-encrypt)


## Getting Started

### Installation

```sh
npm install date-encrypt
```

### Usage
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