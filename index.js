var date = new Date(),
    day = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear();


var days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// console.log(days[day]);
// console.log(months[month]);
// console.log(year);

console.log
(
    `
    Today: ${days[day]}
    Month: ${months[month]}
    Year:  ${year}
    `
);