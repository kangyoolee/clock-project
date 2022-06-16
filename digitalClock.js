const clockDiv = document.querySelector(".clock");
const todayDiv = document.querySelector(".today");

function getTime() {
    let now = new Date();
    let hour = number(now.getHours()); //시 0-23시
    let minute = number(now.getMinutes()); //분 0-59분
    let second = number(now.getSeconds()); //초 0-59초
    let year = now.getFullYear(); //년
    let month = now.getMonth() + 1; //월 1-12
    let day = now.getDate(); //일 1-31
    let dayNumber = now.getDay(); //요일 0-6
    const dayList = ["일",  "월", "화", "수", "목", "금", "토"]; 

    let noon = "AM";
    if (hour > 11) {
        noon = "PM";
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    if (hour == 0) {
        hour = 12;
    }

    todayDiv.textContent = year + "." + number(month) + "." + day + " " + dayList[dayNumber]+"요일";
    clockDiv.textContent = noon + " " + hour + ":" + minute + ":" + second;
}

getTime();
setInterval(getTime, 1000);


function number(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}