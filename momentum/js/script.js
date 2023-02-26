//Time and Date

const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showDate(){
    const newdate =new Date();
    const options = {weekday: 'long',month: 'long', day: 'numeric'/*hour: 'numeric', minute: 'numeric', timeZone: 'UTC'*/};
    const currentDate = newdate.toLocaleDateString('ru-RU', options);
    date.textContent = currentDate;
}
showDate()

function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}
showTime();