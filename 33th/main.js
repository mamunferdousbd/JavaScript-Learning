
var date = new Date();
console.log(date);

// Get the year as a four digit number (yyyy)
var year = date.getFullYear();
console.log(year);

// Get the month as a number (0-11)
var month = date.getMonth();
console.log(month);

// Get the day as a number (1-31)
var date1 = date.getDate();
console.log(date1);

// Get the hour (0-23)
var hour = date.getHours();
console.log(hour);

// Get the minute (0-59)
var minute = date.getMinutes();
console.log(minute);

// Get the second (0-59)
var sec = date.getSeconds();
console.log(sec);

// Get the millisecond (0-999)
var milsec= date.getMilliseconds();
console.log(milsec);

// Get the time (milliseconds since January 1, 1970)
var time =date.getTime();
console.log(time);

// Get the weekday as a number (0-6)
var day= date.getDay();
console.log(day);

// Get the time. ECMAScript 5. (Not Understand)
var ectime= Date.now();
console.log(ectime);



// Get the day as a number (1-31)