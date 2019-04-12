const timetoreadable = require('./index')

var curDate = new Date()
console.log("From current date:", curDate)
console.log(timetoreadable.SimpleBeautify(curDate))
console.log(timetoreadable.Beautify(curDate))

var YYYYMMDD = timetoreadable.ConvertYYYYMMDD("20190402")
console.log("From 20190402:", YYYYMMDD)
console.log(timetoreadable.SimpleBeautify(YYYYMMDD))
console.log(timetoreadable.Beautify(YYYYMMDD))