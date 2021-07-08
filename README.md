
# timetoreadable

  

Converts time formats to humanly readable formats

  
  

# Installing

  

Using NPM

  

npm i timetoreadable


## Example Usage

const timeToReadable = require("timetoreadable)  
timeToReadable.Beautify(new Date()) //12:00 AM  
  

## Methods

Beautify(timestamp)  
//Example returns  
//If timestamp is older than a year -> January 1, 1999  
//If timestamp older than a month or older than a week -> January 1  
//If timestamp from last week -> Last week, Monday  
//If timestamp is from past week (Except for yesterday) -> Monday at 12:00 AM  
//If timestamp was yesterday -> Yesterday at 12:00 AM  
//If today -> 12:00 AM  

Shorten(timestamp)  
//Example returns  
//5 mins ago  
//Thu 3:26px  
//Jun 18  

DateMonthYear(timestamp)
//Converts timestamp to date month, year. Ex: "October 1, 2019"  

ConvertYYYYMMDD(YYYYMMDD)  
//Converts YYYYMMDD string to Javascript date object and returns.  
//For example,  "20191001", represents 2019 October 1st. Year month date.  

getAMPM(timestamp)  
//Converts timestamp to 12 hour time then returns.  
//Example return: "7:02 PM"  

getMonth(timestamp)  
//Returns month from timestamp.  
//Example return: "October"  

getWeekDay(timestamp)  
//Returns week day from timestamp.  
//Example return: "Tuesday"  

getMonth(timestamp)  
//Returns month from timestamp.  
//Example return: "October"  

DateMonthYear(timestamp)  
//Example return, "October 1, 2019"  