// ==================== Project 3: Digital Clock ====================

// Select the element node where the formatted digital time string will be rendered:
const clock = document.getElementById('clock');

// setInterval(callback, delayInMs) repeatedly executes the callback function every 1000ms (1 second):
setInterval(function () {
    // Instantiate a new Date object capturing the current system time:
    let date = new Date();

    // date.toLocaleTimeString() converts the time portion of Date object to a localized string (e.g., "2:45:30 PM"):
    // console.log(date.toLocaleTimeString());

    // Update innerHTML of the clock container with the formatted time string:
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);