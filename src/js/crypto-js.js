// import CryptoJS from "crypto-js";

// const CRYPTOJSKEY= "1285698461477152";
// // 加密
// const encrypt = (plaintText)=> {
//     var plaintText = plaintText;
//     var options = {
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7,
//         iv:'zwlygs5230maomao'
//     };
//     var key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY);
//     var encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
//     var encryptedBase64Str = encryptedData.toString();
//     return encryptedBase64Str;
// };
// console.log('---crypto-js---',encrypt('{"sfzmhm":"130183199001032271","fzjg":"","key":1587695766934}'))
// console.log(encrypt(JSON.stringify({sfzmhm: "130183199001032271", fzjg: "", key: 1587696463078})))

const CryptoJS = require("crypto-js"); //引用AES源码js

const key = CryptoJS.enc.Utf8.parse("1285698461477152"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse("zwlygs5230maomao"); //十六位十六进制数作为密钥偏移量

//解密方法
function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

// var key = CryptoJS.enc.Utf8.parse('1285698461477152');
// var iv = CryptoJS.enc.Utf8.parse('zwlygs5230maomao');
// var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
// var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
// var decrypt = CryptoJS.AES.decrypt(srcs, key, {
//   iv: iv,
//   mode: CryptoJS.mode.CBC,
//   padding: CryptoJS.pad.Pkcs7
// });
// var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
// return decryptedStr.toString();

//加密方法
function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}


// plaintText = CryptoJS.enc.Utf8.parse(plaintText);
// var iv = CryptoJS.enc.Utf8.parse('zwlygs5230maomao');
// var key = CryptoJS.enc.Utf8.parse('1285698461477152');
// var options = {
//   mode: CryptoJS.mode.CBC,
//   padding: CryptoJS.pad.Pkcs7,
//   iv
// };
// var encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
// return encryptedData.toString();



let val = Encrypt(
  '{"sfzmhm":"130183199001032271","fzjg":"","key":1587695766934}'
);
// let deVal = Decrypt(val);
// console.log("---encode", val);
// console.log("---decode", deVal);
