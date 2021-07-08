
// © 2019 Jonathon Powell
// jonathonpowell.net
// npm timetoreadable

class TimeToReadable{
	//Converts YYYYMMDD to timestamp
	ConvertYYYYMMDD(dateString){
		dateString = dateString.replace(/-/g, '') //Remove - to literally parse as YYYYMMDD
		dateString = dateString.replace(/\//g, '') //Remove / to literally parse as YYYYMMDD

		var year        = dateString.substring(0,4);
		var month       = dateString.substring(4,6);
		var day         = dateString.substring(6,8);

		return new Date(year, month-1, day);
	}

	//Converts 24 hour time to am or pm
	getAMPM(timestamp) {
		var hours = timestamp.getHours();
		var minutes = timestamp.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	}

	//Retrieve month from timestamp
	getMonth(timestamp){
		var months = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"];
		return months[timestamp.getMonth()];
	}

	//Retrieve weekday from timestamp
	getWeekDay(timestamp){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		return days[timestamp.getDay()];
	}
	
	//Converts timestamp to "Date Month, Year"
	DateMonthYear(timestamp) {
		var dateToReturn = "";
		timestamp = new Date(timestamp);

		dateToReturn += `${this.getMonth(timestamp)} ${timestamp.getDate()}, ${timestamp.getFullYear()}`; //April 12, 2019

		return dateToReturn;
	}
	//Deprecated
	SimpleBeautify(timestamp){
		console.warn("SimpleBeautify() has been deprecated. Please use DateMonthYear() instead.")
		return this.DateMonthYear(timestamp)
	}

	//Beautifies timestamp
	Beautify(timestamp) {
		var dateToReturn = "";
		timestamp = new Date(timestamp);

		let currentDate = new Date();
		
		if(currentDate.getFullYear() > timestamp.getFullYear()){ //If timestamp is older than a year
			dateToReturn += this.getMonth(timestamp) + " " + timestamp.getDate() + ", " + timestamp.getFullYear(); //January 1, 1999
		}
		else{ //Only passes if is same year
			if(currentDate.getMonth() > timestamp.getMonth() || currentDate.getDate() > timestamp.getDate() + 7){ //If timestamp older than a month or older than a week
				dateToReturn += this.getMonth(timestamp) + " " + timestamp.getDate(); //January 1
			}
			else{ //Only passes if is same month
				if(currentDate.getDate() > timestamp.getDate() + 6){ //If timestamp from last week
					dateToReturn += "Last week " + this.getWeekDay(timestamp); //Last week, Monday
				}
				else{ //Only passes if same week
					if(currentDate.getDate() > timestamp.getDate() + 1){ //If timestamp is from past week (Except for yesterday)
						dateToReturn += this.getWeekDay(timestamp) + " at " + this.getAMPM(timestamp); //Monday at 12:00 AM
					}
					else{
					   if(currentDate.getDate()-1 === timestamp.getDate()){ //If timestamp was yesterday
							dateToReturn += "Yesterday at " + this.getAMPM(timestamp); //Yesterday at 12:00 AM
						}
						else{
							//posted today
							dateToReturn += this.getAMPM(timestamp); //12:00 AM
						}
					}
				}
			}
		}

		return dateToReturn;
	}

	//Shortens timestamp : 5 mins ago | Thu 3:26px | Jun 18
	Shorten (timestamp) {
		var dateToReturn = "";
		timestamp = new Date(timestamp);

		let currentDate = new Date();
		
		if(currentDate.getFullYear() > timestamp.getFullYear()){ //If timestamp is older than a year
			dateToReturn += this.getMonth(timestamp).substr(0,3) + " " + timestamp.getDate() + ", " + timestamp.getFullYear(); //Jan 1, 1999
		}
		//Only passes if is same year
		else{ 
			//If timestamp older than 7 days or is another month
			if(currentDate.getDate() > timestamp.getDate() + 6 || currentDate.getMonth() != timestamp.getMonth()){
				dateToReturn += this.getMonth(timestamp).substr(0,3) + " " + timestamp.getDate(); //Jan 1
			}
			//Only passes if same week
			else{ 
				//If timestamp is from past week
				if(currentDate.getDate() > timestamp.getDate()){
					dateToReturn += this.getWeekDay(timestamp).substr(0,3) // "Mon" for Monday
				}
				//posted today
				else{
					dateToReturn += this.getAMPM(timestamp); //12:00 AM
				}
			}
		}

		return dateToReturn;
	}
}

module.exports = new TimeToReadable()