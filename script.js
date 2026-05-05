const display = document.getElementById('display');

function appendNumber(value) {
    // Add a bounce effect to the input display when typing
    display.value += value;
    display.style.animation = 'none';
    display.offsetHeight; /* trigger reflow */
    display.style.animation = 'pulse 0.1s ease';
}

function clearDisplay() {
    display.value = '';
    display.style.borderColor = 'rgba(34, 197, 94, 0.4)'; // Reset color
}

function calculate() {
    try {
        // Calculate the result
        // We use Function() instead of eval() for safety and better performance
        const result = Function('"use strict";return (' + display.value + ')')();
        
        if (result === undefined || isNaN(result)) {
            throw new Error();
        }
        
        display.value = result;
        
        // Flash animation for the correct answer
        display.style.borderColor = '#22c55e';
    } catch (error) {
        // Trigger error animations
        display.value = 'ERROR';
        display.style.borderColor = '#ef4444';
        
        // Shake the entire calculator display area
        if (navigator.vibrate) {
            navigator.vibrate(200); // Vibrate phone or supported PC hardware
        }
    }
}
