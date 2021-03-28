const timer = document.getElementById('timer');
const card = document.querySelector('.time');
card.style.display = 'none'
function getTime() {
    let myDate = new Date();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes()
    let sec = myDate.getSeconds()
    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    sec = sec < 10 ? `0${sec}` : sec
    let time = `${hours}:${minutes}:${sec}`
    if (hours === 12) {
        time = `${time} PM`
        timer.innerHTML = time;
        card.style.display = 'block'
        // setTimeout(time, 500);
        return time

    }
    else if (hours > 12) {
        console.warn('Greater than', hours)
        hours = hours % 12
        hours = hours < 10 ? `0${hours}` : hours
        time = `${hours}:${minutes}:${sec} PM`
        timer.innerHTML = time;
        card.style.display = 'block'
        return time
    }
    else {
        time = `${time} AM`
        timer.innerHTML = time;
        card.style.display = 'block'
        return time
    }
}

function getMilli() {
    let myDate = new Date();
    let milli = myDate.getMilliseconds()
    milli = milli.toString().substr(0, 2)
    console.warn(milli)
}

// addEventListener('load', () => getTime())
// setInterval(() => getMilli(), 100)
setInterval(() => getTime(), 1000)