// ==================== Project: Unlimited Background Colors (Async setInterval) ====================

/*
Key Concepts:
- Generating random hexadecimal color strings (#000000 to #FFFFFF).
- Controlling asynchronous continuous color changes using setInterval() and clearInterval().
- Defensive state management: Preventing multiple duplicate timer instances using 'if (!intervalId)'.
*/

// 1. Function to generate a random 6-character Hex color code:
const randomColor = function () {
    const hex = "0123456789ABCDEF"; // 16 hexadecimal digits (0-9, A-F)
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // Pick a random digit from the hex string and append it:
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Global variable to hold the active timer ID:
let intervalId;

// 2. Function to start changing the background color every second:
const startChangingColor = function () {
    // Check if a timer is not already running before starting a new one:
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    // Callback function executed on every timer tick:
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

// 3. Function to stop changing the background color:
const stopChangingColor = function () {
    // Cancel the running interval timer:
    clearInterval(intervalId);
    // Reset the intervalId back to null:
    intervalId = null;
};

// 4. Attach click event listeners to Start and Stop buttons:
document.querySelector('.start').addEventListener('click', startChangingColor);
document.querySelector('.stop').addEventListener('click', stopChangingColor);

