const timetoreadable = require('./index')

var curDate = new Date()
console.log("From current date:", curDate)
console.log(timetoreadable.SimpleBeautify(curDate))
console.log(timetoreadable.Beautify(curDate))
console.log(timetoreadable.Shorten(curDate))

var YYYYMMDD = timetoreadable.ConvertYYYYMMDD("20190402")
console.log("\nFrom 20190402:", YYYYMMDD)
console.log(timetoreadable.SimpleBeautify(YYYYMMDD))
console.log(timetoreadable.Beautify(YYYYMMDD))

var YYYYMMDD = timetoreadable.ConvertYYYYMMDD("2019/04/02")
console.log("\nFrom 2019/04/02:", YYYYMMDD)
console.log(timetoreadable.SimpleBeautify(YYYYMMDD))
console.log(timetoreadable.Beautify(YYYYMMDD))

var YYYYMMDD = timetoreadable.ConvertYYYYMMDD("2019-04-02")
console.log("\nFrom 2019-04-02:", YYYYMMDD)
console.log(timetoreadable.SimpleBeautify(YYYYMMDD))
console.log(timetoreadable.Beautify(YYYYMMDD))

/* 
OUTPUT: 

From current date: 2019-04-12T15:48:07.666Z
April 12, 2019
10:48 AM

From 20190402: 2019-04-02T05:00:00.000Z
April 2, 2019
April 2

From 2019/04/02: 2019-04-02T05:00:00.000Z
April 2, 2019
April 2

From 2019-04-02: 2019-04-02T05:00:00.000Z
April 2, 2019
April 2
*/