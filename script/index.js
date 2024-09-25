let screen = document.getElementById('result');
let currentValue = '0';

function addToScreen(value) {
    if (currentValue === '0' && value !== '.') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    screen.value = currentValue;
}

function clearScreen() {
    currentValue = '0';
    screen.value = currentValue;
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1) || '0';
    screen.value = currentValue;
}

function calculateResult() {
    try {
        currentValue = eval(currentValue.replace('×', '*').replace('÷', '/')).toString();
        screen.value = currentValue;
    } catch (error) {
        alert("Invalid expression");
        clearScreen();
    }
}

document.addEventListener('keydown', function(event) {
    if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.', 'Enter', 'Backspace'].includes(event.key)) {
        event.preventDefault(); 
        if (event.key === 'Enter') {
            calculateResult();
        } else if (event.key === 'Backspace') {
            deleteLast();
        } else {
            addToScreen(event.key.replace('*', '×').replace('/', '÷'));
        }
    } else {
        event.preventDefault();
        alert("Only numbers are allowed");
    }
});