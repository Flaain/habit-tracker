
let habits = [];
const HABIT_KEY = 'HABIT_KEY'

function loadData() {
    const habitString = localStorage.getItem(HABIT_KEY);
    const habitArray = JSON.parse(habitString);

    if (Array.isArray(habitArray)) {
        habits = habitArray;
    }
}

function saveData() {
    localStorage.setItem(HABIT_KEY, JSON.stringify(habits))
}

function initApp() {
    loadData();
}

initApp();
