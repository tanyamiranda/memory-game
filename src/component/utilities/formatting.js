export const formatDisplayDate = (dateValue) => {
    let current_datetime = new Date(dateValue);
    let formatted_date = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" +current_datetime.getFullYear() ;
    return formatted_date;
};

export const formatDisplayDateTime = (dateTimeValue) => {
    const current_datetime = new Date(dateTimeValue);
    return current_datetime.toLocaleString('en-US', {hour12: true });
    
};

export const formatDisplayDollarValue = (value) => {

    const currencyFormatter = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD',});
    return currencyFormatter.format(value);
}

export const getElapsedTime = (startTime, endTime) => {

	// time difference in ms
	var timeDiff = endTime - startTime;

	// strip the ms
	timeDiff = timeDiff / 1000;

	// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
	const seconds = Math.round(timeDiff % 60);

	// remove seconds from the date
	timeDiff = Math.floor(timeDiff / 60);

	// get minutes
	const minutes = Math.round(timeDiff % 60);

	// remove minutes from the date
	timeDiff = Math.floor(timeDiff / 60);

	// get hours
	const hours = Math.round(timeDiff % 24);

	// remove hours from the date
	const days = Math.floor(timeDiff / 24);

	let message = "";

	if (days > 0)
		message = message + (days > 0, days + " days ");

	if (hours > 0)		
		message = message + (hours > 0, hours + " hours ");
	
	if (minutes > 0)
		message = message + (minutes > 0, minutes + " minutes ");
	
	if (seconds > 0)
		message = message + (seconds > 0, seconds + " seconds ");

	return message;

}
