// SET A CONSTATE FOR THE ID'S
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
console.log(date, month, year);
const getDay = document.getElementById("getDay");
const result = document.getElementById("result");

//SET EVENTLISTENERS WHEN SUBMITING DETAILS
getDay.addEventListener("click",() =>
{
    //GET THE INPUTED VALUES OF THE "date", "month" and "year"
    let dateObj = new Date(`${date.value} ${month.value} ${year.value}`);
    let day = dateObj.toString();
    // dateObj (IS THE VALUE FOR THE INPUTE)
    
    day = day.slice(0, 3) // (O, 3) = THE FIRST THREE TEXT IN THE FULL DATE WHICH ARE THE DAY                                                           i.e. Monday 22 december 2002 = Mon  [in (0, 3)]
    console.log(dateObj);

    result.innerText = day; //  THIS PRESENT THE VALUE OF "day" TO THE id="result"
})