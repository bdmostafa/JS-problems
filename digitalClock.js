// Digital Clock solution

// setTimeout() runs once
// setInterval runs repeatedly after specific period of time but not connected with time function. So another function is getCurrentTime

function getCurrentTime() {
    const date = new Date()

    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hours = date.getHours()

    const twelveHoursFormat = hours > 12 ? hours - 12 : hours;
    const formatHours = twelveHoursFormat < 10 ? '0' + twelveHoursFormat : twelveHoursFormat;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${formatHours}:${formatMinutes}:${formatSeconds}`);
}

const timer = setInterval(() => {
    getCurrentTime();
}, 1000);

// to stop the clock
// clearInterval(timer);