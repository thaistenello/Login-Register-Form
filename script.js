let log = document.querySelector('#Login');
let reg = document.querySelector('#Register');
let btn = document.querySelector('#btn');

// Defines initial state
let initialState = localStorage.getItem('initialState') || 'login';

// Apply transitions
function applyTransitions() {
  log.style.transition = 'left 0.5s';
  reg.style.transition = 'left 0.5s';
}

// Initial state (login or register)
if (initialState === 'login') {
    login();
} else {
    register();
}

// Switch to register screen
function register() {
    log.style.left = '-400px';
    reg.style.left = '50px';
    btn.style.left = '110px';
}

// Switch to login screen
function login() {
    log.style.left = '50px';
    reg.style.left = '450px';
    btn.style.left = '0px';
}

// Apply a short delay
setTimeout(applyTransitions, 100);