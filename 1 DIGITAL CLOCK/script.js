//set a values for the id's in the html
const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondSpan = document.getElementById("seconds");
const amorpmSpan = document.getElementById("amorpm");

//create a function to contain the const values of the id's
function changeTime(){
    const date = new Date();
    let hour = date.getHours(); //gets the current hour
    let minutes = date.getMinutes(); // gets the current minute
    let seconds = date.getSeconds(); // gets the current second
    let amorpm;

    //replaces the written text content to the current values of the time ( hour, minutes and time )
    hourSpan.textContent = hour;
    minuteSpan.textContent = minutes;
    secondSpan.textContent = seconds

    //set a conditions for the changing of "AM" or "PM"
    if (hour >= 12) {
        amorpm = "PM"        
    } else {
        amorpm = "AM"
    }
    //calls the values of the above condition
    amorpmSpan.textContent = amorpm;
}
// call or display the above function
changeTime();

//set an interval for the function to perform
setInterval(changeTime, 1000) // changes every 1 second