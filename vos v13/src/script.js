const root = document.getElementById('root')

var date = new Date();
date.setHours(0, 0, 0, 0);


function setDateOnOs(){
    var dateList = document.getElementById('dates')
    dateList.textContent = date
}

setDateOnOs()