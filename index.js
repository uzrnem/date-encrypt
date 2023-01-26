const date_arr = ["C", "J", "L", "8", "5", "B", "R", "0", "D", "Z", "F", "Y", "M", "1", "W", "T", "9", "O", "Q", "G", "S", "A", "K", "V", "U", "P", "4", "X", "6", "7", "H"];
const hour_arr = ["E", "H", "J", "B", "N", "D", "F", "A", "R", "U", "P", "M", "C", "T", "Y", "Z", "O", "S", "W", "Q", "K", "V", "L", "X"];
const minsec_arr = ["Y", "g", "v", "b", "U", "F", "z", "V", "x", "e", "w", "3", "L", "Z", "O", "9", "d", "h", "D", "6", "1", "p", "r", "t", "X", "P", "R", "C", "c", "5", "q", "G", "K", "u", "0", "n", "T", "o", "a", "k", "7", "2", "H", "4", "B", "Q", "M", "S", "E", "m", "N", "8", "A", "y", "j", "J", "i", "s", "W", "f"];

exports.encryptFullDate = function(date) {
  var fy = date.getFullYear();
  var yr1 = minsec_arr[parseInt(fy/60)];
  var yr2 = minsec_arr[fy%60];
  var mt = date_arr[date.getMonth()];
  var dt = date_arr[date.getDate()];
  var hr = hour_arr[date.getHours()];
  var mn = minsec_arr[date.getMinutes()];
  var sc = minsec_arr[date.getSeconds()];
  return `${yr1}${yr2}${mt}${dt}${hr}${mn}${sc}`;
}

exports.decryptFullDate = function(str) {
  return new Date(
    minsec_arr.indexOf(str.charAt(0))*60 +
    minsec_arr.indexOf(str.charAt(1)),
    date_arr.indexOf(str.charAt(2)),
    date_arr.indexOf(str.charAt(3)),
    hour_arr.indexOf(str.charAt(4)),
    minsec_arr.indexOf(str.charAt(5)),
    minsec_arr.indexOf(str.charAt(6))
  )
}

exports.encryptDate = function(date) {
  var dt = date_arr[date.getDate()];
  var hr = hour_arr[date.getHours()];
  var mn = minsec_arr[date.getMinutes()];
  var sc = minsec_arr[date.getSeconds()];
  return `${dt}${hr}${mn}${sc}`;
}

exports.decryptDate = function(str) {
  var cdt = new Date()

  return new Date(
    cdt.getFullYear(),
    cdt.getMonth(),
    date_arr.indexOf(str.charAt(0)),
    hour_arr.indexOf(str.charAt(1)),
    minsec_arr.indexOf(str.charAt(2)),
    minsec_arr.indexOf(str.charAt(3))
  )
}