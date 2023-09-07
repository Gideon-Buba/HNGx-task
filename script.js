// Function to update the current day of the week
function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = currentDay;
}

// Function to update the current UTC time
function updateCurrentUTCTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toUTCString();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = currentUTCTime;
}

// Call the update functions on page load
updateCurrentDay();
updateCurrentUTCTime();
